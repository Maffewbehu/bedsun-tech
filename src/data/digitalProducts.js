import { getProductCommerce } from '../lib/productCommerce';

export const budgetProduct = {
  id: 'simple-budget-debt',
  name: 'Simple Budget + Debt',
  path: '/products/simple-budget-debt',
  contactPath: '/contact?product=simple-budget-debt',
  description: 'A monthly budget and debt tracker with clear charts, guided setup, and six colorways in one bundle.',
  purchase: {
    heading: 'The complete colorway bundle',
    availableDescription: 'One purchase includes all six colorways.',
    upcomingDescription: 'Preview the workbook below. Pricing and purchase details will be posted when the bundle is ready.',
    buttonLabel: 'Buy the bundle',
    fileLabel: 'Digital spreadsheet files · No physical item',
  },
  inquiryService: 'Digital product / spreadsheet',
  commerce: getProductCommerce({
    releaseReady: import.meta.env.VITE_BUDGET_RELEASE_READY ?? 'true',
    checkoutUrl: import.meta.env.VITE_BUDGET_CHECKOUT_URL || '/api/store/checkout',
    priceUsd: import.meta.env.VITE_BUDGET_PRICE_USD || '9',
  }),
};

export const dashboardProduct = {
  id: 'sales-expenses-dashboard',
  name: 'Small Business Sales & Expenses Dashboard',
  path: '/products/sales-expenses-dashboard',
  contactPath: '/contact?product=sales-expenses-dashboard',
  description: 'A Power BI template that brings revenue, direct costs, operating expenses, and profit together across three report pages.',
  purchase: {
    heading: 'The complete dashboard package',
    availableDescription: 'Includes the Power BI template, sample Excel workbook, buyer guide, and quick-start instructions.',
    upcomingDescription: 'Explore the report below. Pricing and purchase details will be posted when the dashboard is available.',
    buttonLabel: 'Buy the dashboard',
    fileLabel: 'Digital Power BI template · Windows desktop',
  },
  inquiryService: 'Digital product / Power BI dashboard',
  commerce: getProductCommerce({
    releaseReady: import.meta.env.VITE_DASHBOARD_RELEASE_READY,
    checkoutUrl: import.meta.env.VITE_DASHBOARD_CHECKOUT_URL || '/api/store/checkout',
    priceUsd: import.meta.env.VITE_DASHBOARD_PRICE_USD || '29',
  }),
};

export const digitalProducts = [budgetProduct, dashboardProduct];

export const reportPreviews = [
  { id: 'overview', name: 'Overview', description: 'Revenue, total expenses, operating profit, and margin, with monthly trends and summaries.' },
  { id: 'sales', name: 'Sales', description: 'Revenue and gross profit by service, sales channels, invoice counts, and customer performance.' },
  { id: 'operating-expenses', name: 'Operating Expenses', description: 'Operating overhead by month, category, and vendor, plus individual expense entries.' },
].map(page => ({ ...page, image: `/assets/products/sales-expenses-dashboard/${page.id}.png` }));

export const dashboardFaqs = [
  {
    question: 'What comes in the download?',
    answer: 'One ZIP containing a reusable .pbit Power BI template, a sample .xlsx workbook with Sales and Expenses tables, a three-page PDF buyer guide, and quick-start instructions. The template has Overview, Sales, and Operating Expenses pages with year and month filters.',
  },
  {
    question: 'What software do I need?',
    answer: 'Use Microsoft Power BI Desktop on Windows to open the template. You can view and refresh the report locally without signing in to the Power BI service. Online publishing and sharing have separate account and licensing requirements. This is a desktop template, not a hosted dashboard.',
  },
  {
    question: 'Can I try it with demo data first?',
    answer: 'Yes. Open the .pbit template and leave DataFilePath blank to load the built-in fictional demo. The example covers January 2025 through September 2026 and uses USD. The blank-path demo has been opened and refreshed in Power BI Desktop.',
  },
  {
    question: 'How do I connect my own data?',
    answer: 'Make a copy of the sample Excel workbook and replace its example rows. Keep the named Sales and Expenses tables and their column names. In Power BI Desktop, set DataFilePath to the full local path of your workbook and refresh. New rows are read on refresh; the buyer guide covers the setup.',
  },
  {
    question: 'How is operating profit calculated?',
    answer: 'Operating profit equals sales revenue minus invoice direct costs and operating expenses. Gross profit subtracts only direct costs. Keep direct costs out of the Expenses table so they are not counted twice. Operating overhead is shown at business level and is not allocated to individual services.',
  },
  {
    question: 'Does it connect to my bank or accounting software?',
    answer: 'The included connection reads the two tables in your local Excel workbook. It does not include live bank feeds, accounting integrations, or scheduled online refresh. Update the workbook and refresh the report in Power BI Desktop.',
  },
];

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
