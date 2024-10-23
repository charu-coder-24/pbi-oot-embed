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
  useEffect(() => {
    console.log("category", category);
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
            <ul>
              <li>
                We need a dashboard to compare the performance of our main
                'flagship' products across different categories.
              </li>
              <li>
                The dashboard should display sales, volume, and margin for each
                product across the various sales channels.
              </li>
              <li>
                It's important to understand these metrics in detail to inform
                and refine the flagship product strategy.
              </li>
            </ul>
          </section>

          <section className="section">
            <h2>DATA USED</h2>
            <ul>
              <li>Data Source: In-store and e-commerce sales transactions</li>
              <li>
                Key Fields: Date, Store/Online Source, Product Category,
                Product, Sales, Margin, Volume
              </li>
            </ul>
          </section>

          <section className="section">
            <h2>INSIGHTS</h2>
            <ul>
              <li>
                Total sales trend and each product’s percentage of the total
                over the last 15 months.
              </li>
              <li>
                Breakdown of sales, volume, and margin by product and channel
                (e.g., physical store vs. online store).
              </li>
              <li>
                Comparison of sales vs. cost for each product and channel to
                assess overall performance.
              </li>
              <li>
                Detailed metrics by product and channel for further insights.
              </li>
            </ul>
          </section>

          <section className="section">
            <h2>FEATURES</h2>
            <ul>
              <li>
                Ability to filter and choose specific time periods for analysis.
              </li>
            </ul>
          </section>

          <section className="section">
            <h2>BUSINESS QUESTIONS ANSWERED</h2>
            <ul>
              <li>
                How is demand trending for each flagship product? Are any
                products increasing or declining in importance over time? Do we
                observe any seasonal patterns?
              </li>
              <li>
                How much volume do we sell for each product across different
                channels? Which products yield the highest margins?
              </li>
              <li>
                What is the relationship between sales and cost for each product
                across different channels? Are there any actions we should
                consider to improve profitability?
              </li>
              <li>
                What are the key metrics for each product and channel? Which
                product categories generate the most sales or profit? Should we
                adjust our strategy based on these insights?
              </li>
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
