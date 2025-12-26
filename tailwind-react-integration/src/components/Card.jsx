// src/components/Card.jsx
import React from 'react';

const Card = ({ title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition mb-4">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  )
}

export default Card;
