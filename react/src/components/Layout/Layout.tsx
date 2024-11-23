import * as S from './Layout.style';
import Header from '../Header/Header';

interface LayoutProps {
  children: React.ReactNode;
  headerTitle?: string;
  showBackButton?: boolean;
  backgroundImageURL?: string;
  titleColor?: string;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  headerTitle,
  showBackButton = false,
  backgroundImageURL,
  titleColor = '#171719',
}) => {
  return (
    <S.Layout backgroundImageURL={backgroundImageURL}>
      <S.HeaderContainer>
        <Header
          title={headerTitle || ''}
          showBackButton={showBackButton}
          color={titleColor}
        />
      </S.HeaderContainer>
      <S.ContentContainer>
        <S.Content>{children}</S.Content>
      </S.ContentContainer>
    </S.Layout>
  );
};

export default Layout;
