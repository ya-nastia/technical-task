import styled from "styled-components";

export const Comment = styled.div<{ hasParent: boolean }>`
  display: flex;
  gap: 20px;
  width: ${({hasParent}) => hasParent ? 'calc(100% - 34px)' : '100%'};
  margin-left: ${({hasParent}) => hasParent ? 'auto' : '0'};

  @media (max-width: 768px) {
    width: ${({hasParent}) => hasParent ? 'calc(100% - 20px)' : '100%'};
  }
`;

export const Avatar = styled.div`
  & img {
    width: 68px;
    height: 68px;

    border-radius: 50%;

    @media (max-width: 768px) {
      width: 40px;
      height: 40px;
    }
  }
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;

  @media (max-width: 768px) {
    gap: 9px;
  }
`;

export const CommentInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 12px;

  @media (max-width: 768px) {
    margin-top: 0;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  @media (max-width: 768px) {
    gap: 0;
  }
`;

export const UserName = styled.span`
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

export const LastSeen = styled.div`
  color: #8297AB;
  font-family: Lato;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const CommentText = styled.p`
  margin: 0;

  color: #FFF;
  font-family: Lato;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media (max-width: 768px) {
    font-size: 14px;
    word-break: break-word;
  }
`;