import React from "react";
import { NavLink } from "react-router-dom";
import "./SupplyChainLanding.css";

const tileData = [
  {
    id: "demand-planning",
    title: "Demand Planning",
    metrics: [
      { name: "S&OP Fcst", value: "$9.8M", change: "12.7%", positive: true },
      { name: "MAPE", value: "15%", change: "2.37%", positive: true },
      { name: "BIAS", value: "-5%", change: "12.7%", positive: false },
    ],
    route: "/category/supply-chain/report/Forecast%20Accuracy",
  },
  {
    id: "supply-planning",
    title: "Supply Planning",
    metrics: [
      { name: "Fill Rate", value: "98%", change: "12.7%", positive: true },
      { name: "Rev at Risk", value: "$5m", change: "20.5%", positive: false },
      {
        name: "STOs in Transit",
        value: "$15m",
        change: "20.5%",
        positive: false,
      },
    ],
    route: "/category/supply-chain/report/Order%20Fulfillment",
  },
  {
    id: "inventory-management",
    title: "Inventory Management",
    metrics: [
      {
        name: "Inventory on Hand",
        value: "$100m",
        change: "12.7%",
        positive: true,
      },
      {
        name: "Projected Inv.",
        value: "$120m",
        change: "2.5%",
        positive: false,
      },
      {
        name: "Inventory Turn Over",
        value: "85%",
        change: "2.5%",
        positive: true,
      },
    ],
    route: "/category/supply-chain/report/Inventory%20Management",
  },
  {
    id: "customer-service",
    title: "Customer Service",
    metrics: [
      { name: "WoC", value: "16", change: "12.7%", positive: true },
      { name: "C-Sat", value: "25%", change: "2.5%", positive: false },
      {
        name: "Allocation Consumed",
        value: "95%",
        change: "2.5%",
        positive: true,
      },
    ],
    route: "/category/supply-chain/report/*",
  },
  {
    id: "logistics-distribution",
    title: "Logistics & Distribution",
    metrics: [
      { name: "Shipments", value: "$100m", change: "12.7%", positive: true },
      { name: "OTIF", value: "45%", change: "5%", positive: false },
      { name: "Freight/Lb", value: "0.05%", change: "2.5%", positive: true },
    ],
    route: "/category/supply-chain/report/Shipments",
  },
  {
    id: "capacity-planning",
    title: "Capacity Planning",
    metrics: [
      {
        name: "Production Attainment",
        value: "16",
        change: "12.7%",
        positive: true,
      },
      { name: "OEE", value: "85%", change: "2.5%", positive: true },
    ],
    route: "/category/supply-chain/report/*",
  },
];
const teamUpdate = {
  id: "team-updates",
  title: "Team Updates",
  image: "https://via.placeholder.com/300", // Replace with actual image
  background: "#007bff", // Example background color
  route: "/team-updates",
};
const SupplyChainLanding = () => {
  return (
    <div style={{display:"flex",flexDirection:"row",padding:"5em",width:"100%"}}>
      <NavLink key={teamUpdate.id} to={teamUpdate.route} className="tile-team-update">
        <div
          className={`tile-content-main ${teamUpdate.large ? "large-tile" : ""}`}
          style={{ backgroundColor: teamUpdate.background || "#fff" }}
        >
          {/* {teamUpdate.image && (
            <img
              src={teamUpdate.image}
              alt={teamUpdate.title}
              className="tile-image"
            />
          )} */}
          <div className="tile-title-main">{teamUpdate.title}</div>
          {tileData?.metrics && (
            <ul className="metrics-list">
              {tileData?.metrics.map((metric, index) => (
                <li
                  key={index}
                  className={metric.positive ? "positive" : "negative"}
                >
                  <span>{metric.name}</span>
                  <span>{metric.value}</span>
                  <span>{metric.change}</span>
                </li>
              ))}
            </ul>
          )}
          <div className="arrow">&#10132;</div> {/* Unicode arrow */}
        </div>
      </NavLink>
      <div className="dashboard-container">
        {tileData.map((tile) => (
          <NavLink key={tile.id} to={tile.route} className="tile-link">
            <div
              className={`tile-content ${tile.large ? "large-tile" : ""}`}
              style={{ backgroundColor: tile.background || "#fff" }}
            >
              {tile.image && (
                <img src={tile.image} alt={tile.title} className="tile-image" />
              )}
              <div className="tile-title">{tile.title}</div>
              {tile.metrics && (
                <ul className="metrics-list">
                  {tile.metrics.map((metric, index) => (
                    <li
                      key={index}
                      className={metric.positive ? "positive" : "negative"}
                    >
                      <span>{metric.name}</span>
                      <span>{metric.value}</span>
                      <span>{metric.change}</span>
                    </li>
                  ))}
                </ul>
              )}
              <div className="arrow">&#10132;</div> {/* Unicode arrow */}
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default SupplyChainLanding;
