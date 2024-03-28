import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import { CodeBlock } from "react-code-blocks";

export default function PlayerCodeBlocks() {
  return (
    <SimpleGrid spacing={"5px"} columns={{ base: 1, md: 2 }}>
      <Box>
        <Text fontSize={"20px"} fontWeight={800}>
          Hook
        </Text>
        <Box my={2}>
          <CodeBlock
            language="typescript"
            text={`// src:/hooks/usePlayerState.tsx
/* eslint-disable @typescript-eslint/no-confusing-void-expression */
import { useState, useEffect } from "react";

interface PlayerStateValues {
  health: number;
  mana: number;
}
interface PlayerHookReturn {
  player: PlayerStateValues;
  heal: (value: number) => void;
  attack: (damage: number) => void;
  useMagic: (cost: number) => void;
  usePotion: (value: number) => void;
}

const initialPlayerState = (): PlayerStateValues => ({ health: 1000, mana: 100 });

export default function usePlayerState(values?: PlayerStateValues): PlayerHookReturn {
  // Initialize state
  const [player, setPlayer] = useState(values ?? initialPlayerState());

  // Effects
  // runs on state updates
  useEffect(() => {
    console.log("Player stats updated!");
  });

  // runs once
  useEffect(() => {
    console.log("Player initialized ...");
  }, []);

  // runs on specified dependencies changing
  useEffect(() => {
    \tconsole.log("Player's mana updated!");
  }, [player.mana]);

  // Return Value
  return {
    // state
    player,
    // methods
    heal: (value: number) => {
      setPlayer({ ...player, health: player.health + value });
    },
    attack: (damage: number) => {
      setPlayer({ ...player, health: player.health - 5 });
      console.log(\`Player deals \${damage} damage\`);
    },
    useMagic: (cost: number) => {
      if (player.mana >= cost) {
        setPlayer({ ...player, mana: player.mana - cost });
      }
    },
    usePotion: (values: number) => {
      setPlayer({ ...player, mana: player.mana + values });
    },
  };
}`}
          />
        </Box>
      </Box>
      <Box>
        <Text fontSize={"20px"} fontWeight={800}>
          Component
        </Text>
        <Box my={2}>
          <CodeBlock
            language="typescript"
            text={`// src:/components/PlayerControlBoard.tsx
/* eslint-disable @typescript-eslint/no-confusing-void-expression */
import usePlayerState from "@/hooks/usePlayerState";
import { Box, Button, Stack, Text } from "@chakra-ui/react";
import React from "react";

export default function PlayerControlBoard() {
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
`}
          />
        </Box>
      </Box>
    </SimpleGrid>
  );
}
