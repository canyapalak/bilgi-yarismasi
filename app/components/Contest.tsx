import { ContestProps, QuestionProps } from "../types";
import { useContext, useEffect, useRef, useState } from "react";
import { ContestContext } from "../context/ContestContext";
import { ScoreContext } from "../context/ScoreContext";
import Spinner from "./Spinner";
import CountdownBar from "./CountdownBar";
import Image from "next/image";
import confetti from "@/public/assets/confetti.png";

export default function Contest({
  closeContest,
  openContestResult,
}: ContestProps) {
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
  const [usedQuestionIds, setUsedQuestionIds] = useState<number[]>([]);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  let timeout: NodeJS.Timeout;

  const fetchRandomQuestion = async () => {
    setLoading(true);

    try {
      let allQuestions: QuestionProps[] = [];

      if (pickedCategoryFileName === "Hepsi!") {
        const categoryFiles = [
          "Category1",
          "Category2",
          "Category3",
          "Category4",
          "Category5",
          "Category6",
          "Category7",
        ]; // Add all category filenames here

        const responses = await Promise.all(
          categoryFiles.map((file) => fetch(`/data/${file}.json`))
        );
        const dataArr = await Promise.all(responses.map((res) => res.json()));

        // Merge all questions, ensuring unique IDs using category name
        allQuestions = dataArr.flatMap((data, index) =>
          data.questions.map((q: QuestionProps) => ({
            ...q,
            id: `${categoryFiles[index]}-${q.id}`, // Unique ID
          }))
        );
      } else {
        // Load only the selected category
        const response = await fetch(`/data/${pickedCategoryFileName}.json`);
        if (!response.ok)
          throw new Error(`HTTP error! Status: ${response.status}`);

        const data = await response.json();
        allQuestions = data.questions.map((q: QuestionProps) => ({
          ...q,
          id: `${pickedCategoryFileName}-${q.id}`, // Unique ID
        }));
      }

      // Filter out used questions
      const availableQuestions = allQuestions.filter(
        (q) => !usedQuestionIds.includes(q.id)
      );

      if (availableQuestions.length > 0) {
        const randomIndex = Math.floor(
          Math.random() * availableQuestions.length
        );
        const selectedQuestion = availableQuestions[randomIndex];

        setTimeout(() => {
          setQuestionData(selectedQuestion);
          setUsedQuestionIds((prev) => [...prev, selectedQuestion.id]); // Store unique ID
          setSelectedOption(null);
          setIsCorrect(null);
          setIsTimeOut(false);
          setLoading(false);
        }, 1000);
      } else {
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRandomQuestion();
    setQuestionCount(0);
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
      timeoutRef.current = setTimeout(() => {
        setIsTimeOut(true);
        setIsCorrect(false);
      }, 10000);
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [questionData]);

  const shuffleOptionsArray = (array: string[]) => {
    return array
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
  };

  const handleOptionClick = (optValue: string) => {
    if (selectedOption === null && !isTimeOut) {
      if (timeoutRef.current) clearTimeout(timeoutRef.current); // Stop countdown

      setSelectedOption(optValue);
      setIsCorrect(optValue === String(questionData?.answer));

      if (optValue === String(questionData?.answer)) {
        setScore(score + 1);
      }
    }
  };

  const handleNewQuestion = async () => {
    if (questionCount < 10) {
      fetchRandomQuestion();
      setQuestionCount(questionCount + 1);
    } else {
      ("");
    }
  };

  const handleShowResultsClick = (): void => {
    closeContest();
    openContestResult();
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

        {loading && questionCount !== 10 ? (
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
                    <div className="text-xl mt-4 text-red-default flex flex-col sm:flex-row">
                      <span className="flex flex-row gap-2">
                        <p> Bilemedin! </p>
                        <p className="">Doğru cevap:</p>
                      </span>
                      <p className="text-black ml-0 sm:ml-2">
                        {questionData?.answer}
                      </p>
                    </div>
                  )}
                </div>
              ) : null}

              <div className="flex flex-wrap items-center gap-6 mt-8 mb-6 justify-center">
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
      {questionCount === 10 && (
        <div className="items-center flex flex-col justify-normals">
          <Image
            src={confetti}
            className="text-5xl celebrate-icon fade-in text-mustard-default mb-2 w-16 h-16"
            alt="Confetti"
          />
          <p className="fade-in text-center">Yarışmayı tamamladın!</p>
          <div
            className="button-prm bg-purple-default hover:bg-purple-light text-neutral-50 text-2xl rounded-md p-3 cursor-pointer w-48 text-center shadow-lg shadow-zinc-400 mt-6"
            onClick={handleShowResultsClick}
          >
            Sonucu Gör
          </div>
        </div>
      )}
      <div
        className="button-prm bg-gray-default hover:bg-gray-light text-neutral-50 text-2xl rounded-md p-3 cursor-pointer w-48 text-center shadow-lg shadow-zinc-400 mt-3"
        onClick={closeContest}
      >
        Ana Sayfa
      </div>
    </div>
  );
}
