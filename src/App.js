//theme
import { ThemeProvider } from "styled-components";
import { theme } from "./Components/assets/Theme/theme";

//Components
import Header from "./Components/Header";
import Card from "./Components/Card";
//Styles
import { Container } from "./Components/Styles/Container.styled";
import { GlobalStyle } from "./Components/assets/GlobalStyle/GlobalStyle";

//Text
import content from "./content";
import Footer from "./Components/Footer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Container>
        {content.map((element, index) => {
          return <Card item={element} key={index}></Card>;
        })}
      </Container>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
