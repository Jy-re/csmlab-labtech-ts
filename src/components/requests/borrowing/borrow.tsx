import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsHourglassSplit } from 'react-icons/bs';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { MdCancel } from 'react-icons/md';
import TransactionItem from '../TapViewTransaction';

function Borrowing() {
  const [selectedStatus, setSelectedStatus] = useState<string>('pending');

  const allItems = [
    {
      id: 1034,
      date: 'August 19, 2023',
      time: '9:00am',
      status: 'Pending'
    },
    {
      id: 1234,
      date: 'August 19, 2023',
      time: '9:00am',
      status: 'Pending'
    },
    {
      id: 1035,
      date: 'August 19, 2023',
      time: '9:00am',
      status: 'Approved'
    },
    {
      id: 1235,
      date: 'August 19, 2023',
      time: '9:00am',
      status: 'Approved'
    },
    {
      id: 1036,
      date: 'August 19, 2023',
      time: '9:00am',
      status: 'Rejected'
    },
  ];

  const filteredItems = allItems.filter(item => item.status.toLowerCase() === selectedStatus);

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
          className={`borrowMiniContainer ${selectedStatus === 'approved' ? 'selected-item' : ''}`}
          onClick={() => handleStatusClick('approved')}
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
      </div>

      <div className="selectedStatusContainer">
        <div className="optionContainer">
          <div className="selectedStatusTitle">{selectedStatus.charAt(0).toUpperCase() + selectedStatus.slice(1)}</div>
          {filteredItems.map((item) => {
          console.log("Selected Status in Borrowing component:", selectedStatus);
          return (
            <TransactionItem
              key={item.id}
              item={item}
              linkTo={`/borrowing/${selectedStatus}/view/${item.id}`}
              statusIcon={`icon${selectedStatus.charAt(0).toUpperCase() + selectedStatus.slice(1)}`}
              statusText={`item${selectedStatus.charAt(0).toUpperCase() + selectedStatus.slice(1)}StatusText`}
             

            />
          );
        })}
        </div>
      </div>

  

    </section>
  );
}

export default Borrowing;
