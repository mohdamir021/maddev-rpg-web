/* eslint-disable @typescript-eslint/no-confusing-void-expression */
import { Box, Button, Stack, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";

export default function PlayerControlEffects() {
  const [health, sethealth] = React.useState(1000);
  const [mana, setmana] = React.useState(600);
  const [status, setstatus] = React.useState("No status yet");

  const heal = () => sethealth(health + 15);
  const attack = () => sethealth(health - 5);
  const cast = () => setmana(mana - 5);

  useEffect(() => {
    console.log("Ongoing game ... ");
  });
  useEffect(() => {
    setstatus("Start game ...");
    console.log("Start game ...");
  }, []);
  useEffect(() => {
    console.log("Player Status's affected");
  }, [health, mana]);
  useEffect(() => {
    console.log("Player health's affected");
  }, [health]);
  useEffect(() => {
    console.log("Player mana's affected");
  }, [mana]);

  return (
    <Box p={"30px"} bgColor={"lightcyan"} maxW={"300px"}>
      <Text>Player Control Effects</Text>
      <Box my={"3px"} p={"2px"} bgColor={"whitesmoke"}>
        <Text>Health : {health}</Text>
        <Text>Mana : {mana}</Text>
        <Text>Status : {status}</Text>
      </Box>
      <Stack spacing={"2px"} my={"3px"} p={"2px"}>
        <Button onClick={heal}>Heal</Button>
        <Button onClick={attack}>Attack</Button>
        <Button onClick={cast}>Use Magic</Button>
      </Stack>
    </Box>
  );
}
