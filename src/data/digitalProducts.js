import { getProductCommerce } from '../lib/productCommerce';

export const budgetProduct = {
  id: 'simple-budget-debt',
  name: 'Simple Budget + Debt',
  path: '/products/simple-budget-debt',
  contactPath: '/contact?product=simple-budget-debt',
  description: 'A monthly budget and debt tracker with clear charts, guided setup, and six colorways in one bundle.',
  commerce: getProductCommerce({
    releaseReady: import.meta.env.VITE_BUDGET_RELEASE_READY,
    checkoutUrl: import.meta.env.VITE_BUDGET_CHECKOUT_URL,
    priceUsd: import.meta.env.VITE_BUDGET_PRICE_USD,
  }),
};

export const colorways = [
  { id: 'ocean', name: 'Ocean', color: '#197d9c', background: '#e1f0f6' },
  { id: 'forest', name: 'Forest', color: '#38664c', background: '#e8f1e7' },
  { id: 'rose', name: 'Rose', color: '#a74f6d', background: '#f8e9ef' },
  { id: 'warm-sand', name: 'Warm Sand', color: '#9b744c', background: '#f5eddf' },
  { id: 'dark-lavender', name: 'Dark Lavender', color: '#8062ad', background: '#eae4f3' },
  { id: 'high-contrast-ocean', name: 'High Contrast Ocean', color: '#07546d', background: '#e1f0f6' },
];

export const sheetPreviews = [
  { id: 'budget', name: 'Monthly Budget', width: 2209, height: 782 },
  { id: 'debt', name: 'Debt Tracker', width: 2223, height: 574 },
  { id: 'guide', name: 'Start Here', width: 1390, height: 1691 },
];

export function previewPath(colorway = 'ocean', sheet = 'budget') {
  return `/assets/products/simple-budget-debt/${colorway}-${sheet}.webp`;
}

export const budgetFaqs = [
  {
    question: 'What comes in the bundle?',
    answer: 'Six .xlsx workbooks: Ocean, Forest, Rose, Warm Sand, Dark Lavender, and High Contrast Ocean. Each includes Monthly Budget, Debt Tracker, and Start Here tabs with the same calculations and features. A read-me file is also included.',
  },
  {
    question: 'Which spreadsheet apps have been tested?',
    answer: 'The workbooks have been verified in LibreOffice Calc. Direct testing in Microsoft Excel and Google Sheets is still pending, so compatibility with those apps is not yet confirmed. This page will be updated as testing is completed.',
  },
  {
    question: 'Does entering a payment update my debt balance?',
    answer: 'Payment totals feed into the monthly budget automatically. Update each current balance yourself using your latest statement. The tracker does not calculate interest or payoff dates.',
  },
  {
    question: 'How do I start a new month?',
    answer: 'Save a new monthly copy. Keep your plans, debt names, and starting balances; clear actual income and living costs, reset paid-this-month amounts, refresh current balances, and change the month label. The Start Here tab walks you through it. There is no automatic annual rollup.',
  },
  {
    question: 'Will it connect to my bank?',
    answer: 'No bank connection or macros are required. You enter your own amounts into the tinted cells. Formulas are editable and are not locked, so keep an untouched copy of the original workbook.',
  },
  {
    question: 'Can I use it on a phone?',
    answer: 'The layout is designed for desktop spreadsheet use. Smaller screens may need zooming or scrolling. The previews show fictional examples in USD; replace those examples with your own entries before using the workbook.',
  },
];
