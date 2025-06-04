import React from "react";
import { useState } from "react";
import MemoTitleItem from "./MemoTitleItem";

function MemoTitleList({ memos, selectedMemoIdx, setSelectedMemoIdx }) {
  const handleMemoTitleClick = (idx) => {
    setSelectedMemoIdx(idx);
  };
  return (
    <div className="MemoTitleList">
      {memos.map((memo, index) => (
        <MemoTitleItem
          key={index}
          title={memo.title}
          isSelected={selectedMemoIdx === index}
          onClick={() => handleMemoTitleClick(index)}
        />
      ))}
    </div>
  );
}

export default MemoTitleList;
