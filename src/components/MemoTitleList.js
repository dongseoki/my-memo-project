import React from "react";
import { useState } from "react";
import MemoTitleItem from "./MemoTitleItem";

function MemoTitleList({
  memos,
  selectedMemoIdx,
  setSelectedMemoIdx,
  deleteMemo,
}) {
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
          onMemoTitleClick={() => handleMemoTitleClick(index)}
          onDeleteMemoClick={() => deleteMemo(index)}
        />
      ))}
    </div>
  );
}

export default MemoTitleList;
