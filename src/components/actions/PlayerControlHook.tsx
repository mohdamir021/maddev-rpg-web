/* eslint-disable @typescript-eslint/no-confusing-void-expression */
import usePlayerState from "@/hooks/usePlayerState";
import { Box, Button, Stack, Text } from "@chakra-ui/react";
import React from "react";

export default function PlayerControlHook() {
  const {
    player: { health, mana },
    heal,
    attack,
    useMagic,
    usePotion,
  } = usePlayerState();

  return (
    <Box p={"30px"} bgColor={"lightcyan"} maxW={"300px"}>
      <Text>Player Control Effects</Text>
      <Box my={"3px"} p={"2px"} bgColor={"whitesmoke"}>
        <Text fontWeight={700}>Health : {health}</Text>
        <Text fontWeight={700}>Mana : {mana}</Text>
      </Box>
      <Stack spacing={"2px"} my={"3px"} p={"2px"}>
        <Button onClick={() => heal(20)}>Heal</Button>
        <Button onClick={() => attack(100)}>Attack</Button>
        <Button onClick={() => useMagic(10)}>Use Magic</Button>
        <Button onClick={() => usePotion(50)}>Use Potion</Button>
      </Stack>
    </Box>
  );
}
