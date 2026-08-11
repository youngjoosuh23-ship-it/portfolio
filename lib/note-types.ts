export const NOTE_TYPES = ["fleeting", "literature", "permanent"] as const;
export type NoteType = (typeof NOTE_TYPES)[number];

export const NOTE_TYPE_LABEL: Record<NoteType, string> = {
  fleeting: "임시 노트",
  literature: "문헌 노트",
  permanent: "영구 노트",
};

export const NOTE_TYPE_COLOR: Record<NoteType, string> = {
  fleeting: "#7c97b0",
  literature: "#4682b4",
  permanent: "#ff6347",
};

export const NOTE_TYPE_DESC: Record<NoteType, string> = {
  fleeting: "48시간 안에 안 꺼내보면 버려지는 메모",
  literature: "밑줄 대신 내 말로 세 줄, 출처만 남긴다",
  permanent: "확장해서 쓰고, 예전 메모 하나와 연결한다",
};

export const NOTE_TYPE_PLACEHOLDER: Record<NoteType, string> = {
  fleeting: "지금 떠오른 걸 그대로, 맞춤법도 신경 쓰지 말고...",
  literature: "읽은 걸 내 말로 세 줄로...",
  permanent: "메모를 확장해서 하나의 글로...",
};
