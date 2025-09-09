import React from 'react';
import { useParams } from 'react-router-dom';

const TrackOrder = () => {
  const { orderId } = useParams();

  return (
    <div className="generic-page">
      <h1>Track Order</h1>
      <p>Tracking details for order #{orderId} will be displayed here.</p>
    </div>
  );
};

export default TrackOrder;
