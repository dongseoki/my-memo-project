import React from "react";
import SideHeader from "./SideHeader";
import SideBody from "./SideBody";

function Side({ memos, selectedMemoIdx, setSelectedMemoIdx, addMemo }) {
  return (
    <div className="Side">
      Side
      <SideHeader />
      <SideBody
        memos={memos}
        selectedMemoIdx={selectedMemoIdx}
        setSelectedMemoIdx={setSelectedMemoIdx}
        addMemo={addMemo}
      />
    </div>
  );
}

export default Side;
