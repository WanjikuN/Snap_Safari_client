import React from "react";

const BounceLoader = () => {
  return (
    <div className="bounce-loader">
      <div className="loader">
        <span></span>
        <span className="delay-200"></span>
        <span className="delay-400"></span>
      </div>
      {/* <p>Please Wait...</p> */}
    </div>
  );
};

export default BounceLoader;
