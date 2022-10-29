import { GlobalStyle } from "../config/theme";
import { Wrapper } from "../helpers/wrapper";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";


export const HomeSnap = () => (
    <>
        <GlobalStyle />
        <Wrapper>
          <Header handleToggleClick={toggleTheme} />
          {children}
          <Footer />
        </Wrapper>
    </>
);