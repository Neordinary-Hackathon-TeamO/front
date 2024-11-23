import styled from 'styled-components';

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 18px 20px;
  gap: 16px;
  align-items: center;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

export const StyledLabel = styled.label`
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
`;

export const StyledInput = styled.input`
  border-radius: 12px;
  border: 1px solid #70737c38;
  padding: 14px 16px;
  &::placeholder {
    color: #70737c38;
  }
`;

//TODO 에러 메시지 디자인 나오면 수정 필요
export const StyledErrorMessage = styled.p`
  font-size: 14px;
  line-height: 20px;
  color: red;
`;

export const StyledSubmitButton = styled.button`
  border-radius: 12px;
  background-color: #4e5968;
  padding: 12px 24px;
  color: #ffffff;
  text-align: center;
  width: 100%;
  margin-top: 16px;
`;

export const StyledImageContainer = styled.label`
  background-color: #f1f1f1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-radius: 16px;
  aspect-ratio: 1;
  color: #37383c9c;
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const EmptyImageContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

export const EmptyImageText = styled.p`
  font-weight: 500;
  line-height: 24px;
`;
