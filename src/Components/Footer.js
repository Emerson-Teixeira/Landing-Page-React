import { Container } from "./Styles/Container.styled";
import { CustomFooter } from "./Styles/CustomFooter.styled.js";
import { Flex } from "./Styles/Flex.styled";
import SocialIcons from "./SocialIcons";
export default function Footer() {
  return (
    <CustomFooter>
      <Container>
        <img src="./images/logo_white.svg" alt="" />
        <Flex>
          <ul>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </li>
            <li>+1-543-123-4567</li>
            <li>example@huddle.com</li>
          </ul>
          <ul>
            <li>Sobre</li>
            <li>O que fazemos?</li>
            <li>FAQ</li>
          </ul>

          <ul>
            <li>Carreira</li>
            <li>Blog</li>
            <li>Contato</li>
          </ul>
          <SocialIcons />
        </Flex>
        <p>&copy; 2021 Huddle. Todos os direitos reservados</p>
      </Container>
    </CustomFooter>
  );
}
