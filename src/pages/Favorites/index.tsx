import { Card, Container, FlexBox } from "../../components";
import React from "react";
import { ICardProps } from "../../components/Atoms/Card/types";

const FavoritesPage = () => {
  const getFavorites = () => {
    if (localStorage.getItem("favorites")) {
      return JSON.parse(localStorage.getItem("favorites") || "[]");
    } else {
      return [];
    }
  };

  return (
    <Container>
      <FlexBox
        align="flex-start"
        justify="flex-start"
        direction="column"
        gap="xxxs"
      ></FlexBox>
      {getFavorites()?.map((pokemon: ICardProps) => (
        <Card
          key={pokemon.id}
          id={pokemon.id}
          image={pokemon.image}
          name={pokemon.name}
          preview={pokemon.preview}
          type={pokemon.type}
        />
      ))}
    </Container>
  );
};

export default FavoritesPage;
