import { ButtonProps } from "../interfaces/props";

export const ButtonPrimary = ({
  message,
  onClick,
  className,
  type = "button",
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`p-2 bg-green-600 dark:text-white dark:bg-green-500 rounded-md ${className}`}
      type={type}
    >
      {message}
    </button>
  );
};
