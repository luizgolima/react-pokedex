import {useNavigate} from "react-router-dom";

// icons
import {BsGithub, BsLinkedin} from "react-icons/bs";
import {MdOutlineFavorite} from "react-icons/md";

// components
import * as Atom from "./atoms";
import {Container} from "../Container";
import {FlexBox} from "../Flexbox";

// ::
const Header = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Atom.HeaderContainer
        onClick={() => navigate("/")}
        align="center"
        justify="space-between"
        direction="row"
        wrap="wrap"
      >
        <Atom.HeaderItem>
          <MdOutlineFavorite size="20" />
        </Atom.HeaderItem>
        <div>
          <FlexBox align="center" justify="flex-end" direction="row" gap="xxxs">
            <a
              target="_blank"
              href="https://github.com/luizgolima"
              rel="noreferrer"
            >
              <Atom.HeaderItem>
                <BsGithub size="20" />
              </Atom.HeaderItem>
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/luizgolima/"
              rel="noreferrer"
            >
              <Atom.HeaderItem>
                <BsLinkedin size="20" />
              </Atom.HeaderItem>
            </a>
          </FlexBox>
        </div>
      </Atom.HeaderContainer>
    </Container>
  );
};

export default Header;
