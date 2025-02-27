import React, { createContext, useState, ReactNode } from "react";
import { ContestProviderProps } from "../types";

export const ContestContext = createContext<ContestProviderProps | any>(
  undefined
);

export const ContestProvider = ({ children }: { children: ReactNode }) => {
  const [pickedCategoryFileName, setPickedCategoryFileName] = useState<
    string | null
  >(null);
  console.log("pickedCategoryFileName", pickedCategoryFileName);
  const [isChillMode, setIsChillMode] = useState<boolean | null>(false);
  const [questionAmount, setQuestionAmount] = useState<number | null>(10);
  const [questionTime, setQuestionTime] = useState<number | null>(10);

  const contextValue: ContestProviderProps = {
    pickedCategoryFileName,
    setPickedCategoryFileName,
    isChillMode,
    setIsChillMode,
    questionAmount,
    setQuestionAmount,
    questionTime,
    setQuestionTime,
  };

  return (
    <ContestContext.Provider value={contextValue}>
      {children}
    </ContestContext.Provider>
  );
};
