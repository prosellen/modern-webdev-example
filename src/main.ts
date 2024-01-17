import './style.css';
import preCalculateOrderTotal from './preCalculateOrderTotal';

const someProducts = [
  {
    Quantity: 51,
    PricePerUnitHT: 42.41,
    Weight: 10.2,
  },
  {
    Quantity: 13,
    PricePerUnitHT: 12.39,
    Weight: 15.2,
  },
  {
    Quantity: 2,
    PricePerUnitHT: 4.2,
    Weight: 18.18,
  },
];

const totals = preCalculateOrderTotal(someProducts);

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Vite + Vitest + TypeScript</h1>
    <p>
    <div class="card">
      <p>Array of product objects:
      <pre><code>${JSON.stringify(someProducts, undefined, 2)}</code></pre></p>
      <p>Pre-calculated order total:
      <pre><code>${JSON.stringify(totals, undefined, 2)}</code></pre></p>
    </div>
  </div>
`;
