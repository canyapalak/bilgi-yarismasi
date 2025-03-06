import React, { createContext, useState, ReactNode } from "react";
import { ContestProviderProps } from "../types";

// ContestContext.tsx
export const ContestContext = createContext<ContestProviderProps | undefined>(
  undefined
);

export const ContestProvider = ({ children }: { children: ReactNode }) => {
  const [pickedCategoryFileName, setPickedCategoryFileName] = useState<
    string | null
  >(null);
  const [pickedCategoryTitle, setPickedCategoryTitle] = useState<string | null>(
    null
  );

  const [isChillMode, setIsChillMode] = useState<boolean | null>(false);
  const [questionAmount, setQuestionAmount] = useState<number | null>(10);
  const [questionTime, setQuestionTime] = useState<number | null>(10);

  const contextValue: ContestProviderProps = {
    pickedCategoryFileName,
    setPickedCategoryFileName,
    pickedCategoryTitle,
    setPickedCategoryTitle,
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
