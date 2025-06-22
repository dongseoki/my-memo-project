import React from "react";
import { useState, useEffect } from "react";

function Main({ selectedMemo, editMemo, selectedMemoIdx }) {
  console.log("Main : ", selectedMemo);

  const handleTitleChange = (e) => {
    console.log("handleTitleChange : ", e.target.value);
    // setTitle(e.target.value);
    editMemo(selectedMemoIdx, e.target.value, selectedMemo.content);
  };

  const handleContentChange = (e) => {
    console.log("handleContentChange : ", e.target.value);
    // setContent(e.target.value);
    editMemo(selectedMemoIdx, selectedMemo.title, e.target.value);
  };

  return (
    <div className="Main">
      Main
      {selectedMemo ? (
        <>
          <div className="Title">
            <input
              className="MainMemo__Title"
              value={selectedMemo.title}
              onChange={handleTitleChange}
            />
          </div>
          <div className="Content">
            <textarea
              className="MainMemo__Content"
              value={selectedMemo.content}
              onChange={handleContentChange}
            />
          </div>
        </>
      ) : (
        <div className="no-memo-selected">
          메모가 없습니다. 새로운 메모를 생성해 주세요.
        </div>
      )}
    </div>
  );
}

export default Main;
