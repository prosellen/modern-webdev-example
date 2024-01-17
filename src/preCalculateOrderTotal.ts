import toFinancial from './toFinancial';

interface OrderTotal {
  TotalQuantity: number;
  TotalWeight: number;
  TotalHT: number;
  ToCalculate: boolean;
}

export interface MyProduct {
  Quantity: number;
  PricePerUnitHT: number;
  Weight: number;
}

/**
 * Pre-calculation of the entire order (total HT without residues, total weight and number of items).
 * This entirety will be used for specific purposes if the order is legitimate.
 * {TotalWeight:number,TotalHT:number,TotalQuantity:number}.
 * @param {Array<MyProduct>} myProducts - The products of the order to be calculated.
 * @returns {OrderTotal} An object with the total weight, total HT and total number of items.
 */
export default (myProducts: Array<MyProduct>): OrderTotal => {
  const orderTotal = myProducts.reduce(
    (acc, product) => {
      const TotalHT = toFinancial(product.Quantity * product.PricePerUnitHT);
      const TotalWeight = toFinancial(product.Quantity * product.Weight);
      const TotalQuantity = product.Quantity;

      return {
        TotalHT: toFinancial(acc.TotalHT + TotalHT),
        TotalWeight: toFinancial(acc.TotalWeight + TotalWeight),
        TotalQuantity: acc.TotalQuantity + TotalQuantity,
      };
    },
    {
      TotalQuantity: 0, // Sum of all ordered items
      TotalWeight: 0, // Weight of all ordered items
      TotalHT: 0, // Sum of all prices
    },
  );

  return {
    ...orderTotal,
    ToCalculate: false,
  };
};
