import { ContestProps, QuestionProps } from "../types";
import { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { ContestContext } from "../context/ContestContext";
import { ScoreContext } from "../context/ScoreContext";
import Spinner from "./Spinner";
import CountdownBar from "./CountdownBar";

export default function Contest({ closeContest }: ContestProps) {
  const { pickedCategoryFileName } = useContext(ContestContext);
  const { pickedCategoryTitle } = useContext(ContestContext);
  const { isChillMode } = useContext(ContestContext);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [questionCount, setQuestionCount] = useState<number>(0);
  const [questionData, setQuestionData] = useState<QuestionProps | null>(null);
  const { score, setScore } = useContext(ScoreContext);
  const [isTimeOut, setIsTimeOut] = useState<boolean>(false);
  let timeout: NodeJS.Timeout;

  useEffect(() => {
    const fetchRandomQuestion = async () => {
      setLoading(true); // Show loading spinner

      try {
        const url = `/data/${pickedCategoryFileName}.json`;
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        if (data.questions?.length > 0) {
          const randomIndex = Math.floor(Math.random() * data.questions.length);
          const selectedQuestion = data.questions[randomIndex];

          setTimeout(() => {
            setQuestionData(selectedQuestion);
            setLoading(false);
          }, 1500);
        } else {
          console.warn("No questions found in JSON file");
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching questions:", error);
        setLoading(false);
      }
    };

    fetchRandomQuestion();
  }, [pickedCategoryFileName]);

  useEffect(() => {
    if (!isChillMode) {
      timeout = setTimeout(() => {
        setIsTimeOut(true);
        setIsCorrect(false);
      }, 10000);
    }

    return () => clearTimeout(timeout);
  }, [questionData?.question]);

  const handleOptionClick = (optValue: string) => {
    if (selectedOption === null && !isTimeOut) {
      setSelectedOption(optValue);
      setIsCorrect((prevIsCorrect) => {
        const newIsCorrect = optValue === String(questionData?.answer);
        if (newIsCorrect) {
          setScore(score + 1);
        }
        return newIsCorrect;
      });
      clearTimeout(timeout);
    }
  };

  const shuffleOptionsArray = (array: string[]) => {
    return array
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
  };

  const optionsArray: string[] = questionData
    ? shuffleOptionsArray([
        questionData.option1 ?? "",
        questionData.option2 ?? "",
        questionData.option3 ?? "",
        questionData.option4 ?? "",
      ])
    : [];

  console.log("optionsArray :>> ", optionsArray);

  const handleNewQuestion = async () => {
    if (questionCount < 9) {
      setSelectedOption(null);
      setIsCorrect(null);
      setQuestionCount((prev) => prev + 1);
      setLoading(true);

      setTimeout(async () => {
        try {
          const response = await fetch(`/data/${pickedCategoryFileName}.json`);
          const data = await response.json();

          if (data.questions?.length) {
            const randomIndex = Math.floor(
              Math.random() * data.questions.length
            );
            setQuestionData(data.questions[randomIndex]);
          }
        } catch (error) {
          console.error("Error fetching questions:", error);
        }

        setLoading(false);
      }, 1500);
    }
  };

  console.log("isChillMode:", isChillMode);
  console.log("loading:", loading);
  console.log("selectedOption:", selectedOption);
  console.log("isTimeOut:", isTimeOut);

  return (
    <div className="flex flex-col gap-2 items-center">
      <div className="text-lg mt-0 mb-1 items-center flex flex-row justify-center">
        <span
          className="bg-navy-default text-neutral-50 text-lg px-2 py-1
          text-center items-center category-tag"
        >
          {pickedCategoryTitle}
        </span>
      </div>
      <div className="text-center">
        {!loading && questionCount !== 10 && (
          <div className="flex flex-col mb-2">
            <div
              className="text-lg px-2 py-1
       text-center mb-2 items-center fade-in text-mustard-default"
            >
              Soru {questionCount + 1} / 10
            </div>
            {!isChillMode && !loading && !selectedOption && !isTimeOut ? (
              <div className="w-full sm:min-w-[300px] md:min-w-[395px] lg:min-w-[535px] xl:min-w-[700px] 2xl:min-w-[830px] mx-auto mb-4">
                <CountdownBar />
              </div>
            ) : null}
          </div>
        )}
        {loading ? (
          <Spinner />
        ) : (
          questionCount !== 10 &&
          questionData && (
            <div className="flex flex-wrap flex-col items-center fade-in px-2">
              <span className="">{questionData.question}</span>
              {selectedOption !== null || isTimeOut ? (
                <div>
                  {isCorrect ? (
                    <div className="text-xl mt-4 text-green-default">
                      Doğru cevap! Tebrikler!
                    </div>
                  ) : (
                    <div className="text-xl mt-4 text-red-default flex flex-row gap-2">
                      Bilemedin! Doğru cevap:{" "}
                      <p className="text-black">{questionData?.answer}</p>
                    </div>
                  )}
                </div>
              ) : null}
              <div
                className={`flex flex-wrap gap-4 justify-center flex-col items-center mb-6 ${
                  questionData?.question === "AI is confused :/"
                    ? "mt-2"
                    : "mt-6"
                }`}
              >
                {optionsArray.map((optValue, index) => (
                  <div
                    key={index}
                    className={`${
                      selectedOption === null && isCorrect === null
                        ? "bg-mustard-default cursor-default"
                        : selectedOption === optValue
                        ? isCorrect
                          ? "bg-green-default cursor-default"
                          : "bg-red-default cursor-default"
                        : "bg-mustard-default cursor-default"
                    } ${
                      selectedOption === null && !isTimeOut
                        ? "hover:bg-mustard-light"
                        : selectedOption === optValue
                        ? isCorrect
                          ? "hover:bg-green-default"
                          : "hover:bg-red-default"
                        : ""
                    } text-neutral-50 text-2xl rounded-md p-3 ${
                      selectedOption === null && !isTimeOut && "cursor-pointer"
                    } w-56 sm:w-64 text-center shadow-lg shadow-zinc-400`}
                    onClick={() => handleOptionClick(optValue)}
                  >
                    {`${optValue}`}
                  </div>
                ))}
              </div>
              {selectedOption !== null || isTimeOut ? (
                <button
                  className="button-prm bg-purple-default hover:bg-purple-light text-neutral-50 text-2xl rounded-md p-3 cursor-pointer w-48 text-center shadow-lg shadow-zinc-400 mt-6"
                  onClick={handleNewQuestion}
                >
                  Sonraki Soru
                </button>
              ) : null}
            </div>
          )
        )}
      </div>
      <div
        className="button-prm bg-gray-default hover:bg-gray-light  text-neutral-50 text-2xl rounded-md p-3
          cursor-pointer w-48 text-center shadow-lg shadow-zinc-400 mt-1"
        onClick={closeContest}
      >
        Ana Sayfa
      </div>
    </div>
  );
}
