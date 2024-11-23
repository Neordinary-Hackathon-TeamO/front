import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  height: 100dvh;
`;

export const Thumbnail = styled.div`
  flex-grow: 1;
  height: 50%;
  background-color: #e3e3e3;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
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

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px 0;
  width: 100%;
`;

export const StyledSubmitButton = styled.button`
  border-radius: 12px;
  background-color: #4e5968;
  padding: 12px 24px;
  color: #ffffff;
  text-align: center;
  width: 100%;
  &:disabled {
    background-color: #70737c29;
    color: #37383c29;
  }
`;

export const Divider = styled.div`
  height: 1px;
  background-color: #70737c38;
`;

export const StyledSignUpButton = styled.button`
  border-radius: 12px;
  color: #4e5968;
  padding: 12px 24px;
  text-align: center;
  width: 100%;
`;
