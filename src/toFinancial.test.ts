import { describe, expect, test } from 'vitest';
import toFinancial from './toFinancial';

describe('toFinancial', () => {
  test('should return 0.04 for the multiplication of 0.1 * 0.4 instead of 0.04000000000000001', () => {
    expect(toFinancial(0.1 * 0.4)).toBe(0.04);
  });
});
