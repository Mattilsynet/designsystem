export interface UIError {
  fieldName: string;
  message: string;
}

export type Action<Node extends HTMLElement> = (
  node: Node,
  parameters: any
) => {
  update?: (parameters: any) => void;
  destroy?: () => void;
} | void;

export interface Chapter {
  heading: string;
  url: string;
  index: number;
}

export interface ChapterChangeDetails {
  index: number;
}
