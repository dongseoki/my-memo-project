import React from "react";
import MemoTitleList from "./MemoTitleList";

function SideBody({ memos }) {
  return (
    <div className="SideBody">
      <MemoTitleList memos={memos} />
    </div>
  );
}

export default SideBody;
