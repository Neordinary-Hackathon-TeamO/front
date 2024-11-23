import RoomCard from '../../components/RoomCard/RoomCard';
import * as S from './MainPage.style';

const MainPage: React.FC = () => {
  return (
    <>
      <S.MainPage>
        <S.CreateRoomSection>
          <S.CreateRoomButton>
            <S.CreateRoomPlusIcon>
              <img src="/public/icons/icon-plus.svg" alt="plus-icon" />
            </S.CreateRoomPlusIcon>
            <S.CreateRoomText>방 만들기</S.CreateRoomText>
          </S.CreateRoomButton>
        </S.CreateRoomSection>

        <S.InvitationCodeSection>
          <S.InvitationCodeForm>
            <S.InvitationCodeFormInputWrapper>
              <S.InvitationCodeFormTitle>초대코드</S.InvitationCodeFormTitle>
              <S.InvitationCodeFormInput placeholder="초대코드를 입력해주세요." />
            </S.InvitationCodeFormInputWrapper>
            <S.InvitationCodeSubmitButton>
              입장하기
            </S.InvitationCodeSubmitButton>
          </S.InvitationCodeForm>
        </S.InvitationCodeSection>

        <S.RoomListSection>
          <S.RoomListTitle>방 리스트</S.RoomListTitle>
          <S.RoomCardWrapper>
            <RoomCard />
          </S.RoomCardWrapper>
        </S.RoomListSection>
      </S.MainPage>
    </>
  );
};

export default MainPage;
