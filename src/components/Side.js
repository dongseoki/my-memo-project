import React from "react";
import SideHeader from "./SideHeader";
import SideBody from "./SideBody";

function Side({ memos, selectedMemoIdx, setSelectedMemoIdx }) {
  return (
    <div className="Side">
      Side
      <SideHeader />
      <SideBody
        memos={memos}
        selectedMemoIdx={selectedMemoIdx}
        setSelectedMemoIdx={setSelectedMemoIdx}
      />
    </div>
  );
}

export default Side;
