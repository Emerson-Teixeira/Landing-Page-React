import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";
import { StyledSocialIcons } from "./Styles/SocialIcons.styled.js";
export default function SocialIcons() {
  return (
    <div>
      <StyledSocialIcons>
        <li>
          <a href="https://twitter.com" rel="noreferrer" target="_blank">
            <FaTwitter />
          </a>
        </li>
        <li>
          <a href="https://facebook.com" rel="noreferrer" target="_blank">
            <FaFacebook />
          </a>
        </li>
        <li>
          <a href="https://linkedin.com" rel="noreferrer" target="_blank">
            <FaLinkedin />
          </a>
        </li>
      </StyledSocialIcons>
    </div>
  );
}
