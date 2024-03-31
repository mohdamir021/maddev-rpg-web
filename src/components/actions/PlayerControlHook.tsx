/* eslint-disable @typescript-eslint/no-confusing-void-expression */
import usePlayerState from "@/hooks/usePlayerState";
import { Box, Button, Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";

export default function PlayerControlHook() {
  const { health, mana, attack, useMagic } = usePlayerState();

  const heal = (value: number) => {
    health.set(health.get() + value);
  };
  const usePotion = (value: number) => {
    mana.set(mana.get() + value);
  };

  return (
    <Flex flexDir={"row"} gap={"12px"}>
      {/* <Box p={"30px"} bgColor={"lightcyan"} maxW={"300px"}>
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
      </Box> */}
      <Box p={"30px"} bgColor={"yellowgreen"} maxW={"300px"}>
        <Text>Player Control Effects V2</Text>
        <Box my={"3px"} p={"2px"} bgColor={"whitesmoke"}>
          <Text fontWeight={700}>Health : {health.get()}</Text>
          <Text fontWeight={700}>Mana : {mana.get()}</Text>
        </Box>
        <Stack spacing={"2px"} my={"3px"} p={"2px"}>
          <Button onClick={() => heal(20)}>Heal</Button>
          <Button onClick={() => attack(100)}>Attack</Button>
          <Button onClick={() => useMagic(10)}>Use Magic</Button>
          <Button onClick={() => usePotion(50)}>Use Potion</Button>
        </Stack>
      </Box>
    </Flex>
  );
}
