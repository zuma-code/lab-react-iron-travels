import React, { useState, useEffect } from 'react';
import travelPlansData from "../assets/travel-plans.json";

const TravelList = () => {
  const [travelPlans, setTravelPlans] = useState([]);

  // Load the data into the state
  useEffect(() => {
    setTravelPlans(travelPlansData);
  }, []);

  // Function to determine the label based on total cost
  const getLabel = (totalCost) => {
    if (totalCost <= 350) {
      return "Great Deal";
    } else if (totalCost >= 1500) {
      return "Premium";
    }
    return null;
  };

  // Dynamic styles for "Great Deal" button
  const greatDealButtonStyles = {
    backgroundColor: 'green',
    color: 'black',
    border: 'none',
    padding: '8px 12px',
    marginTop: '10px',
    cursor: 'pointer',
    borderRadius: '5px',
    fontSize: '14px'
  };

  // Dynamic styles for "Premium" button
  const premiumButtonStyles = {
    backgroundColor: 'blue',
    color: 'white', 
    border: 'none',
    padding: '8px 12px',
    marginTop: '10px',
    cursor: 'pointer',
    borderRadius: '5px',
    fontSize: '14px'
  };

  // Styles for the "All Inclusive" button
  const allInclusiveButtonStyles = {
    backgroundColor: 'blue',
    color: 'white',
    border: 'none',
    padding: '8px 12px',
    marginTop: '10px',
    cursor: 'pointer',
    borderRadius: '5px',
    fontSize: '14px'
  };

  return (
    <div className="travel-list">
      {travelPlans.map((plan) => (
        <div key={plan.id} className="travel-card">
          <div className="card-image">
            <img src={plan.image} alt={plan.destination} />
          </div>
          <div className="card-content">
            <h3>{plan.destination} ({plan.days} days)</h3>
            <p>{plan.description}</p>
            <p><strong>Price: ${plan.totalCost}</strong></p>

            {/* Render the "Great Deal" button */}
            {getLabel(plan.totalCost) === "Great Deal" && (
              <button style={greatDealButtonStyles}>Great Deal</button>
            )}

            {/* Render the "Premium" button */}
            {getLabel(plan.totalCost) === "Premium" && (
              <button style={premiumButtonStyles}>Premium</button>
            )}

            {/* Render the "All Inclusive" button if applicable */}
            {plan.allInclusive && (
              <button style={allInclusiveButtonStyles}>All Inclusive</button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TravelList;
