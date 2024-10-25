// CategoryPage.js
import React, { useEffect } from "react";
import "./Category.css"; // Landing Page styles
// import Tiles from './Tiles'; // Import the Tiles component
// import BuissnessLogo from '../../assets/360.png';
import BackgroundVideo from "../../assets/bg-video.mp4"; // Your video file
import { connect, useDispatch, useSelector } from "react-redux";

const CategoryPage = (props) => {
  const url = window.location.pathname; // e.g., "/category/marketting/report/some-page"
  const parts = url.split("/");

  // Extract the category from the URL (2nd index, assuming fixed structure)
  const category = parts[2]?.replace("-", " ");

  const menuList = useSelector((state) => state.menuListReducer.menuItems);
  const categoryName = menuList.find(
    (item) => item.name.toLowerCase() === category.toLocaleLowerCase()
  )?.name;

  const categoryDescription = [
    {
      "category": "executive",
      "purpose": "To provide a comprehensive overview for executive leadership on key performance indicators (KPIs) across the organization. The dashboard should help executives make informed strategic decisions by displaying trends and performance metrics.",
      "dataUsed": {
        "dataSource": "Financial reports, market data, internal KPIs, project milestones.",
        "keyFields": [
          "Revenue",
          "Profit Margins",
          "Market Share",
          "Operational Costs",
          "R&D Spend",
          "Employee Headcount"
        ]
      },
      "insights": [
        "Trends in financial performance and market share over the last 18 months.",
        "Key project and initiative updates and success rates.",
        "Profitability and cost analysis by department or product line.",
        "Competitive analysis and positioning."
      ],
      "features": [
        "Ability to filter and select data for specific departments, projects, or time periods."
      ],
      "businessQuestionsAnswered": [
        "How are we performing against our strategic goals?",
        "Are there any areas of concern that require immediate attention?",
        "What is the trend in market share and how do we compare with competitors?",
        "What is the impact of our R&D investments on innovation and growth?"
      ]
    },
    {
      "category": "sales",
      "purpose": "To analyze and compare sales performance across regions, channels, and products. This dashboard aims to inform and optimize sales strategies.",
      "dataUsed": {
        "dataSource": "CRM systems, sales transactions, marketing databases.",
        "keyFields": [
          "Sales Region",
          "Channel",
          "Product",
          "Sales Volume",
          "Lead Conversion",
          "Revenue"
        ]
      },
      "insights": [
        "Regional sales trends and percentage contribution to total sales.",
        "Channel performance and product-wise sales metrics.",
        "Lead-to-sales conversion rates and sales velocity.",
        "Profit margins by sales channel and region."
      ],
      "features": [
        "Option to drill down into regional and product-level data."
      ],
      "businessQuestionsAnswered": [
        "Which regions and channels are performing the best?",
        "How is our lead conversion rate trending over time?",
        "Are we meeting our sales targets, and what factors are affecting them?",
        "Which products are generating the highest profit margins?"
      ]
    },
    {
      "category": "finance",
      "purpose": "To provide a detailed view of the financial health of the organization. Focus on key metrics like revenue, cost, cash flow, and profitability.",
      "dataUsed": {
        "dataSource": "Financial statements, internal cost reports, project accounting.",
        "keyFields": [
          "Revenue",
          "Cost of Goods Sold (COGS)",
          "Operating Expenses",
          "Profit Margin",
          "Cash Flow"
        ]
      },
      "insights": [
        "Trends in revenue and cost over the last 12 months.",
        "Profit margin breakdown by department or project.",
        "Detailed cash flow analysis and forecasting.",
        "Return on investment (ROI) across key projects."
      ],
      "features": [
        "Filters to view financial data by department, project, or time period."
      ],
      "businessQuestionsAnswered": [
        "How is the company’s profitability trending over time?",
        "Which departments or projects are most profitable?",
        "Are there any unexpected cash flow variations or risks?",
        "What actions can we take to optimize costs and improve margins?"
      ]
    },
    {
      "category": "marketing",
      "purpose": "To track and analyze the effectiveness of marketing campaigns and strategies. The dashboard should provide insights to optimize campaign performance and customer segmentation.",
      "dataUsed": {
        "dataSource": "Marketing automation tools, social media analytics, customer surveys.",
        "keyFields": [
          "Campaign ID",
          "Customer Segment",
          "Marketing Channel",
          "Conversions",
          "Engagement Rate"
        ]
      },
      "insights": [
        "Campaign performance and conversion rate analysis.",
        "Customer segmentation analysis by demographics and behavior.",
        "Channel-wise marketing effectiveness and ROI.",
        "Trends in customer engagement and brand sentiment."
      ],
      "features": [
        "Ability to segment and filter by campaign, channel, and customer segment."
      ],
      "businessQuestionsAnswered": [
        "Which campaigns are generating the highest ROI?",
        "How are customers segmented, and what are their buying behaviors?",
        "What is the effectiveness of each marketing channel?",
        "What can we do to increase customer engagement and reduce churn?"
      ]
    },
    {
      "category": "supply chain",
      "purpose": "To optimize supply chain efficiency and monitor key metrics like inventory, supplier performance, and logistics. Provide insights to improve order fulfillment and reduce costs.",
      "dataUsed": {
        "dataSource": "Inventory management systems, supplier databases, logistics reports.",
        "keyFields": [
          "Supplier",
          "Product",
          "Inventory Levels",
          "Delivery Time",
          "Cost"
        ]
      },
      "insights": [
        "Trends in inventory levels and order fulfillment rates.",
        "Supplier performance metrics and risk indicators.",
        "Cost analysis for transportation and warehousing.",
        "Detailed logistics performance and delivery lead times."
      ],
      "features": [
        "Option to filter by supplier, product category, and logistics provider."
      ],
      "businessQuestionsAnswered": [
        "Are we meeting our order fulfillment targets?",
        "Which suppliers are performing well, and which are at risk?",
        "What are the main drivers of supply chain costs?",
        "How can we optimize inventory levels and reduce delivery lead times?"
      ]
    },
    {
      "category": "manufacturing",
      "purpose": "To monitor and improve manufacturing processes and operational efficiency. Focus on key metrics such as OEE (Overall Equipment Effectiveness), production output, and quality.",
      "dataUsed": {
        "dataSource": "Production systems, maintenance logs, quality reports.",
        "keyFields": [
          "Production Line",
          "Machine",
          "OEE",
          "Downtime",
          "Quality",
          "Scrap Rate"
        ]
      },
      "insights": [
        "Trends in OEE and downtime over the last 12 months.",
        "Production output and scrap rate by production line or machine.",
        "Quality metrics and defect analysis.",
        "Maintenance effectiveness and cost analysis."
      ],
      "features": [
        "Filters to view data by production line, machine, or product category."
      ],
      "businessQuestionsAnswered": [
        "How are our production lines performing, and where can we improve efficiency?",
        "What is the trend in downtime and scrap rate over time?",
        "Are there any quality issues that require immediate attention?",
        "How effective are our maintenance efforts in reducing costs and downtime?"
      ]
    }
  ]

  const selCategory =  categoryDescription.find(
    (item) => item.category.toLowerCase() === category.toLocaleLowerCase()
  );
  
  useEffect(() => {
    // console.log("category", category);
  }, []);
  return (
    <div className="landing-page">
      {/* Main Content */}
      <video className="background-video" autoPlay loop muted>
        <source src={BackgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* <main className="main-content">
        <div className="wrap">
          {categoryReports?.length > 0 &&
            categoryReports.map((report) => (
              <div className="tile">
                <img
                  src="https://images.unsplash.com/photo-1562564055-71e051d33c19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="Executive View"
                />
                <div className="text">
                  <h1>{report.name}</h1>
                 
                  <div className="dots">
                    <span></span>
                    <span></span> 
                    <span></span>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </main> */}
      <main className="main-content">
     
        <div className="dashboard">
          <h1>
            {categoryName} View
          </h1>

          <section className="section">
            <h2>PURPOSE</h2>
            <div>{selCategory?.purpose}</div>
          </section>

          <section className="section">
            <h2>DATA USED</h2>
            <ul>
              <li>Data Source: {selCategory?.dataUsed?.dataSource}</li>
              <li>
                Key Fields: <div style={{fontWeight:"bold", fontSize:"18px"}}>{selCategory?.dataUsed.keyFields.join(", ")}</div>
              </li>
            </ul>
          </section>

          <section className="section">
            <h2>INSIGHTS</h2>
            <ul>
              {selCategory?.insights.map((insight, index) => (
                <li key={index}>{insight}</li>
              ))}
            </ul>
          </section>

          <section className="section">
            <h2>FEATURES</h2>
            <ul>
              {selCategory?.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </section>

          <section className="section">
            <h2>BUSINESS QUESTIONS ANSWERED</h2>
            <ul>
              {selCategory?.businessQuestionsAnswered.map((question, index) => (
                <li key={index}>{question}</li>
              ))}
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
};

const mapStateToProps = (state) => ({
  updatedReports: state.reportReducer.updatedReports,
  editMode: state.reportReducer.reportEditMode,
});

export default connect(mapStateToProps)(CategoryPage);
