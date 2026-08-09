export const NOTE_TYPES = ["fleeting", "literature", "permanent"] as const;
export type NoteType = (typeof NOTE_TYPES)[number];

export const NOTE_TYPE_LABEL: Record<NoteType, string> = {
  fleeting: "임시 노트",
  literature: "문헌 노트",
  permanent: "영구 노트",
};
