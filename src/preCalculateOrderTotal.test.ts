import { describe, expect, test } from 'vitest';
import preCalculateOrderTotal, { type MyProduct } from './preCalculateOrderTotal';

describe('Test PreCalculateOrderTotaux', () => {
  type TestProduct = Pick<MyProduct, 'Quantity' | 'PricePerUnitHT' | 'Weight'>;

  test('Expect product prices for products to be summed up correctly', () => {
    const myProducts: TestProduct[] = [
      {
        Quantity: 2,
        PricePerUnitHT: 41.41,
        Weight: 10,
      },
      {
        Quantity: 4,
        PricePerUnitHT: 51.71,
        Weight: 15,
      },
      {
        Quantity: 3,
        PricePerUnitHT: 55,
        Weight: 18,
      },
    ];

    const expected = {
      ToCalculate: false,
      TotalHT: 454.66, // = 82.82 + 206,84 + 165 = 2 * 41.41 + 4 * 51.71 + 3 * 55
      TotalWeight: 134, // = 20 + 60 + 54 = 2 * 10 + 4 * 15 + 3 * 18
      TotalQuantity: 9, // = 2 + 4 + 3
    };

    expect(preCalculateOrderTotal(myProducts)).toStrictEqual(expected);
  });

  test('Expect weight with floating point to be summed up correctly', () => {
    const myProducts: TestProduct[] = [
      {
        Quantity: 2,
        PricePerUnitHT: 41,
        Weight: 10.2,
      },
      {
        Quantity: 4,
        PricePerUnitHT: 51,
        Weight: 15.2,
      },
    ];

    const expected = {
      ToCalculate: false,
      TotalHT: 286, // = 82.82 + 206,84 + 165 = 2 * 41.41 + 4 * 51.71 + 3 * 55
      TotalWeight: 81.2, // = 20 + 60 + 54 = 2 * 10 + 4 * 15 + 3 * 18
      TotalQuantity: 6, // = 2 + 4 + 3
    };

    expect(preCalculateOrderTotal(myProducts)).toStrictEqual(expected);
  });
});
