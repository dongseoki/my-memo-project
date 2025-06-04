import React from "react";

function Main({ selectedMemo }) {
  return (
    <div className="Main">
      Main
      <div className="Title">{selectedMemo.title}</div>
      <div className="Content">{selectedMemo.content}</div>
    </div>
  );
}

export default Main;
