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

        <S.InvitationCodeSection></S.InvitationCodeSection>
      </S.MainPage>
    </>
  );
};

export default MainPage;
