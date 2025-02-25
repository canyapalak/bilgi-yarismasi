export interface WelcomeButtonsProps {
  openHowToPlay: () => void;
}

export interface Category {
  title: string;
  fileName: string;
}

export interface ModalInterface {
  open: boolean;
  setOpen: (bool: boolean) => void;
}
