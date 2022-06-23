import { useState } from "react";
import { Infobox } from "./Infobox";
import "./App.css";
import { Academic, Adjustments } from "./Icons";

function App() {
  const [text, setText] = useState<string>();
  const change = (txt: string = "jaja") => {
    setText(txt);
  };

  return (
    <div className="text-3xl">
      <Infobox text={text} parentCallback={() => change("Hallo")} />
      {text}
      {text === "Hallo" ? (
        <Adjustments width="2rem" />
      ) : (
        <Academic width="1rem" />
      )}
    </div>
  );
}

export default App;
