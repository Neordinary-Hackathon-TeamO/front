import * as S from './Layout.style';
import Header from '../Header/Header';

interface LayoutProps {
  children: React.ReactNode;
  headerTitle?: string;
  showBackButton?: boolean;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  headerTitle,
  showBackButton = false,
}) => {
  return (
    <S.Layout>
      <S.HeaderContainer>
        <Header title={headerTitle || ''} showBackButton={showBackButton} />
      </S.HeaderContainer>
      <S.ContentContainer>
        <S.Content>{children}</S.Content>
      </S.ContentContainer>
    </S.Layout>
  );
};

export default Layout;
