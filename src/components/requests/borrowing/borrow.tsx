import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsHourglassSplit } from 'react-icons/bs';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { MdCancel } from 'react-icons/md';
import TransactionItem from '../TapViewTransaction';
import { BiSolidLike } from "react-icons/bi";

function Borrowing() {
  const [selectedStatus, setSelectedStatus] = useState<string>('pending');

  const allItems = [
    {
      id: 1034,
      date: 'August 19, 2023',
      time: '9:00am',
      status: 'Approved'
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
      status: 'Completed'
    },
    {
      id: 1035,
      date: 'August 19, 2023',
      time: '9:00am',
      status: 'Returning'
    },
    {
      id: 1035,
      date: 'August 19, 2023',
      time: '9:00am',
      status: 'Rejected'
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

  const filteredItems = allItems.filter(item => item.status === selectedStatus);

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
          className={`borrowMiniContainer ${selectedStatus === 'Pending' ? 'selected-item' : ''}`}
          onClick={() => handleStatusClick('Pending')}
        >
          <div className='borrowIconContainer'>
            <BsHourglassSplit className='icon' />
          </div>
          <div className="borrowStatusTitle">Pending Approve</div>
        </Link>

        <Link
          to="/borrowing/accepted"
          className={`borrowMiniContainer ${selectedStatus === 'Approved' ? 'selected-item' : ''}`}
          onClick={() => handleStatusClick('Approved')}
        >
          <div className='borrowIconContainer'>
            <BiSolidLike className='icon' />
          </div>
          <div className="borrowStatusTitle">Accepted</div>
        </Link>

        <Link
          to="/borrowing/returning"
          className={`borrowMiniContainer ${selectedStatus === 'Returning' ? 'selected-item' : ''}`}
          onClick={() => handleStatusClick('Returning')}
        >
          <div className='borrowIconContainer'>
            <BsHourglassSplit className='icon' />
          </div>
          <div className="borrowStatusTitle">Pending Return</div>
        </Link>

        <Link
          to="/borrowing/completed"
          className={`borrowMiniContainer ${selectedStatus === 'Completed' ? 'selected-item' : ''}`}
          onClick={() => handleStatusClick('Completed')}
        >
          <div className='borrowIconContainer'>
            <BsFillCheckCircleFill className='icon' />
          </div>
          <div className="borrowStatusTitle">Completed</div>
        </Link>


        <Link
          to="/borrowing/rejected"
          className={`borrowMiniContainer ${selectedStatus === 'Rejected' ? 'selected-item' : ''}`}
          onClick={() => handleStatusClick('Rejected')}
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
