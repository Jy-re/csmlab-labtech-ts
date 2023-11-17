import { defaultMaxListeners } from 'events';
import React from 'react';
import { useParams } from 'react-router-dom';

interface Item {
  id: number;
  date: string;
  time: string;
  status: string;
}

interface TransactionItemViewProps {
  item: Item;
}

const TransactionItemView: React.FC<TransactionItemViewProps> = ({ item }) => {
  return (
    <div>
      <h2>Transaction Item Details</h2>
      <p>ID: {item.id}</p>
      <p>Date: {item.date}</p>
      <p>Time: {item.time}</p>
      <p>Status: {item.status}</p>
      {/* Display other item details */}
    </div>
  );
};
export default TransactionItemView;