import styled from 'styled-components';

export const Likes = styled.div<{ isButton: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;

  color: #FFFFFF;
  font-variant-numeric: lining-nums tabular-nums;
  font-feature-settings: 'cv04' on, 'cv03' on;
  font-family: Lato;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;

  cursor: ${({isButton}) => isButton ? 'pointer': 'default'};

  & svg {
    width: 22px;
    height: 22px;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    
    & svg {
      width: 20px;
      height: 20px;
    }
  }
`;