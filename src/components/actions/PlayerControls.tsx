/* eslint-disable @typescript-eslint/no-confusing-void-expression */
import React from "react";
import { Player } from "@/classes/Player";
import { Box, Button, Text } from "@chakra-ui/react";

const PlayerControls: React.FC = () => {
  // Initialize the player state object using the useState hook
  const [player, setPlayer] = React.useState(new Player("Player 1", 100, 50));
  // const player = new Player("Player 1", 100, 50);
  const [, setPlayerStat] = React.useState<string>(player.toString());

  // Manipulate the player's state by calling the methods of the Player class
  const movePlayer = (location: string) => {
    player.move(location);
    // setPlayer(player);
    setPlayerStat(player.toString());
  };

  const interactWithObject = (object: any) => {
    player.interact(object);
    // setPlayer(player);
    setPlayerStat(player.toString());
  };

  const useItem = (item: any) => {
    player.useItem(item);
    setPlayer(player);
    setPlayerStat(player.toString());
  };

  const useMagic = () => {
    player.useMagic();
    setPlayer(player);
    setPlayerStat(player.toString());
  };

  // Render the component using the player's state
  return (
    <Box p={"20px"} bgColor={"whitesmoke"}>
      <Text>Player: {player.getName()}</Text>
      <Text>Health: {player.getHealth()}</Text>
      <Text>Mana: {player.getMana()}</Text>
      <Button onClick={() => movePlayer("Room 1")}>Move to Room 1</Button>
      <Button onClick={() => interactWithObject("NPC 1")}>Interact with NPC 1</Button>
      <Button onClick={() => useItem("Health Potion")}>Use Health Potion</Button>
      <Button onClick={useMagic}>Use Magic</Button>
    </Box>
  );
};

export default PlayerControls;
