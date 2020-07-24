import React from "react";
import styled from "styled-components";

const Item = ({ item, numOwned, handleClick }) => {
  return (
    <ItemDetails onClick={() => handleClick()}>
      <Name>{item.name}</Name>
      <Details>
        <ItemRules>
          <Cost>Cost: {item.cost} Cookie(s). </Cost>
          <Value>Produces {item.value} cookies/second</Value>
        </ItemRules>
        <Owned>{numOwned}</Owned>
      </Details>
    </ItemDetails>
  );
};

const ItemDetails = styled.div``;
const Name = styled.h2``;
const ItemRules = styled.div``;
const Details = styled.div``;
const Cost = styled.span``;
const Value = styled.span``;
const Owned = styled.span`
  text-align: right;
  margin: 20px;
  font-size: 40px;
`;

export default Item;
