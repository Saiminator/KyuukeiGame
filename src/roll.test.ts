import { rollCharacters } from './roll';
import { Stat } from './data/characters';

describe('rollCharacters', () => {
  test('generates five characters with valid stat modifiers', () => {
    const chars = rollCharacters();
    expect(chars).toHaveLength(5);
    for (const c of chars) {
      const stats = Object.keys(c.stats) as Stat[];
      expect(stats).toHaveLength(8);
      for (const stat of stats) {
        const mod = c.stats[stat].modifier;
        expect(mod).toBeGreaterThanOrEqual(70);
        expect(mod).toBeLessThanOrEqual(115);
      }
    }
  });
});
