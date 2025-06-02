import React from "react";
import MemoTitleItem from "./MemoTitleItem";

function MemoTitleList({ memos }) {
  return (
    <div className="MemoTitleList">
      {memos.map((memo, index) => (
        <MemoTitleItem key={index} title={memo.title} />
      ))}
    </div>
  );
}

export default MemoTitleList;
