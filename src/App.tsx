import { Outlet } from "react-router-dom";
import { FooterPage, NavBar } from "./components";

function App() {
  return (
    <div className="App">
      <NavBar />
      <main className="content">
        <Outlet />
      </main>
      <FooterPage />
    </div>
  );
}

export default App;
