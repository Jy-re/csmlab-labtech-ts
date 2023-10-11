import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { BsHourglassSplit } from 'react-icons/bs';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { MdCancel } from 'react-icons/md';

import Pending from '../borrowTransactions/borrowPending';
import Accepted from '../borrowTransactions/borrowAcccepted';
import Rejected from '../borrowTransactions/borrowRejected';

function Borrowing() {
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
          to="/borrowing/pending"
          className={`borrowMiniContainer ${selectedStatus === 'pending' ? 'selected-item' : ''}`}
          onClick={() => handleStatusClick('pending')}
        >
          <div className='borrowIconContainer'>
            <BsHourglassSplit className='icon' />
          </div>
          <div className="borrowStatusTitle">Pending Approve</div>
        </Link>

        <Link
          to="/borrowing/accepted"
          className={`borrowMiniContainer ${selectedStatus === 'accepted' ? 'selected-item' : ''}`}
          onClick={() => handleStatusClick('accepted')}
        >
          <div className='borrowIconContainer'>
            <BsFillCheckCircleFill className='icon' />
          </div>
          <div className="borrowStatusTitle">Accepted</div>
        </Link>

        <Link
          to="/borrowing/rejected"
          className={`borrowMiniContainer ${selectedStatus === 'rejected' ? 'selected-item' : ''}`}
          onClick={() => handleStatusClick('rejected')}
        >
          <div className='borrowIconContainer'>
            <MdCancel className='icon' />
          </div>
          <div className="borrowStatusTitle">Rejected</div>
        </Link>
        {/* Add similar links for 'rejected' status if needed */}
      </div>

      <div className="selectedStatusContainer">
        {selectedStatus === 'pending' && <Pending />}
        {selectedStatus === 'accepted' && <Accepted />}
        {selectedStatus === 'rejected' && <Rejected />}
        {/* Add similar conditions for 'rejected' status if needed */}
      </div>
    </section>
  );
}

export default Borrowing;
