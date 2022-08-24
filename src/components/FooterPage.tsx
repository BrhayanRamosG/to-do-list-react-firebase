import { INFO, YEAR } from "../constants";

export const FooterPage = () => {
  const { name, lastName } = INFO;

  return (
    <footer>
      <div>
        <h3 className="capitalize font-bold">
          {name} {lastName} | {YEAR}
        </h3>
      </div>
    </footer>
  );
};
