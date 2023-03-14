export interface CharacterDataStructure {
  name: string;
  age: number;
  gender: "female" | "male";
  height: string;
  weight: string;
  alignment: Alignment;
  race: Races;
  pathfinderclass: Classes;
  image: string;
  id: string;
}

export interface CharactersData {
  character: CharactersDataStructure;
}

export enum Races {
  human = "human",
  elf = "elf",
  dwarf = "dwarf",
  gnome = "gnome",
  halfElf = "halfElf",
  halfOrc = "halfOrc",
  halfling = "halfling",
}

export enum Classes {
  barbarian = "barbarian",
  bard = "bard",
  druid = "druid",
  fighter = "fighter",
  monk = "monk",
  paladin = "paladin",
  ranger = "ranger",
  rogue = "rogue",
  sorcerer = "sorcerer",
  wizard = "wizard",
}

export enum Alignment {
  LawfulGood = "LawfulGood",
  NeutralGood = "NeutralGood",
  ChaoticGood = "ChaoticGood",
  LawfulNeutral = "LawfulNeutral",
  Neutral = "Neutral",
  ChaoticNeutral = "ChaoticNeutral",
  LawfulEvil = "LawfulEvil",
  NeutralEvil = "NeutralEvil",
  ChaoticEvil = "ChaoticEvil",
}

export type CharactersDataStructure = CharacterDataStructure[];
