import SocialIcons from './SocialIcons'
import { Container } from './styles/Container.styled'
import { StyledFooter } from './styles/Footer.styled'
import { Flex } from './styles/Flex.styled'

export default function Footer() {
    return (
      <StyledFooter>
        <Container>
          <img src="./images/logo_white.svg" alt="" />

          <Flex>
            <ul>
              <li>lorem ipsum sit amet, consectetur adipiscing elit, sed do</li>
              <li>example@huddle.com</li>
            </ul>

            <ul>
              <li>About Us</li>
              <li>What We Do</li>
              <li>FAQ</li>
            </ul>

            <ul>
              <li>Careers</li>
              <li>Blog</li>
              <li>Contact Us</li>
            </ul>

            <SocialIcons />
          </Flex>

          <p>&copy; 2022 Huddle. All rights reserved.</p>
        </Container>
      </StyledFooter>
    );
}