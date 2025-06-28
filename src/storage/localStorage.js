const MEMO_STORAGE_KEY = "memo-app-memos";

export const loadMemosFromStorage = () => {
  try {
    const storedMemos = localStorage.getItem(MEMO_STORAGE_KEY);
    return storedMemos ? JSON.parse(storedMemos) : null;
  } catch (error) {
    console.error("메모 로드 중 오류 발생:", error);
    return null;
  }
};

export const saveMemosToStorage = (memos) => {
  try {
    localStorage.setItem(MEMO_STORAGE_KEY, JSON.stringify(memos));
  } catch (error) {
    console.error("메모 저장 중 오류 발생:", error);
  }
};
