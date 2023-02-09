import {FC, useEffect, useState} from "react"; // components
import {FlexBox} from "../Flexbox";
import * as Atom from "./atoms"; // types
import type {ICardProps} from "./types"; // ::
// ::

const Card: FC<ICardProps> = ({ id, image, name, preview, type }) => {
  const [cardData, setCardData] = useState<ICardProps[]>([]);
  const [storeFavorite, setStoreFavorite] = useState<ICardProps[]>([]);

  // I want to save an array of objects to localStorage
  useEffect(() => {
    if (localStorage.getItem("favorites")) {
      setStoreFavorite(JSON.parse(localStorage.getItem("favorites") || "[]"));
    } else {
      setStoreFavorite([]);
    }
    setCardData([...storeFavorite, { id, image, name, preview, type }]);
  }, [id, image, name, preview, type, storeFavorite]);

  return (
    <Atom.Container
      gap="xs"
      align="center"
      justify="space-between"
      direction="column"
      onClick={() => {
        localStorage.setItem("favorites", JSON.stringify(cardData));
        setStoreFavorite(JSON.parse(localStorage.getItem("favorites") || "[]"));
      }}
    >
      <FlexBox align="center" justify="flex-end" direction="row">
        <Atom.PokemonText type={type}>#{id}</Atom.PokemonText>
      </FlexBox>
      <Atom.PokemonSpot
        type={type}
        align="center"
        justify="center"
        direction="column"
      >
        <Atom.PokemonSprite src={image} alt="" />
      </Atom.PokemonSpot>
      <Atom.PokemonPreviewSection
        align="center"
        justify="space-between"
        direction="row"
      >
        <Atom.PokemonText type={type}>{name}</Atom.PokemonText>
        {preview && <img src={preview} alt={`Preview of ${name}`} />}
      </Atom.PokemonPreviewSection>
    </Atom.Container>
  );
};

export default Card;
