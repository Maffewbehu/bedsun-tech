import { useEffect } from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import { articleSchema } from "../lib/structuredData";
import { trackAnalyticsEvent } from "../lib/analytics";

const PAGE_PATH = "/blog/monthly-budget-spreadsheet-guide";
const GUIDE_ID = "monthly-budget-spreadsheet-guide";
const PRODUCT_ID = "simple-budget-debt";

const ARTICLE_SCHEMA = articleSchema({
  title: "How to Make a Monthly Budget in a Spreadsheet",
  description:
    "A practical, step-by-step guide to building a monthly budget spreadsheet, tracking actual spending, and keeping debt payments visible.",
  path: PAGE_PATH,
  datePublished: "2026-10-11",
  dateModified: "2026-10-11",
  keywords: [
    "monthly budget spreadsheet",
    "budget and debt tracker spreadsheet",
    "how to track monthly expenses",
  ],
});

function Section({ title, children }) {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900">{title}</h2>
      <div className="mt-4 space-y-4 text-sm leading-relaxed text-gray-600">{children}</div>
    </section>
  );
}

export default function MonthlyBudgetSpreadsheetGuide() {
  useEffect(() => {
    trackAnalyticsEvent("digital_product_guide_view", {
      guide_id: GUIDE_ID,
      product_id: PRODUCT_ID,
    });
  }, []);

  function trackProductClick() {
    trackAnalyticsEvent("digital_product_guide_product_click", {
      guide_id: GUIDE_ID,
      product_id: PRODUCT_ID,
      link_location: "article_callout",
    });
  }

  return (
    <>
      <SEO
        title="How to Make a Monthly Budget in a Spreadsheet | Bedsun Tech"
        description="Learn how to set up a monthly budget spreadsheet, compare planned and actual spending, and track debt payments in one clear routine."
        path={PAGE_PATH}
        type="article"
        structuredData={[ARTICLE_SCHEMA]}
      />

      <article>
        <header className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
            Spreadsheet guide · Personal finance
          </p>
          <h1 className="mt-2 max-w-4xl text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            How to make a monthly budget in a spreadsheet
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-gray-600">
            A useful budget is a monthly plan you can compare with what actually happened. A
            spreadsheet makes that comparison visible, and it can keep regular bills, flexible
            spending, savings goals, and debt payments together.
          </p>
        </header>

        <section className="mb-10 rounded-3xl border border-indigo-100 bg-indigo-50 p-7">
          <h2 className="text-xl font-bold text-gray-900">The short version</h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-700">
            Start with take-home income, list your expected expenses, give every dollar a category,
            and check planned amounts against actual spending during the month. Update the plan
            when your real numbers change; the goal is a clearer decision, not a perfect forecast.
          </p>
        </section>

        <Section title="1. Start with the money you expect to receive">
          <p>
            Use the income that will actually be available to spend, such as take-home pay, rather
            than a gross salary figure. If income varies, use a conservative estimate and update it
            when you know the amount. Write down the dates you expect deposits so timing is visible
            alongside totals.
          </p>
        </Section>

        <Section title="2. Use recent spending to build a realistic plan">
          <p>
            Review recent statements or receipts and group expenses into a short list you can keep
            using. Common groups include housing and utilities, food, transportation, health,
            subscriptions, savings, and debt payments. Separate bills that are usually steady from
            costs that vary month to month.
          </p>
          <p>
            Add less frequent costs too. If you pay for annual renewals, car maintenance, school
            expenses, or holiday travel, divide the expected amount across the months you have to
            prepare. That makes an occasional bill easier to see before it arrives.
          </p>
        </Section>

        <Section title="3. Give planned and actual amounts separate columns">
          <p>
            At the beginning of the month, enter the amount you plan for each category. As the
            month goes on, enter what you actually spent. Compare the two regularly: a difference
            can mean the estimate needs adjusting, spending changed, or a bill is still coming.
          </p>
          <p>
            Keep categories broad enough that you will maintain them. A budget with a few clear
            groups is more useful than a detailed one that becomes a chore to update.
          </p>
        </Section>

        <Section title="4. Keep debt payments visible">
          <p>
            Record each account separately and keep the payment planned for the month next to the
            amount actually paid. Note balances from statements on a consistent schedule so you can
            compare them over time. Continue to follow the terms and minimum-payment requirements
            from each lender.
          </p>
          <p>
            A tracker helps organize the information; it does not contact lenders, connect to bank
            accounts, or decide which debt strategy is right for you.
          </p>
        </Section>

        <Section title="5. Use a small weekly check-in">
          <p>
            Once a week, compare actual spending with the plan, check upcoming bills, and adjust
            categories if something changed. At month-end, save or copy the finished month before
            starting the next one. That gives you a simple record to use when planning again.
          </p>
        </Section>

        <aside className="mb-10 rounded-3xl border border-gray-200 bg-white p-7 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900">
            Want a ready-made budget and debt tracker?
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-600">
            The Bedsun Tech workbook puts a monthly budget, debt tracker, charts, and setup guide
            together. It includes six colorways, with the same features in each, and you can
            preview the actual worksheets before deciding.
          </p>
          <Link
            to="/products/simple-budget-debt"
            onClick={trackProductClick}
            className="mt-5 inline-flex min-h-11 items-center justify-center rounded-xl bg-indigo-700 px-5 py-3 text-sm font-semibold text-white hover:bg-indigo-800"
          >
            Preview the budget and debt tracker
          </Link>
        </aside>

        <p className="text-xs leading-relaxed text-gray-500">
          This article is general spreadsheet education, not individualized financial advice.
        </p>
      </article>
    </>
  );
}
