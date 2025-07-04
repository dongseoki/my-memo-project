import { useState, useEffect } from "react";
import "./App.css";
import Side from "./components/Side";
import Main from "./components/Main";
import {
  loadMemosFromStorage,
  saveMemosToStorage,
} from "./storage/localStorage";

function App() {
  // 최초 렌더링 시 localStorage에서 불러오거나, 없으면 기본값 사용
  const [memos, setMemos] = useState(() => {
    const stored = loadMemosFromStorage();
    if (stored && Array.isArray(stored) && stored.length > 0) {
      return stored;
    }
    return [
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
    ];
  });
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
  const deleteMemo = (idx) => {
    const newMemos = [...memos];
    newMemos.splice(idx, 1);

    if (newMemos.length === 0) {
      setMemos([]);
      setSelectedMemoIdx(null);
      return;
    }

    if (idx === selectedMemoIdx) {
      setSelectedMemoIdx(0);
    } else if (idx < selectedMemoIdx) {
      setSelectedMemoIdx(selectedMemoIdx - 1);
    }

    setMemos(newMemos);
  };

  // memos가 변경될 때마다 localStorage에 저장
  useEffect(() => {
    saveMemosToStorage(memos);
  }, [memos]);

  return (
    <div className="App">
      App
      <Side
        memos={memos}
        selectedMemoIdx={selectedMemoIdx}
        setSelectedMemoIdx={setSelectedMemoIdx}
        addMemo={addMemo}
        deleteMemo={deleteMemo}
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
