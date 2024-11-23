import styled from "styled-components";

export const Container = styled.div`
  padding: 0 20px;
  height: 100vh;
  padding-top: 30px;
  position: relative;
`;

export const Title = styled.h2`
  font-size: 20px;
  font-weight: 600;
  line-height: 1.358;
  color: #171719;
`;

export const SantaList = styled.main`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  margin-top: 20px;
  padding-bottom: 100px;
`;

export const SantaContainer = styled.button<{ isChecked: boolean }>`
  padding: 16px;
  display: flex;
  align-items: center;
  gap: 16px;
  border: 1px solid
    ${({ isChecked }) => (isChecked ? "#37383C" : "rgba(112, 115, 124, 0.16)")};
  border-radius: 8px;
`;

export const SantaImage = styled.img`
  width: 40px;
  height: 40px;
`;

export const SantaNickname = styled.p<{ isChecked: boolean }>`
  font-size: 17px;
  font-weight: 600;
  line-height: 1.334;
  color: ${({ isChecked }) => (isChecked ? "#37383C" : "#70737C")};
`;

export const SantaChecked = styled.img`
  width: 32px;
  height: 32px;
  margin-left: auto;
`;

export const ButtonContainer = styled.div`
  padding: 20px 16px 32px;
  position: fixed;
  bottom: 0;
  width: 100%;
  margin: 0 -20px;
  background-color: #fff;
`;

export const ResultButton = styled.button<{ isChecked: boolean }>`
  width: 100%;
  text-align: center;
  background-color: ${({ isChecked }) =>
    isChecked ? "#4E5968" : "rgba(112, 115, 124, 0.16)"};
  color: ${({ isChecked }) => (isChecked ? "#FFF" : "rgba(55, 56, 60, 0.16)")};
  padding: 12px 0;
  border-radius: 12px;
`;
