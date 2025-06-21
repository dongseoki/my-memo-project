import React from "react";
import MemoTitleList from "./MemoTitleList";

function SideBody({ memos, selectedMemoIdx, setSelectedMemoIdx, addMemo }) {
  return (
    <div className="SideBody">
      <MemoTitleList
        memos={memos}
        selectedMemoIdx={selectedMemoIdx}
        setSelectedMemoIdx={setSelectedMemoIdx}
      />
      <button className="add-memo-button" onClick={addMemo}>
        +
      </button>
    </div>
  );
}

export default SideBody;
