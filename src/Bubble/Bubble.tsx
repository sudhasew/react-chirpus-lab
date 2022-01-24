import React from "react";
import "./Bubble.css";
export default class Main extends React.Component {
  render(): React.ReactNode {
    return (
      <div className="side-by-side-item">
        <div className="container">
          <div className="small"></div>
          <div className="medium"></div>
          <div className="large"></div>
        </div>
      </div>
    );
  }
}
