import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import cookieSrc from "../cookie.svg";
import Item from "./Item";

//hooks
import useInterval from "../hooks/use-interval.hook";
import useDocumentTitle from "../hooks/useDocumentTitle";
import useKeydown from "../hooks/useKeydown";

const items = [
  { id: "cursor", name: "Cursor", cost: 10, value: 1 },
  { id: "grandma", name: "Grandma", cost: 100, value: 10 },
  { id: "farm", name: "Farm", cost: 1000, value: 80 },
];

const Game = () => {
  const [numCookies, setnumCookies] = useState(100);
  const [purchasedItems, setPurchasedItems] = useState({
    cursor: 0,
    grandma: 0,
    farm: 0,
  });

  useDocumentTitle(numCookies);
  useKeydown("Space", () => setnumCookies(numCookies + 1));

  const calculateCookiesPerTick = (items) => {
    const tick = items.cursor * 1 + items.grandma * 10 + items.farm * 80;
    return tick;
  };
  useInterval(() => {
    const numOfGeneratedCookies = calculateCookiesPerTick(purchasedItems);
    setnumCookies(numCookies + numOfGeneratedCookies);
  }, 1000);

  const itemList = items.map((item, index) => {
    return (
      <Item
        key={item.id}
        item={item}
        trackOrder={index}
        numOwned={purchasedItems[item.id]}
        handleClick={() => {
          if (numCookies < item.cost) {
            window.alert("Not Enough cookies");
          } else {
            setnumCookies(numCookies - item.cost);
            switch (item.id) {
              default:
              case "cursor":
                setPurchasedItems({
                  ...purchasedItems,
                  cursor: purchasedItems.cursor + 1,
                });
                break;
              case "grandma":
                setPurchasedItems({
                  ...purchasedItems,
                  grandma: purchasedItems.grandma + 1,
                });
                break;
              case "farm":
                setPurchasedItems({
                  ...purchasedItems,
                  farm: purchasedItems.farm + 1,
                });
                break;
            }
          }
        }}
      />
    );
  });

  return (
    <Wrapper>
      <GameArea>
        <Indicator>
          <Total>{numCookies} cookies</Total>
          <strong>{calculateCookiesPerTick(purchasedItems)}</strong> cookies per
          second
        </Indicator>
        <Button onClick={() => setnumCookies(numCookies + 1)}>
          <Cookie src={cookieSrc} />
        </Button>
      </GameArea>

      <ItemArea>
        <SectionTitle>Items:</SectionTitle>
        {itemList}
      </ItemArea>
      <HomeLink to="/">Return home</HomeLink>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
`;
const GameArea = styled.div`
  flex: 1;
  display: grid;
  place-items: center;
`;
const Button = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
`;

const Cookie = styled.img`
  width: 200px;
`;

const ItemArea = styled.div`
  height: 100%;
  padding-right: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SectionTitle = styled.h3`
  text-align: center;
  font-size: 32px;
  color: yellow;
`;

const Indicator = styled.div`
  position: absolute;
  width: 250px;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
  text-align: center;
`;

const Total = styled.h3`
  font-size: 28px;
  color: lime;
`;

const HomeLink = styled(Link)`
  position: absolute;
  top: 15px;
  left: 15px;
  color: #666;
`;

export default Game;
