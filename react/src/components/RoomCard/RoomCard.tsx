import * as S from './RoomCard.style.tsx';

const RoomCard: React.FC = () => {
  return (
    <>
      <S.RoomCard>
        <S.GiftBoxImage>
          <img src="/public/images/image-gift-box.png" alt="gift-box" />
        </S.GiftBoxImage>
        <S.RoomInformation>
          <S.RoomTitle>방이름</S.RoomTitle>
          <S.RoomDuration>yyyy.MM.dd - yyyy.MM.dd</S.RoomDuration>
        </S.RoomInformation>
      </S.RoomCard>
    </>
  );
};

export default RoomCard;
