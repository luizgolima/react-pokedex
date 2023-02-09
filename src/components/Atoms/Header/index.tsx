import {Link, useNavigate} from "react-router-dom";
import pokemonLogo from "../../../assets/pokemon-logo.png";

// icons
import {BsGithub, BsLinkedin} from "react-icons/bs";
import {MdOutlineFavorite, MdOutlineHome} from "react-icons/md";

// components
import * as Atom from "./atoms";
import {Container} from "../Container";
import {FlexBox} from "../Flexbox";
import React from "react";

// ::
const Header = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Atom.HeaderContainer
        align="center"
        justify="space-between"
        direction="row"
        wrap="wrap"
      >
        <FlexBox align="center" justify="space-between" direction="row">
          <Link to={window.location.pathname === "/" ? "/favorites" : "/"}>
            <Atom.HeaderItem>
              {window.location.pathname === "/" ? (
                <MdOutlineFavorite size="20" />
              ) : (
                <MdOutlineHome size="20" />
              )}
            </Atom.HeaderItem>
          </Link>

          <div className="pokemon-logo" onClick={() => navigate("/")}>
            <img src={pokemonLogo} alt="Pokemon logo" />
          </div>
          <div>
            <FlexBox
              align="center"
              justify="flex-start"
              direction="row"
              gap="xxxs"
            >
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
        </FlexBox>
      </Atom.HeaderContainer>
    </Container>
  );
};

export default Header;
