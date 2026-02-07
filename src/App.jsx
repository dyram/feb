import { useState } from "react";
import QuestionPage from "./components/QuestionPage";
import CelebrationPage from "./components/CelebrationPage";
import "./App.css";

const GF_MAP = {
  srk: "Nafeeza",
  ri: "Rahila",
  rbj: "Anuja",
  aj: "Deann",
  d: "Sophie",
};

const DEFAULT_NAME = GF_MAP["d"];

function App() {
  const [accepted, setAccepted] = useState(false);

  // use query params
  const queryParams = new URLSearchParams(window.location.search);
  const name = queryParams.get("n");
  const useCustomName = queryParams.get("c") === "true";

  const handleYes = () => {
    setAccepted(true);
  };

  const mappedName = useCustomName
    ? (name ?? "My Love")
    : name
      ? (GF_MAP[name?.toLowerCase()] ?? DEFAULT_NAME)
      : DEFAULT_NAME;

  return (
    <div className="app">
      {!accepted ? (
        <QuestionPage onYes={handleYes} name={mappedName} />
      ) : (
        <CelebrationPage />
      )}
    </div>
  );
}

export default App;
