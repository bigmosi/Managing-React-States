import React from "react";
import { BallTriangle } from  'react-loader-spinner';

export default function Spinner() {
  return (
    <div className="lds-container">
      {/*<div className="lds-dual-ring"></div>*/}
        <BallTriangle color="#00BFFF" height={80} width={80} />
    </div>
  );
}
