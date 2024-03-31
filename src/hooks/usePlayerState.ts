/* eslint-disable @typescript-eslint/no-confusing-void-expression */
import { useAppToast } from "@/utils/useAppToast";
import { useState, useEffect } from "react";

interface StatePatternV1<T> {
  get: () => T;
  set: React.Dispatch<React.SetStateAction<T>>;
  effect: (callback?: (value: T) => void, dependencies?: unknown[]) => void;
}

const generateStatePattern = ([value, setValue]: [
  any,
  React.Dispatch<React.SetStateAction<any>>,
]): StatePatternV1<any> => {
  return {
    get: () => value,
    set: setValue?.bind(null),
    effect: (callback?: (currValue?: typeof value) => void, deps?: unknown[]) => {
      useEffect(() => {
        callback?.(value);
      }, [...(deps ?? []), value]);
    },
  };
};

interface PlayerHookReturn {
  health: StatePatternV1<number>;
  mana: StatePatternV1<number>;
  // heal: (value: number) => void;
  attack: (damage: number) => void;
  useMagic: (cost: number) => void;
  // usePotion: (value: number) => void;
}

export default function usePlayerState(): PlayerHookReturn {
  // Initialize state
  const { showToast } = useAppToast();
  const health = generateStatePattern(useState(300));
  const mana = generateStatePattern(useState(50));

  // Return Value
  return {
    health,
    mana,
    attack: (damage: number) => {
      health.get() < 51
        ? showToast({ title: "Low health, go heal", status: "error" })
        : showToast({ title: `Damage dealt: ${damage} pts`, status: "warning" });
      health.get() > 50 && health.set(health.get() - 5);
    },
    useMagic: (cost: number) =>
      cost > mana.get()
        ? showToast({ title: "Not enough mana", status: "error" })
        : mana.set(mana.get() - cost),
  };
}
