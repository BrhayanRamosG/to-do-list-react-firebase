import { ButtonProps } from "../interfaces/props";

export const ButtonPrimary = ({
  message,
  onClick,
  className,
  type = "button",
  disabled,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`p-2 bg-lime-600 justify-center border border-transparent shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-500 dark:text-white dark:bg-lime-700 rounded-md ${className}`}
      type={type}
      disabled={disabled}
    >
      {message}
    </button>
  );
};
