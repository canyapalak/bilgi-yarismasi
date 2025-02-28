import { ContestProps, QuestionProps } from "../types";
import { useContext, useEffect, useState } from "react";
import { ContestContext } from "../context/ContestContext";
import { ScoreContext } from "../context/ScoreContext";
import Spinner from "./Spinner";
import CountdownBar from "./CountdownBar";

export default function Contest({ closeContest }: ContestProps) {
  const { pickedCategoryFileName, pickedCategoryTitle, isChillMode } =
    useContext(ContestContext);
  const { score, setScore } = useContext(ScoreContext);

  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [questionCount, setQuestionCount] = useState<number>(0);
  const [questionData, setQuestionData] = useState<QuestionProps | null>(null);
  const [shuffledOptions, setShuffledOptions] = useState<string[]>([]);
  const [isTimeOut, setIsTimeOut] = useState<boolean>(false);
  let timeout: NodeJS.Timeout;

  const fetchRandomQuestion = async () => {
    setLoading(true);

    try {
      const response = await fetch(`/data/${pickedCategoryFileName}.json`);
      if (!response.ok)
        throw new Error(`HTTP error! Status: ${response.status}`);
      const data = await response.json();

      if (data.questions?.length > 0) {
        const randomIndex = Math.floor(Math.random() * data.questions.length);
        const selectedQuestion = data.questions[randomIndex];

        setTimeout(() => {
          setQuestionData(selectedQuestion);
          setSelectedOption(null); // Reset selected option
          setIsCorrect(null);
          setIsTimeOut(false);
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

  useEffect(() => {
    fetchRandomQuestion();
  }, [pickedCategoryFileName]);

  useEffect(() => {
    if (questionData) {
      const options = [
        questionData.option1,
        questionData.option2,
        questionData.option3,
        questionData.option4,
      ].filter(
        (opt): opt is string => typeof opt === "string" && opt.trim() !== ""
      );

      setShuffledOptions(shuffleOptionsArray(options));
    }
  }, [questionData]);

  useEffect(() => {
    if (!isChillMode && questionData) {
      timeout = setTimeout(() => {
        setIsTimeOut(true);
        setIsCorrect(false);
      }, 10000);
    }

    return () => clearTimeout(timeout);
  }, [questionData]);

  const shuffleOptionsArray = (array: string[]) => {
    return array
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
  };

  const handleOptionClick = (optValue: string) => {
    if (selectedOption === null && !isTimeOut) {
      setSelectedOption(optValue);
      setIsCorrect(optValue === String(questionData?.answer));
      if (optValue === String(questionData?.answer)) {
        setScore((prev: number) => prev + 1);
      }
      clearTimeout(timeout);
    }
  };

  const handleNewQuestion = async () => {
    if (questionCount < 9) {
      setQuestionCount((prev) => prev + 1);
      fetchRandomQuestion();
    }
  };

  return (
    <div className="flex flex-col gap-2 items-center">
      <span className="bg-navy-default text-neutral-50 text-lg px-2 py-1 category-tag">
        {pickedCategoryTitle}
      </span>
      <div className="text-center mt-[-40px]">
        {!loading && questionCount !== 10 && (
          <div className="flex flex-col mb-2">
            <div className="text-lg px-2 py-1 text-mustard-default">
              Soru {questionCount + 1} / 10
            </div>
            {!isChillMode && !loading && !selectedOption && !isTimeOut && (
              <div className="w-full mx-auto mb-4">
                <CountdownBar />
              </div>
            )}
          </div>
        )}

        {loading ? (
          <Spinner />
        ) : (
          questionCount !== 10 &&
          questionData && (
            <div className="flex flex-col items-center fade-in px-2">
              <span>{questionData.question}</span>

              {selectedOption !== null || isTimeOut ? (
                <div>
                  {isCorrect ? (
                    <div className="text-xl mt-4 text-green-default">
                      Doğru cevap! Tebrikler!
                    </div>
                  ) : (
                    <div className="text-xl mt-4 text-red-default flex gap-2">
                      Bilemedin! Doğru cevap:{" "}
                      <p className="text-black">{questionData?.answer}</p>
                    </div>
                  )}
                </div>
              ) : null}

              <div className="flex flex-col items-center gap-4 mt-6 mb-6">
                {shuffledOptions.map((optValue, index) => (
                  <div
                    key={index}
                    className={`w-56 sm:w-64 text-center text-2xl rounded-md p-3 shadow-lg shadow-zinc-400 text-white ${
                      selectedOption === optValue
                        ? isCorrect
                          ? "bg-green-default"
                          : "bg-red-default"
                        : "bg-mustard-default"
                    } ${
                      selectedOption === null && !isTimeOut
                        ? "cursor-pointer hover:bg-mustard-light"
                        : "cursor-default"
                    }`}
                    onClick={() => handleOptionClick(optValue)}
                  >
                    {optValue}
                  </div>
                ))}
              </div>

              {(selectedOption !== null || isTimeOut) && (
                <button
                  className="button-prm bg-purple-default hover:bg-purple-light text-neutral-50 text-2xl rounded-md p-3 cursor-pointer w-48 text-center shadow-lg shadow-zinc-400 mt-6"
                  onClick={handleNewQuestion}
                >
                  Sonraki Soru
                </button>
              )}
            </div>
          )
        )}
      </div>
      <div
        className="button-prm bg-gray-default hover:bg-gray-light text-neutral-50 text-2xl rounded-md p-3 cursor-pointer w-48 text-center shadow-lg shadow-zinc-400 mt-1"
        onClick={closeContest}
      >
        Ana Sayfa
      </div>
    </div>
  );
}
