import styled from "styled-components";
import down from '../../assets/CaretDown.svg';

export const Container = styled.div`
  padding: 20px;
  max-width: 400px;
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: 20px;
  font-weight: 600;
  line-height: 1.4;
  color: #171719;
`;

export const Warning = styled.h2`
  font-size: 20px;
  font-weight: 600;
  line-height: 1.4;
  color: #ff9200;
`;

export const FormContainer = styled.form`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20.8px;
`;

export const FormItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5.75px;
  width: 100%;
  padding: 0 4px;
`;

export const FormItemTitle = styled.label`
  font-size: 14px;
  font-weight: 600;
`;

export const FormItemInput = styled.input`
  width: 100%;
  border: solid 1px rgba(112, 115, 124, 0.22);
  border-radius: 12px;
  padding: 14px 16px;

  &::placeholder {
    color: rgba(55, 56, 60, 0.28);
    font-size: 15px;
    font-weight: 400;
  }
`;

export const FormSelect = styled.button`
  width: 100%;
  border: solid 1px rgba(112, 115, 124, 0.22);
  border-radius: 12px;
  padding: 14px 16px;
  color: #171719;
  font-size: 15px;
  font-weight: 400;
  background-image: url(${down});
  background-repeat: no-repeat;
  background-position: calc(100% - 17px) center;
`;

export const Clock = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 8px;
`;

export const FormItemDate = styled.div`
  width: 100%;
  margin: 20px 4px 18px;
  font-size: 15px;
  font-weight: 600;
  color: #0066ff;
  display: flex;
  align-items: center;
`;

export const FormSubmitButtonNot = styled.button`
  width: 100%;
  background-color: rgba(112, 115, 124, 0.16);
  border-radius: 12px;
  text-align: center;
  padding: 12px 10px;
  margin-top: 30px;
  color: #4E5968;
  line-height: 1.334;
`;

export const FormSubmitButton = styled.button`
  width: 100%;
  background-color: #4e5968;
  border-radius: 12px;
  text-align: center;
  padding: 12px 10px;
  margin-top: 30px;
  color: #fff;
  line-height: 1.334;
`;

export const Concept = styled.div`
  border-radius: 12px;
  border: 1px solid rgba(112, 115, 124, 0.22);
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.08);
  width: 100%;
  padding: 4px;
`;

export const ConCeptList = styled.p`
  padding: 10px 12px;
  font-size: 15px;
  font-weight: 400;
`;
