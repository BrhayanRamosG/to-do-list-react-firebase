import { ButtonProps } from "../interfaces/props";

export const ButtonSecondary = ({
  message,
  onClick,
  className,
  type = "button",
  disabled,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`p-2 bg-slate-600 dark:text-white dark:bg-gray-700 rounded-md border border-transparent shadow-sm justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 ${className}`}
      type={type}
      disabled={disabled}
    >
      {message}
    </button>
  );
};
