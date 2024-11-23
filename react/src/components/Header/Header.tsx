import { useNavigate } from 'react-router-dom';
import * as S from './Header.style';

interface HeaderProps {
  title: string;
  showBackButton?: boolean;
  color: string;
}

const Header: React.FC<HeaderProps> = ({
  title,
  showBackButton = false,
  color,
}) => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <S.Header>
      {showBackButton && (
        <S.GoToBackButton onClick={handleGoBack}>
          <img src="/public/icons/icon-arrow-left.svg" alt="뒤로가기" />
        </S.GoToBackButton>
      )}
      <S.PageTitle color={color}>{title}</S.PageTitle>
    </S.Header>
  );
};

export default Header;
