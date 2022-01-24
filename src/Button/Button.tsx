import React from "react";
import "./Button.css";
export default class Main extends React.Component {
  render(): React.ReactNode {
    return (
      <div className="side-by-side-item">
        <button className="call-to-action">Call To Action</button>
      </div>
    );
  }
}
