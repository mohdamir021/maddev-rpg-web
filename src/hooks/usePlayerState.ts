/* eslint-disable @typescript-eslint/no-confusing-void-expression */
import { useState, useEffect } from "react";

interface PlayerStateValues {
  health: number;
  mana: number;
}
interface PlayerHookReturn {
  player: PlayerStateValues;
  heal: (value: any) => void;
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
    console.log("Player's mana updated!");
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
      console.log(`Player deals ${damage} damage`);
    },
    useMagic: (cost: number) => {
      if (player.mana >= cost) {
        setPlayer({ ...player, mana: player.mana - cost });
        return true;
      } else {
        return false;
      }
    },
    usePotion: (values: number) => {
      setPlayer({ ...player, mana: player.mana + values });
    },
  };
}
