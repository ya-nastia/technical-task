import React, { useCallback, useEffect, useState } from 'react';
import { Likes } from '../Likes';
import { Comment } from '../Comment';
import getCommentsRequest from 'src/api/comments/getCommentsRequest';
import getAuthorsRequest from 'src/api/authors/getAuthorsRequest';
import { sortComments } from 'src/lib/sortComments';
import { notifyError } from 'src/lib/notify';
import { IAuthor, IComment } from 'src/types/common.types';
import { ReactComponent as Like } from '../../assets/icons/heart-not-filled-dark.svg';
import * as S from './Comments.styled';

const Comments: React.FC = () => {
  const [authors, setAuthors] = useState<IAuthor[]>([])
  const [comments, setComments] = useState<IComment[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPages, setMaxPages] = useState(1);
  const [totalLikes, setTotalLikes] = useState(0);

  useEffect(() => {
    (async () => {
      try {
        const commentsResponse = await getCommentsRequest(1);
        const authorsResponse = await getAuthorsRequest();
        const sortedComments = sortComments(commentsResponse.data);

        setTotalLikes(sortedComments.reduce((acc, currentValue) => acc + currentValue.likes, 0));
        setComments(sortedComments);
        setMaxPages(commentsResponse.pagination.total_pages);
        setAuthors(authorsResponse);
      } catch (e) {
        notifyError();
      }
    })();
  }, []);

  const loadMoreComments = async () => {
    try {
      if (currentPage < maxPages) {
        const nextPage = currentPage + 1;
        const response = await getCommentsRequest(nextPage);
        const sortedComments = sortComments(response.data);

        setComments((prevComments) => [...prevComments, ...sortedComments]);
        setCurrentPage(nextPage);
        setTotalLikes(current => current + sortedComments.reduce((acc, currentValue) => acc + currentValue.likes, 0));
      }
    } catch (e) {
      notifyError();
    }
  };

  const handleIncreaseTotalLikes = useCallback(() => {
    setTotalLikes(current => ++current);
  }, []);


  const handleDecreaseTotalLikes = useCallback(() => {
    setTotalLikes(current => --current);
  }, []);

  return (
    <S.Container>

      <S.Header>
        <S.CommentsAmount>{comments.length} comments</S.CommentsAmount>
        <Likes icon={<Like />} amount={totalLikes} />
      </S.Header>

      <S.Comments>
        {comments.map(({ 
          author,
          created,
          id,
          likes,
          parent,
          text,
        }) => {
          const authorInfo = authors.filter(item => item.id === author)[0];
          return (
            <Comment
              key={id}
              author={authorInfo}
              created={created}
              likes={likes}
              text={text}
              hasParent={!!parent}
              handleIncreaseTotalLikes={handleIncreaseTotalLikes}
              handleDecreaseTotalLikes={handleDecreaseTotalLikes}
            />
          )
        })}
      </S.Comments>
      {currentPage < maxPages && (
        <S.LoadMoreBtn onClick={loadMoreComments}>Загрузить еще</S.LoadMoreBtn>
      )}
    </S.Container>
  )
}

export default Comments;