import { ContestProps, QuestionProps } from "../types";
import { useContext, useEffect, useRef, useState } from "react";
import { ContestContext } from "../context/ContestContext";
import { ScoreContext } from "../context/ScoreContext";
import Spinner from "./Spinner";
import CountdownBar from "./CountdownBar";
import CelebrationIcon from "@mui/icons-material/Celebration";

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
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
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
          setSelectedOption(null);
          setIsCorrect(null);
          setIsTimeOut(false);
          setLoading(false);
        }, 1000);
      } else {
        console.warn("No questions found in JSON file");
        setLoading(false);
      }
    } catch (error) {
      console.error("Error fetching questions:", error);
      setLoading(false);
    }
  };

  console.log("questionCount :>> ", questionCount);

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

  console.log("score :>> ", score);

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

  console.log("isChillMode", isChillMode);

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
                    <div className="text-xl mt-4 text-red-default flex gap-2">
                      Bilemedin! Doğru cevap:{" "}
                      <p className="text-black">{questionData?.answer}</p>
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
          <CelebrationIcon className="text-5xl celebrate-icon fade-in text-mustard-default mb-2" />
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
