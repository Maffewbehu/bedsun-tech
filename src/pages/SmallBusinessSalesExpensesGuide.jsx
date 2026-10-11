import { useEffect } from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import { articleSchema } from "../lib/structuredData";
import { trackAnalyticsEvent } from "../lib/analytics";

const PAGE_PATH = "/blog/small-business-sales-expenses-spreadsheet";
const GUIDE_ID = "small-business-sales-expenses-spreadsheet";
const PRODUCT_ID = "sales-expenses-dashboard";

const ARTICLE_SCHEMA = articleSchema({
  title: "How to Track Small Business Sales and Expenses in a Spreadsheet",
  description:
    "Learn how to organize sales and operating expenses in Excel so you can review revenue, costs, and profit in a Power BI dashboard.",
  path: PAGE_PATH,
  datePublished: "2026-10-11",
  dateModified: "2026-10-11",
  keywords: [
    "small business sales and expenses spreadsheet",
    "track business expenses in Excel",
    "Power BI sales dashboard for small business",
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

export default function SmallBusinessSalesExpensesGuide() {
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
        title="Track Small Business Sales and Expenses in Excel | Bedsun Tech"
        description="A practical guide to organizing small business sales and operating expenses in Excel for clear monthly reporting and Power BI."
        path={PAGE_PATH}
        type="article"
        structuredData={[ARTICLE_SCHEMA]}
      />

      <article>
        <header className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
            Spreadsheet guide · Small business reporting
          </p>
          <h1 className="mt-2 max-w-4xl text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            How to track small business sales and expenses in a spreadsheet
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-gray-600">
            A report is only as clear as the information behind it. A consistent Excel workbook
            makes it easier to review sales, direct costs, operating expenses, and what remains
            after overhead.
          </p>
        </header>

        <section className="mb-10 rounded-3xl border border-indigo-100 bg-indigo-50 p-7">
          <h2 className="text-xl font-bold text-gray-900">The short version</h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-700">
            Keep sales and operating expenses in separate tables, use one transaction per row,
            keep column names and data types consistent, and review the same measures each month.
            Separate direct costs tied to sales from general operating overhead so the totals do
            not count the same cost twice.
          </p>
        </section>

        <Section title="Know which numbers you want to review">
          <p>
            Revenue is the amount recorded from sales. Direct costs are costs associated with
            delivering those sales. Operating expenses are the business overhead you record
            separately, such as software, supplies, or rent. A simple operating-profit view subtracts
            direct costs and operating expenses from revenue.
          </p>
          <p>
            Keep your accounting and tax records as the authoritative source for your business.
            A management dashboard can help you review activity, but it does not replace accounting
            advice or tax reporting.
          </p>
        </Section>

        <Section title="Make the Excel source easy to refresh">
          <ol className="list-inside list-decimal space-y-3">
            <li>
              Put sales rows in the Sales table and overhead rows in the Expenses table. Use one
              row for each sale or expense entry.
            </li>
            <li>
              Keep the sample workbook’s table names and column headers if you are using a template
              that expects them. Avoid merged cells, blank header rows, and subtotal rows inside
              the data.
            </li>
            <li>
              Store dates as dates and amounts as numbers. Use a consistent spelling for categories,
              services, and sales channels so the same item does not split into multiple labels.
            </li>
            <li>
              Add new rows to the tables instead of creating a new layout for every month. Then
              refresh the report from the same workbook.
            </li>
          </ol>
        </Section>

        <Section title="Review the business in a repeatable monthly routine">
          <p>
            Compare revenue by month and service, review direct costs and gross profit, then look
            at operating expenses by category. Check operating profit and margin after overhead.
            When a number changes sharply, investigate the underlying rows before drawing a
            conclusion.
          </p>
          <p>
            Keep definitions stable from month to month. For example, do not move the same type of
            cost between direct costs and operating expenses just to make one month look better.
          </p>
        </Section>

        <Section title="What a Power BI template can and cannot do">
          <p>
            A Power BI template can turn organized source tables into charts and filters for
            reviewing business activity. It still depends on consistent data and a refresh routine.
            A desktop template is not automatically a bank feed, accounting integration, or
            continuously updated online dashboard.
          </p>
          <p>
            The Bedsun Tech dashboard starts with fictional demo data. Its sample Excel workbook
            shows the expected Sales and Expenses table structure; you replace the sample rows and
            refresh in Power BI Desktop on Windows.
          </p>
        </Section>

        <aside className="mb-10 rounded-3xl border border-gray-200 bg-white p-7 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900">
            Want to see the sample workbook and report?
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-600">
            Preview the three report pages, see what is included in the ZIP, and review the setup
            requirements before purchasing the Small Business Sales &amp; Expenses Dashboard.
          </p>
          <Link
            to="/products/sales-expenses-dashboard"
            onClick={trackProductClick}
            className="mt-5 inline-flex min-h-11 items-center justify-center rounded-xl bg-indigo-700 px-5 py-3 text-sm font-semibold text-white hover:bg-indigo-800"
          >
            Preview the sales and expenses dashboard
          </Link>
        </aside>
      </article>
    </>
  );
}
