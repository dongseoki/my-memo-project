import React from "react";
import SideHeader from "./SideHeader";
import SideBody from "./SideBody";

function Side({
  memos,
  selectedMemoIdx,
  setSelectedMemoIdx,
  addMemo,
  deleteMemo,
}) {
  return (
    <div className="Side">
      Side
      <SideHeader />
      <SideBody
        memos={memos}
        selectedMemoIdx={selectedMemoIdx}
        setSelectedMemoIdx={setSelectedMemoIdx}
        addMemo={addMemo}
        deleteMemo={deleteMemo}
      />
    </div>
  );
}

export default Side;
