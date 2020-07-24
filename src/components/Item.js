import React from "react";
import styled from "styled-components";

const Item = ({ item, numOwned, handleClick }) => {
  return (
    <ItemDetails onClick={() => handleClick()}>
      <Name>{item.name}</Name>
      <Details>
        <Cost>Cost: {item.cost} Cookie(s). </Cost>
        <Value>Produces {item.value} cookies/second</Value>
        <Owned>{numOwned}</Owned>
      </Details>
    </ItemDetails>
  );
};

const ItemDetails = styled.div``;
const Name = styled.h2``;
const Details = styled.p``;
const Cost = styled.span``;
const Value = styled.span``;
const Owned = styled.span``;

export default Item;
