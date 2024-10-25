import React from 'react';
import './Tiles.css'; // Ensure the CSS file path is correct
import ExecutiveImage from '../../assets/landingPageImages/Executive.jpg'
import FinanceImage from '../../assets/landingPageImages/Finance.jpg'
import ManufacturingImage from '../../assets/landingPageImages/Manufacturing.jpg'
import MarkettingImage from '../../assets/landingPageImages/Marketing.jpg'
import SalesImage from '../../assets/landingPageImages/Sales.jpg'
import SupplyChainImage from '../../assets/landingPageImages/SupplyChain.jpg'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

const tileData = [
  {
    id: 'executive',
    name: 'Executive View',
    description: 'Get a strategic overview with key performance indicators and insights for informed decision-making.',
    // detail: 'and insights for informed decision-making.',
    imageUrl: ExecutiveImage,
  },
  {
    id: 'finance',
    name: 'Finance View',
    description: 'Monitor financial health and profitability with comprehensive analysis of revenue, costs, and cash flow.',
    // detail: 'analysis of revenue, costs, and cash flow.',
    imageUrl: FinanceImage,
  },
  {
    id: 'sales',
    name: 'Sales View',
    description: 'Analyze sales trends, channel effectiveness, and lead conversion to boost revenue and growth.',
    // detail: 'and lead conversion to boost revenue and growth.',
    imageUrl: ManufacturingImage,
  },
  {
    id: 'marketing',
    name: 'Marketing View',
    description: 'Optimize marketing strategies with in-depth insights on campaign performance and customer segmentation.',
    // detail: 'on campaign performance and customer segmentation.',
    imageUrl: MarkettingImage,
  },
  {
    id: 'supply-chain',
    name: 'Supply Chain View',
    description: 'Enhance supply chain efficiency by tracking inventory, supplier performance, and logistics metrics.',
    // detail: 'supplier performance, and logistics metrics.',
    imageUrl: SalesImage,
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing View',
    description: 'Improve production processes with real-time metrics on equipment effectiveness, quality, and productivity.',
    // detail: 'on equipment effectiveness, quality, and productivity.',
    imageUrl: SupplyChainImage,
  },
];

const Tiles = () => {
  const handleClick = (id) => {
    window.location.href = `/category/${id}/report/`;
    console.log(`Navigating to /category/${id}/report/`);
  };

  // <NavLink
  //                       to={`/category/${name?.toLowerCase()}/report/${report.name}`}
  //                       style={{
  //                         // background: "white",
  //                         borderBottom: "1px solid grey",
  //                         backgroundColor:
  //                           report.id == subcategoryReportSel
  //                             ? "aquamarine"
  //                             : "",
  //                         fontWeight:
  //                           report.id == subcategoryReportSel
  //                             ? "bold"
  //                             : "inherit",
  //                         cursor: "pointer",
  //                         borderRadius: "2px",
  //                       }}
  //                     >
  //                       {report.name}
  //                     </NavLink>
    
  return (
    <div className="wrap">
      {tileData.map((tile) => (
        <NavLink
        to={`/category/${tile?.id?.toLowerCase()}/report/`}
        >
          <div
          key={tile.id}
          className="tile"
          // onClick={() => handleClick(tile.id)}
          style={{ cursor: 'pointer' }}
        >
          <img src={tile.imageUrl} alt={`${tile.name}`} />
          <div className="text">
            <h1>{tile.name}</h1>
            <h2 className="animate-text">{tile.description}</h2>
            <p className="animate-text">{tile.detail}</p>
            <div className="dots">
              <span></span><span></span><span></span>
            </div>
          </div>
        </div>
        </NavLink>
        
      ))}
    </div>
  );
};

export default Tiles;