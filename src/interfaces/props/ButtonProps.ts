import { GeneralProps } from "./GeneralProps";

export interface ButtonProps extends GeneralProps {
  type?: "button" | "submit" | "reset";
}
