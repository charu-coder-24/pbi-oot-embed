import React from 'react';
import './Tiles.css'; // Ensure the CSS file path is correct

const Tiles = () => {
  const handleClick = (name) => {
    window.location.href = `/category/${name}/report/`; // Replace with the desired URL
    console.log(window.location.hostname)
  };
  return (
    <>
    <div className="wrap">
      <div className="tile" onClick={() => handleClick()} style={{cursor:"pointer"}}>
        <img 
          src="https://images.unsplash.com/photo-1562564055-71e051d33c19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" 
          alt="Executive View" 
        />
        <div className="text">
          <h1>Executive View</h1>
          <h2 className="animate-text">A top-level dashboard for decision makers.</h2>
          <p className="animate-text">Consolidate data for actionable insights.</p>
          <div className="dots">
            <span></span><span></span><span></span>
          </div>
        </div>
      </div>

      <div className="tile" onClick={() => handleClick("finance")} style={{cursor:"pointer"}}>
        <img 
          src="https://images.unsplash.com/photo-1521540216272-a50305cd4421?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" 
          alt="Finance View" 
        />
        <div className="text">
          <h1>Finance View</h1>
          <h2 className="animate-text">Get insights into financial performance.</h2>
          <p className="animate-text">Analyze P&L statements, expenses, and profitability.</p>
          <div className="dots">
            <span></span><span></span><span></span>
          </div>
        </div>
      </div>

      <div className="tile" onClick={() => handleClick("sales")} style={{cursor:"pointer"}}>
        <img 
          src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="Sales View" 
        />
        <div className="text">
          <h1>Sales View</h1>
          <h2 className="animate-text">Track key sales metrics.</h2>
          <p className="animate-text">Monitor Net Sales, Gross Margin, and customer growth.</p>
          <div className="dots">
            <span></span><span></span><span></span>
          </div>
        </div>
      </div>

      <div className="tile" onClick={() => handleClick("marketting")} style={{cursor:"pointer"}}>
        <img 
          src="https://images.unsplash.com/photo-1501523460185-2aa5d2a0f981?q=80&w=1862&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="Marketing View" 
        />
        <div className="text">
          <h1>Marketing View</h1>
          <h2 className="animate-text">Assess product and campaign performance.</h2>
          <p className="animate-text">Analyze product growth, campaign effectiveness, and ROI.</p>
          <div className="dots">
            <span></span><span></span><span></span>
          </div>
        </div>
      </div>

      <div className="tile" onClick={() => handleClick("supply-chain")} style={{cursor:"pointer"}}>
        <img 
          src="https://images.unsplash.com/photo-1627309366653-2dedc084cdf1?q=80&w=1966&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="Supply Chain View" 
        />
        <div className="text">
          <h1>Supply Chain View</h1>
          <h2 className="animate-text">Optimize your supply chain operations.</h2>
          <p className="animate-text">Forecast accuracy, manage risks, and improve efficiency.</p>
          <div className="dots">
            <span></span><span></span><span></span>
          </div>
        </div>
        </div>

        <div className="tile" onClick={() => handleClick("manufacturing")} style={{cursor:"pointer"}}>
        <img 
          src="https://images.unsplash.com/photo-1627309366653-2dedc084cdf1?q=80&w=1966&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="Manufacturing View" 
        />
        <div className="text">
          <h1>Manufacturing View</h1>
          <h2 className="animate-text">Optimize your supply chain operations.</h2>
          <p className="animate-text">Forecast accuracy, manage risks, and improve efficiency.</p>
          <div className="dots">
            <span></span><span></span><span></span>
          </div>
        </div>
        </div>
    </div>
    {/* <div className="grid">
   
      </div> */}
    </>
    
  );
};

export default Tiles;
