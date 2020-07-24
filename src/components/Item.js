import React from "react";
import styled from "styled-components";

const Item = ({ item, numOwned, handleClick }) => {
  return (
    <>
      <Name>{item.name}</Name>
      <Details>
        <Cost>Cost: {item.cost} Cookie(s). </Cost>
        <Value>Produces {item.value} cookies/second</Value>
        <Owned>{numOwned.cursor}</Owned>
      </Details>
    </>
  );
};

const Name = styled.h2``;
const Details = styled.p``;
const Cost = styled.span``;
const Value = styled.span``;
const Owned = styled.span``;

export default Item;
