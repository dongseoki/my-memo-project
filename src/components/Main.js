import React from "react";
import { useState } from "react";

function Main({ selectedMemo, editMemo, selectedMemoIdx }) {
  const [title, setTitle] = useState(selectedMemo.title);
  const [content, setContent] = useState(selectedMemo.content);

  const handleTitleChange = (e) => {
    console.log("handleTitleChange : ", e.target.value);
    setTitle(e.target.value);
    editMemo(selectedMemoIdx, e.target.value, content);
  };

  const handleContentChange = (e) => {
    console.log("handleContentChange : ", e.target.value);
    setContent(e.target.value);
    editMemo(selectedMemoIdx, title, e.target.value);
  };

  return (
    <div className="Main">
      Main
      <div className="Title">
        <input
          className="MainMemo__Title"
          value={title}
          onChange={handleTitleChange}
        />
      </div>
      <div className="Content">
        <textarea
          className="MainMemo__Content"
          value={content}
          onChange={handleContentChange}
        />
      </div>
    </div>
  );
}

export default Main;
