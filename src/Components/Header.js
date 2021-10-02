import { CustomHeader,Image } from "./Styles/Header.styled";
import { Container } from "./Styles/Container.styled";
import { CustomNav } from "./Styles/CustomNav.styled.js";
import { Logo } from "./Styles/Logo.styled.js";
import { CustomButton } from "./Styles/CustomButton.styled.js";
import { Flex } from "./Styles/Flex.styled";
export default function Header() {
  return (
    <CustomHeader>
      <Container>
        <CustomNav>
          <Logo src="./images/logo.svg" />
          <CustomButton>Teste Agora!</CustomButton>
        </CustomNav>
        <Flex>
          <div>
            <h1>
              Construa uma comunidade, Conheça pessoas novas e divirta-se!{" "}
            </h1>
            <p>
              Nós Repaginamos o jeito de construir uma comunidade. Você esta no
              Controle, mas sua audiência também!{" "}
            </p>
            <CustomButton bg='#ff0099' color='#fff'>
                Faça um teste, é gratuito!
            </CustomButton>
          </div>
          <Image src='./images/illustration-mockups.svg' alt='' />
        </Flex>
      </Container>
    </CustomHeader>
  );
}
