import { useState } from 'react';
import {
  Container,
  CreateRoomButton,
  CreateRoomPlusIcon,
  CreateRoomSection,
  CreateRoomText,
  InvitationCodeForm,
  InvitationCodeFormInput,
  InvitationCodeFormInputWrapper,
  InvitationCodeFormTitle,
  InvitationCodeSection,
  InvitationCodeSubmitButton,
  RoomCardWrapper,
  RoomListSection,
  RoomListTitle,
} from './style';
import { Link } from 'react-router-dom';
import RoomCard from '../../components/RoomCard/RoomCard';

const Page = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <Container>
      <CreateRoomSection>
        <CreateRoomButton>
          <CreateRoomPlusIcon>
            <img src="/public/icons/icon-plus.svg" alt="plus-icon" />
          </CreateRoomPlusIcon>
          <Link to="/create">
            <CreateRoomText>방 만들기</CreateRoomText>
          </Link>
        </CreateRoomButton>
      </CreateRoomSection>

      <InvitationCodeSection>
        <InvitationCodeForm>
          <InvitationCodeFormInputWrapper>
            <InvitationCodeFormTitle>초대코드</InvitationCodeFormTitle>
            <InvitationCodeFormInput
              placeholder="초대코드를 입력해주세요."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </InvitationCodeFormInputWrapper>
          <InvitationCodeSubmitButton disabled={!inputValue.trim()}>
            입장하기
          </InvitationCodeSubmitButton>
        </InvitationCodeForm>
      </InvitationCodeSection>

      <RoomListSection>
        <RoomListTitle>방 리스트</RoomListTitle>
        <RoomCardWrapper>
          <RoomCard />
        </RoomCardWrapper>
      </RoomListSection>
    </Container>
  );
};

export default Page;
