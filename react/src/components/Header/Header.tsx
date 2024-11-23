import { useNavigate } from 'react-router-dom';
import * as S from './Header.style.tsx';

const Header: React.FC = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <S.Header>
      <S.GoToBackButton onClick={handleGoBack}>
        <img src="/public/icons/icon-arrow-left.svg" alt="뒤로가기" />
      </S.GoToBackButton>
      <S.PageTitle>페이지 이름</S.PageTitle>
    </S.Header>
  );
};

export default Header;
