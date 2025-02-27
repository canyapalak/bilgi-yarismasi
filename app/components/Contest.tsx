import { ContestProps, QuestionProps } from "../types";
import { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { ContestContext } from "../context/ContestContext";

export default function Contest({ closeContest }: ContestProps) {
  const { pickedCategoryFileName } = useContext(ContestContext);
  const isChillMode = useContext(ContestContext);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [questionCount, setQuestionCount] = useState<number>(0);
  const [questionData, setQuestionData] = useState<QuestionProps | null>(null);

  useEffect(() => {
    const fetchRandomQuestion = async () => {
      try {
        const url = `/data/${pickedCategoryFileName}.json`; // ✅ Now correct
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        if (data.questions?.length > 0) {
          const randomIndex = Math.floor(Math.random() * data.questions.length);
          setQuestionData(data.questions[randomIndex]);
        } else {
          console.warn("No questions found in JSON file");
        }
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };

    fetchRandomQuestion();
  }, [pickedCategoryFileName]);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsCorrect(option === questionData?.answer);
  };

  const handleNextQuestion = async () => {
    if (questionCount < 9) {
      setSelectedOption(null);
      setIsCorrect(null);
      setQuestionCount((prev) => prev + 1);
      setLoading(true);

      try {
        const response = await fetch(`/data/${pickedCategoryFileName}.json`);
        const data = await response.json();

        if (data.questions?.length) {
          const randomIndex = Math.floor(Math.random() * data.questions.length);
          setQuestionData(data.questions[randomIndex]);
        }
      } catch (error) {
        console.error("Error fetching questions:", error);
      }

      setLoading(false);
    }
  };
  return (
    <div className="flex flex-col gap-8 items-center">
      <div>
        <p>{questionData ? questionData.question : ""}</p>
      </div>
      <div
        className="button-prm bg-gray-default text-neutral-50 text-2xl rounded-md p-3
          cursor-pointer hover:bg-gray-light w-48 text-center shadow-lg shadow-zinc-400"
        onClick={closeContest}
      >
        Ana Sayfa
      </div>
    </div>
  );
}
