import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsHourglassSplit } from 'react-icons/bs';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { MdCancel } from 'react-icons/md';
import TransactionItem from '../requests/TapViewTransaction';
import { BiSolidLike } from "react-icons/bi";

function IncidentReport() {
    const [selectedStatus, setSelectedStatus] = useState<string>('pending');

    const allItems = [
        {
          id: 1034,
          date: 'August 19, 2023',
          time: '9:00am',
          status: 'Pending'
        },
        {
          id: 1035,
          date: 'August 19, 2023',
          time: '9:00am',
          status: 'Pending'
        },
        {
          id: 1033,
          date: 'August 19, 2023',
          time: '9:00am',
          status: 'Resolved'
        },
        {
          id: 1032,
          date: 'August 19, 2023',
          time: '9:00am',
          status: 'Resolved'
        },

      ];
    
      const filteredItems = allItems.filter(item => item.status.toLowerCase() === selectedStatus);
    
      const handleStatusClick = (status: string) => {
        setSelectedStatus(status);
      };

    return (
        
        <section className="content">
            <div className="titleHeader">
            <div className='titleName'> Incident Reports </div>
            </div>

            <div className='borrowStatusContainer'>
                <Link
                    to="/incident/pending"
                    className={`borrowMiniContainer ${selectedStatus === 'pending' ? 'selected-item' : ''}`}
                    onClick={() => handleStatusClick('pending')}
                >
                    <div className='borrowIconContainer'>
                    <BsHourglassSplit className='icon' />
                    </div>
                    <div className="borrowStatusTitle">Pending</div>
                </Link>

                <Link
                    to="/incident/resolved"
                    className={`borrowMiniContainer ${selectedStatus === 'resolved' ? 'selected-item' : ''}`}
                    onClick={() => handleStatusClick('resolved')}
                >
                    <div className='borrowIconContainer'>
                    <BiSolidLike className='icon' />
                    </div>
                    <div className="borrowStatusTitle">Resolved</div>
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
                    linkTo={`/incident/${selectedStatus}/view/${item.id}`}
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

export default IncidentReport;