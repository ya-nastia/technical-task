export interface IComment {
  author: number;
  created: string;
  id: number;
  likes: number;
  parent: number | null;
  text: string;
}

export interface IAuthor {
  avatar: string;
  id: number;
  name: string;
}