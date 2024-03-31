import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import { CodeBlock, a11yDark } from "react-code-blocks";

export default function PlayerCodeBlocks() {
  return (
    <SimpleGrid spacing={"5px"} columns={{ base: 1, md: 2 }}>
      <Box>
        <Text fontSize={"20px"} fontWeight={800}>
          Hook
        </Text>
        <Box my={2}>
          <CodeBlock
            theme={a11yDark}
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
            theme={a11yDark}
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
      <Box>
        <Text fontSize={"20px"} fontWeight={800}>
          Hook V1
        </Text>
        <Box my={2}>
          <CodeBlock
            theme={a11yDark}
            language="typescript"
            text={`// src:/hooks/usePlayerState.tsx
/* eslint-disable @typescript-eslint/no-confusing-void-expression */
import { useAppToast } from "@/utils/useAppToast";
import { useState, useEffect } from "react";

interface StatePatternV1<T> {
\t  get: () => T;
\t  set: React.Dispatch<React.SetStateAction<T>>;
\t  effect: (callback?: (value: T) => void, dependencies?: unknown[]) => void;
}

const generateStatePattern = ([value, setValue]: [
\t  any,
\t  React.Dispatch<React.SetStateAction<any>>,
]): StatePatternV1<any> => {
\t  return {
\t\t    get: () => value,
\t\t    set: setValue?.bind(null),
\t\t    effect: (callback?: (currValue?: typeof value) => void, deps?: unknown[]) => {
\t\t      useEffect(() => {
\t\t       callback?.(value);
\t\t      }, [...(deps ?? []), value]);
\t\t    },
\t  };
};

interface PlayerHookReturn {
\t  health: StatePatternV1<number>;
\t  mana: StatePatternV1<number>;
\t  // heal: (value: number) => void;
\t  attack: (damage: number) => void;
\t  useMagic: (cost: number) => void;
\t  // usePotion: (value: number) => void;
}

export default function usePlayerState(): PlayerHookReturn {
\t  // Initialize state
\t  const { showToast } = useAppToast();
\t  const health = generateStatePattern(useState(300));
\t  const mana = generateStatePattern(useState(50));
\t
\t  // Return Value
\t  return {
\t\t    health,
\t\t    mana,
\t\t    attack: (damage: number) => {
\t\t\t      health.get() < 51
\t\t\t\t        ? showToast({ title: "Low health, go heal", status: "error" })
\t\t\t\t        : showToast({ title: \`Damage dealt: \${damage} pts\`, status: "warning" });
\t\t\t      health.get() > 50 && health.set(health.get() - 5);
\t\t    },
\t\t    useMagic: (cost: number) =>
\t\t\t      cost > mana.get()
\t\t\t\t        ? showToast({ title: "Not enough mana", status: "error" })
\t\t\t\t        : mana.set(mana.get() - cost),
\t  };
}
`}
          />
        </Box>
      </Box>
      <Box>
        <Text fontSize={"20px"} fontWeight={800}>
          Component V3
        </Text>
        <Box my={2}>
          <CodeBlock
            theme={a11yDark}
            language="typescript"
            text={`// src:/components/PlayerControlBoard.tsx
/* eslint-disable @typescript-eslint/no-confusing-void-expression */
import usePlayerState from "@/hooks/usePlayerState";
import { Box, Button, Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";

export default function PlayerControlHook() {
\t  const { health, mana, attack, useMagic } = usePlayerState();
\t
\t  const heal = (value: number) => {
\t\t    health.set(health.get() + value);
\t  };
\t  const usePotion = (value: number) => {
\t\t    mana.set(mana.get() + value);
\t  };
\t
\t  return (
\t\t    <Flex flexDir={"row"} gap={"12px"}>
\t\t\t      <Box p={"30px"} bgColor={"yellowgreen"} maxW={"300px"}>
\t\t\t\t        <Text>Player Control Effects V2</Text>
\t\t\t\t        <Box my={"3px"} p={"2px"} bgColor={"whitesmoke"}>
\t\t\t\t\t          <Text fontWeight={700}>Health : {health.get()}</Text>
\t\t\t\t\t          <Text fontWeight={700}>Mana : {mana.get()}</Text>
\t\t\t\t        </Box>
\t\t\t\t        <Stack spacing={"2px"} my={"3px"} p={"2px"}>
\t\t\t\t\t          <Button onClick={() => heal(20)}>Heal</Button>
\t\t\t\t\t          <Button onClick={() => attack(100)}>Attack</Button>
\t\t\t\t\t          <Button onClick={() => useMagic(10)}>Use Magic</Button>
\t\t\t\t\t          <Button onClick={() => usePotion(50)}>Use Potion</Button>
\t\t\t\t        </Stack>
\t\t\t      </Box>
\t\t    </Flex>
\t  );
}
`}
          />
        </Box>
      </Box>
    </SimpleGrid>
  );
}
