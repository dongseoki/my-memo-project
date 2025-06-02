import { useState } from "react";
import "./App.css";
import Side from "./components/Side";
import Main from "./components/Main";

function App() {
  const [memos, setMemos] = useState([
    {
      title: "Memo 1",
      content: "This is memo 1",
      createdAt: 1641225302265,
      updatedAt: 1641225302265,
    },
    {
      title: "Memo 2",
      content: "This is memo 2",
      createdAt: 1641225309267,
      updatedAt: 1641225309267,
    },
    {
      title: "Memo 3",
      content: "This is memo 3",
      createdAt: 1641225309267,
      updatedAt: 1641225309267,
    },
  ]);
  return (
    <div className="App">
      App
      <Side memos={memos} />
      <Main />
    </div>
  );
}

export default App;
