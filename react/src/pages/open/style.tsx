import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
`;

export const Container = styled.div`
  overflow: scroll;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  width: 100%;
`;

export const Title = styled.h2`
  font-size: 16px;
  font-weight: 600;
  line-height: 1.358;
  color: #fff;
`;

export const Santa = styled.img`
  width: 141px;
  max-width: none;
  height: 141px;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -81%) rotate(5.17deg);
  transform-origin: left;
  aspect-ratio: 1/1;
`;

export const ResultContainer = styled.div`
  position: relative;
  margin-top: 130px;
  background-color: #fff;
  border-radius: 16px;
  padding: 32px 16px;
  width: 100%;
`;

export const ResultTextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ResultNumberContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 16px 0 32px;
`;

export const ResultTitle = styled.span`
  font-size: 14px;
  font-weight: 600;
  line-height: 1.334;
  color: #2e2f33;
`;

export const ResultText = styled.span`
  font-size: 14px;
  font-weight: 400;
  color: #2e2f33;
  line-height: 1.571;
`;

export const Result = styled.span`
  color: #497c6b;
  font-weight: 600;
  font-size: 17px;
  line-height: 1.358;
`;

export const ResultListContainer = styled.div`
  margin-top: 20px;
  background-color: #fff;
  border-radius: 16px;
  padding: 20px 16px;
  width: 100%;
`;

export const ResultList = styled.div`
  display: flex;
  align-items: center;
  margin: 2px 0;
  height: 40px;
`;

export const ResultName = styled.p`
  font-size: 15px;
  font-weight: 500;
  color: #333d48;
  min-width: 50px;
`;

export const Arrow = styled.img`
  width: 24px;
  height: 24px;
  margin-left: auto;
  margin-right: 8px;
`;
