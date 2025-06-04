import React from "react";
import MemoTitleList from "./MemoTitleList";

function SideBody({ memos, selectedMemoIdx, setSelectedMemoIdx }) {
  return (
    <div className="SideBody">
      <MemoTitleList
        memos={memos}
        selectedMemoIdx={selectedMemoIdx}
        setSelectedMemoIdx={setSelectedMemoIdx}
      />
    </div>
  );
}

export default SideBody;
