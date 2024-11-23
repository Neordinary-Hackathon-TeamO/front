import styled from 'styled-components';

export const Container = styled.div`
  padding: 32px 20px;
`;

export const GuideBox = styled.div`
  background-color: #f7f7f8;
  padding: 16px 20px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  border-radius: 16px;
`;

export const GuideTitle = styled.p`
  display: flex;
  gap: 8px;
  align-items: center;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
`;

export const GuideText = styled.p`
  color: #171719;
  line-height: 26px;
`;

export const FormContainer = styled.div`
  padding: 0 20px 32px 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const StyledLabel = styled.label`
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
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

export const StyledSubmitButton = styled.button`
  border-radius: 12px;
  background-color: #4e5968;
  padding: 12px 24px;
  color: #ffffff;
  text-align: center;
  width: 100%;
  margin-top: 20px;
  &:disabled {
    background-color: #70737c29;
    color: #37383c29;
  }
`;

export const StyledTextArea = styled.textarea`
  height: 240px;
  border-radius: 12px;
  border: 1px solid #70737c38;
  padding: 14px 16px;
  &::placeholder {
    color: #70737c38;
  }
  resize: none;
`;
