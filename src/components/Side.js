import React from "react";
import SideHeader from "./SideHeader";
import SideBody from "./SideBody";

function Side({ memos }) {
  return (
    <div className="Side">
      Side
      <SideHeader />
      <SideBody memos={memos} />
    </div>
  );
}

export default Side;
