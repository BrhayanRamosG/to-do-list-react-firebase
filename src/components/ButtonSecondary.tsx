import { ButtonProps } from "../interfaces/props";

export const ButtonSecondary = ({
  message,
  onClick,
  className,
  type = "button",
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`p-2 bg-gray-600 dark:text-white dark:bg-gray-500 rounded-md ${className}`}
      type={type}
    >
      {message}
    </button>
  );
};
