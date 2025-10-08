import type { Color } from "../types";

export type History = {
  id: string;
  title: string;
  content: string;
  schools: School[];
  headerBackgroundColor: Color;
  headerTextColor: Color;
};

type School = {
  title: string;
  content: string;
};
