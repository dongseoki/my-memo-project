import React from "react";
import MemoTitleList from "../MemoTitleList";

function SideBody({
  memos,
  selectedMemoIdx,
  setSelectedMemoIdx,
  addMemo,
  deleteMemo,
}) {
  return (
    <div className="SideBody">
      <MemoTitleList
        memos={memos}
        selectedMemoIdx={selectedMemoIdx}
        setSelectedMemoIdx={setSelectedMemoIdx}
        deleteMemo={deleteMemo}
      />
      <button className="add-memo-button" onClick={addMemo}>
        +
      </button>
    </div>
  );
}

export default SideBody;
