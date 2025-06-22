import React from "react";

/**
 * 메모 제목을 표시하는 컴포넌트
 * @param {Object} props - 컴포넌트 props
 * @param {string} props.title - 표시할 메모 제목
 * @param {boolean} props.isSelected - 메모가 선택되었는지 여부
 * @returns {JSX.Element} 메모 제목을 표시하는 div 요소
 */
function MemoTitleItem({
  title,
  isSelected,
  onMemoTitleClick,
  onDeleteMemoClick,
}) {
  console.debug("MemoTitleItem : ", title, isSelected);
  return (
    <div className="MemoTitleItemWrapper">
      <div
        className={`MemoTitleItem ${isSelected ? "selected" : ""}`}
        onClick={onMemoTitleClick}
      >
        {title}
      </div>
      <button onClick={onDeleteMemoClick}>삭제</button>
    </div>
  );
}

export default MemoTitleItem;
