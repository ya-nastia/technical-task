import { IComment } from "src/types/common.types";

export const sortComments = (comments: IComment[]): IComment[] => {
  const commentsMap = new Map<number | null, IComment[]>();

  comments.forEach(comment => {
    const parentId = comment.parent;
    if (!commentsMap.has(parentId)) {
      commentsMap.set(parentId, []);
    }
    commentsMap.get(parentId)!.push(comment);
  });

  const sortedParentComments: IComment[] = [];

  const addComments = (parentId: number | null): void => {
    const childComments = commentsMap.get(parentId);
    if (!childComments) return;

    childComments.sort((a, b) => new Date(b.created).getTime() - new Date(a.created).getTime());

    childComments.forEach(childComment => {
      sortedParentComments.push(childComment);
      addComments(childComment.id);
    });
  }

  addComments(null);

  return sortedParentComments;
}