import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsHourglassSplit } from 'react-icons/bs';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { MdCancel } from 'react-icons/md';

import Pending from '../returnTransactions/returnPending';
import Return from '../returnTransactions/returnReturned';

function Returning() {
  const [selectedStatus, setSelectedStatus] = useState<string>('pending');

  const handleStatusClick = (status: string) => {
    setSelectedStatus(status);
  };

  return (
    <section className="content">
      <div className="titleHeader">
        <div className='titleName'> Manage Requests </div>
      </div>

      <div className='borrowStatusContainer'>
        <Link
          to="/returning/pending"
          className={`borrowMiniContainer ${selectedStatus === 'pending' ? 'selected-item' : ''}`}
          onClick={() => handleStatusClick('pending')}
        >
          <div className='borrowIconContainer'>
            <BsHourglassSplit className='icon' />
          </div>
          <div className="borrowStatusTitle">Pending Approve</div>
        </Link>

        <Link
          to="/returning/returned"
          className={`borrowMiniContainer ${selectedStatus === 'returned' ? 'selected-item' : ''}`}
          onClick={() => handleStatusClick('returned')}
        >
          <div className='borrowIconContainer'>
            <BsFillCheckCircleFill className='icon' />
          </div>
          <div className="borrowStatusTitle">Returned</div>
        </Link>
      </div>

      <div className="selectedStatusContainer">
        {selectedStatus === 'pending' && <Pending />}
        {selectedStatus === 'returned' && <Return />}
      </div>
    </section>
  );
}

export default Returning;
