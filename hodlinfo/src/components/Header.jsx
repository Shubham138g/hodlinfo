import React from "react";

function Header() {
  return (
    <>
      <div className="container-fluid">
        <div>
          <p className=" best_price_color base_font">Best Price to Trade</p>
        </div>
      </div>
      <div className="container ">
        <div className="row d-flex justify-content-around  align-items-center">
          <div className="col-2 size">
            <h1 className="base_color ">0.3 %</h1>
            <p className="text-light fs-5 trans_color">5 Mins</p>
            <p></p>
          </div>
          <div className="col-2 size">
            <h1 className="base_color">0.39 %</h1>
            <p className="text-light fs-5 trans_color">1 Hour</p>
          </div>
          <div className="col-4 size">
            <p className="text-light price_size  ">₹ 57,81,133</p>
            
          </div>
          <div className="col-2 size">
            <h1 className="base_color">1.5 %</h1>
            <p className="text-light fs-5 trans_color">1 Day</p>
            
          </div>
          <div className="col-2 size">
            <h1 className="base_color">3.01 %</h1>
            <p className="text-light fs-5 trans_color">7 Days</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
