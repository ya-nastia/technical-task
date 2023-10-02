import styled from 'styled-components';

export const Container = styled.div`
  max-width: 562px;
  margin: 52px auto;

  @media (max-width: 768px) {
    max-width: 272px;
    margin: 52px auto;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;

  width: 100%;
  padding-bottom: 10px;

  border-bottom: 1px solid #767676;

  @media (max-width: 768px) {
    margin-bottom: 24px;
  }
`;

export const CommentsAmount = styled.span`
  color: #FFF;
  font-family: Lato;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const Comments = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;

  @media (max-width: 768px) {
    gap: 24px;
  }
`;

export const LoadMoreBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 60px auto 64px;
  width: 234px;
  height: 36px;

  color: #FFF;
  text-align: center;
  font-family: Lato;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;

  border: none;
  border-radius: 4px;
  background: #313439;
  backdrop-filter: blur(13.5px);
  cursor: pointer;

  @media (max-width: 768px) {
    margin: 40px auto 76px;
  }
`;