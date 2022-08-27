import { NAVIGATION } from "../constants";
import { LinkNav } from "./LinkNav";

export const NavBar = () => {
  return (
    <nav>
      {NAVIGATION.map(({ id, name, route }) => (
        <LinkNav key={id} href={route} message={name} />
      ))}
    </nav>
  );
};
