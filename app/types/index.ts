export interface WelcomeButtonsProps {
  openHowToPlay: () => void;
  openContest: () => void;
}

export interface Category {
  title: string;
  fileName: string;
}

export interface QuestionProps {
  id: number;
  question: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  answer: string;
  options: string[];
}

export interface HowToPlayProps {
  closeHowToPlay: () => void;
}

export interface ContestProps {
  closeContest: () => void;
  openContestResult: () => void;
}

export interface ContestProviderProps {
  pickedCategoryFileName: string | null;
  setPickedCategoryFileName: React.Dispatch<
    React.SetStateAction<string | null>
  >;
  pickedCategoryTitle: string | null;
  setPickedCategoryTitle: React.Dispatch<React.SetStateAction<string | null>>;
  isChillMode: boolean | null;
  setIsChillMode: React.Dispatch<React.SetStateAction<boolean | null>>;
  questionAmount: number | null;
  setQuestionAmount: React.Dispatch<React.SetStateAction<number | null>>;
  questionTime: number | null;
  setQuestionTime: React.Dispatch<React.SetStateAction<number | null>>;
}

export interface ScoreProviderProps {
  score: number | null;
  setScore: React.Dispatch<React.SetStateAction<number | null>>;
}

export interface ContestResultProps {
  closeContestResult: () => void;
}
export interface ModalInterface {
  open: boolean;
  setOpen: (bool: boolean) => void;
}
