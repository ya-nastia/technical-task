import React, { ReactNode } from 'react';
import * as S from './Likes.styled';

interface ILIkesProps {
  icon: ReactNode;
  amount: number;
  onClick?: () => void;
}

const Likes: React.FC<ILIkesProps> = ({ icon, amount, onClick }) => {
  return (
    <S.Likes onClick={onClick} isButton={!!onClick}>
      {icon}
      <span>{amount}</span>
    </S.Likes>
  )
}

export default Likes;