export const IDEA_CATEGORIES = ["아이디어", "할일"] as const;
export type IdeaCategory = (typeof IDEA_CATEGORIES)[number];
