import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const Item = ({ item, numOwned, handleClick, trackOrder }) => {
  const firstItem = useRef(null);

  useEffect(() => {
    if (trackOrder === 0) {
      firstItem.current.focus();
    }
  }, [trackOrder]);

  return (
    <ItemDetails ref={firstItem} onClick={() => handleClick()}>
      <Details>
        <ItemRules>
          <Name>{item.name}</Name>
          <Cost>Cost: {item.cost} Cookie(s). </Cost>
          <Value>Produces {item.value} cookies/second</Value>
        </ItemRules>
        <Owned>{numOwned}</Owned>
      </Details>
    </ItemDetails>
  );
};

const ItemDetails = styled.button`
  background: transparent;
  color: white;
  border: none;
  text-align: left;
`;
const Name = styled.h2`
  /* text-align: left; */
`;
const Details = styled.div`
  margin: 20px;
  display: grid;
  grid-template-columns: 90% 10%;
`;
const ItemRules = styled.div``;
const Cost = styled.span``;
const Value = styled.span``;
const Owned = styled.span`
  margin: 0px 20px;
  text-align: center;
  font-size: 40px;
`;

export default Item;
