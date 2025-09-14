import { characters, CharacterBase, Stat } from './data/characters';

export interface RolledStat {
  base: number;
  modifier: number; // percentage 70-115
  value: number;
}

export interface RolledCharacter {
  name: string;
  stats: Record<Stat, RolledStat>;
  tier: number; // average modifier
}

const MIN_MOD = 0.7;
const MAX_MOD = 1.15;

function rollStat(base: number): RolledStat {
  const modifier = Math.random() * (MAX_MOD - MIN_MOD) + MIN_MOD;
  const roundedPercent = Math.round(modifier * 100);
  const value = Math.round(base * modifier);
  return { base, modifier: roundedPercent, value };
}

export function rollCharacter(baseChar: CharacterBase): RolledCharacter {
  const stats = {} as Record<Stat, RolledStat>;
  let total = 0;
  let count = 0;
  for (const key of Object.keys(baseChar.baseStats) as Stat[]) {
    const rolled = rollStat(baseChar.baseStats[key]);
    stats[key] = rolled;
    total += rolled.modifier;
    count++;
  }
  const tier = Math.round(total / count);
  return { name: baseChar.name, stats, tier };
}

export function rollCharacters(count = 5): RolledCharacter[] {
  const pool = [...characters];
  const result: RolledCharacter[] = [];
  for (let i = 0; i < count && pool.length > 0; i++) {
    const idx = Math.floor(Math.random() * pool.length);
    const [baseChar] = pool.splice(idx, 1);
    result.push(rollCharacter(baseChar));
  }
  return result;
}

export function formatRolledCharacter(char: RolledCharacter): string {
  const statLines = Object.entries(char.stats)
    .map(([stat, data]) => `${stat}: ${data.modifier}%`)
    .join(' ');
  return `${char.name} (${char.tier}%)\n${statLines}`;
}
