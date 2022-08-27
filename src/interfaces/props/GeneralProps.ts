import { ChangeEventHandler, ReactNode, SyntheticEvent } from "react";

export interface GeneralProps {
  className?: string;
  message?: string;
  children?: ReactNode;
  onChange?: ChangeEventHandler;
  onClick?: (e: SyntheticEvent) => void;
  disabled?: boolean;
}
