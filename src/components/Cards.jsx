import { Box } from "@chakra-ui/react";
import MyCard from "./MyCard";
import { cards } from "../data/cards";

export default function Cards() {
  return (
    <Box
      display="flex"
      justifyContent="space-evenly"
      bg="#2B3B4E"
      py="2rem"
      flexWrap="wrap"
      gap="1rem"
    >
      {cards.map((card) => (
        <MyCard key={card.id} title={card.title} description={card.description}>
          {card.img}
        </MyCard>
      ))}
    </Box>
  );
}
