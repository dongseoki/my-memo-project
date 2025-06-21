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
  const [selectedMemoIdx, setSelectedMemoIdx] = useState(0);
  const selectedMemo = memos[selectedMemoIdx];
  const editMemo = (idx, title, content) => {
    const newMemos = [...memos];
    newMemos[idx] = { ...newMemos[idx], title, content };
    setMemos(newMemos);
  };
  const addMemo = () => {
    const newMemos = [
      ...memos,
      {
        title: "Untitled",
        content: "",
        createdAt: Date.now(),
        updatedAt: Date.now(),
      },
    ];
    setMemos(newMemos);
    setSelectedMemoIdx(newMemos.length - 1);
  };

  return (
    <div className="App">
      App
      <Side
        memos={memos}
        selectedMemoIdx={selectedMemoIdx}
        setSelectedMemoIdx={setSelectedMemoIdx}
        addMemo={addMemo}
      />
      <Main
        selectedMemo={selectedMemo}
        editMemo={editMemo}
        selectedMemoIdx={selectedMemoIdx}
      />
    </div>
  );
}

export default App;
