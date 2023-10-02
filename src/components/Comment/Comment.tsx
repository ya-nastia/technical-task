import React, { useCallback, useState } from 'react';
import { ReactComponent as LikeFilled } from '../../assets/icons/filled-heart.svg';
import { ReactComponent as LikeOutlined } from '../../assets/icons/heart-not-filled.svg';
import { Likes } from '../Likes';
import { IAuthor } from 'src/types/common.types';
import { formatRelativeDate } from 'src/lib/date';
import * as S from './Comment.styled';

interface ICommentProps {
  author: IAuthor;
  created: string;
  likes: number;
  hasParent: boolean;
  text: string;
  handleIncreaseTotalLikes: () => void;
  handleDecreaseTotalLikes: () => void;
}

const Comment: React.FC<ICommentProps> = ({ 
  author,
  created,
  likes,
  hasParent,
  text,
  handleIncreaseTotalLikes,
  handleDecreaseTotalLikes,
}) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = useCallback(() => {
    if (isLiked) {
      handleDecreaseTotalLikes();
    } else {
      handleIncreaseTotalLikes();
    }
    setIsLiked(current => !current);
  }, [isLiked, handleDecreaseTotalLikes, handleIncreaseTotalLikes]);

  return (
    <S.Comment hasParent={hasParent}>

      <S.Avatar>
        <img src={author.avatar} alt="avatar" />
      </S.Avatar>

      <S.TextContent>

        <S.CommentInfo>

          <S.UserInfo>
            <S.UserName>{author.name}</S.UserName>
            <S.LastSeen>{formatRelativeDate(new Date(created))}</S.LastSeen>
          </S.UserInfo>

          <Likes
            icon={isLiked ? <LikeFilled /> : <LikeOutlined />} 
            amount={isLiked ? likes + 1 : likes} 
            onClick={handleLike} 
          />

        </S.CommentInfo>

        <S.CommentText>{text}</S.CommentText>

      </S.TextContent>

    </S.Comment>
  )
}

export default Comment;