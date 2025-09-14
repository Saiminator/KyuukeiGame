export type Stat = 'STR' | 'AGI' | 'STA' | 'MAG' | 'WIT' | 'WIL' | 'CHA' | 'LUC';

export interface CharacterBase {
  name: string;
  baseStats: Record<Stat, number>;
}

export const characters: CharacterBase[] = [
  {
    name: 'Via',
    baseStats: { STR: 12, AGI: 14, STA: 10, MAG: 8, WIT: 13, WIL: 9, CHA: 11, LUC: 10 },
  },
  {
    name: 'Kyu',
    baseStats: { STR: 11, AGI: 13, STA: 12, MAG: 9, WIT: 12, WIL: 10, CHA: 8, LUC: 9 },
  },
  {
    name: 'Yura Saite',
    baseStats: { STR: 8, AGI: 15, STA: 9, MAG: 11, WIT: 14, WIL: 7, CHA: 10, LUC: 11 },
  },
  {
    name: 'Mika',
    baseStats: { STR: 10, AGI: 10, STA: 11, MAG: 13, WIT: 10, WIL: 12, CHA: 9, LUC: 8 },
  },
  {
    name: 'Kaji',
    baseStats: { STR: 14, AGI: 9, STA: 13, MAG: 7, WIT: 8, WIL: 13, CHA: 7, LUC: 10 },
  },
  {
    name: 'Rin',
    baseStats: { STR: 9, AGI: 12, STA: 10, MAG: 14, WIT: 13, WIL: 8, CHA: 12, LUC: 9 },
  },
  {
    name: 'Sora',
    baseStats: { STR: 7, AGI: 11, STA: 12, MAG: 15, WIT: 9, WIL: 10, CHA: 13, LUC: 11 },
  },
  {
    name: 'Kai',
    baseStats: { STR: 13, AGI: 8, STA: 14, MAG: 6, WIT: 10, WIL: 14, CHA: 6, LUC: 12 },
  },
];
