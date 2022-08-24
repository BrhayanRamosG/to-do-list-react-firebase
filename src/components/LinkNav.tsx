import { Link } from "react-router-dom";
import { LinkProps } from "../interfaces/props";

export const LinkNav = ({ href, message, className }: LinkProps) => {
  return (
    <Link className={`${className}`} to={href}>
      {message}
    </Link>
  );
};
