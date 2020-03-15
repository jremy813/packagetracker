import React from "react";
import "./ordertracker-component.css";

function Tracker(props) {
  return (
    <div className="Tracker">
      <div id="header1">
        <div>
          <h2>Out for deliv</h2>
          <span>Expected Delivery: {props.date}</span>
        </div>
        <div>{props.status}</div>
      </div>
      <div id="ordertracker">
        <ol class="progtrckr" data-progtrckr-steps="5">
          <li class="progtrckr-done">Order Processing</li>
          <li class="progtrckr-done">Pre-Production</li>
          <li class="progtrckr-done">In Production</li>
          <li class="progtrckr-todo">Shipped</li>
          <li class="progtrckr-todo">Delivered</li>
        </ol>
      </div>
      <div id="trackingdetails"></div>
    </div>
  );
}

export default Tracker;
