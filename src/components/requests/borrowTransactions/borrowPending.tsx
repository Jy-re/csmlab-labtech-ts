import React, { useState }from 'react';
import {RxDotFilled} from 'react-icons/rx'
import { Link} from 'react-router-dom';
function BorrowingPending() {

  const pendingItems = [
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
    }
    
  ]

  return (
    <div className="optionContainer"> 
    <div
    className="selectedStatusTitle">Pending Approve</div>
    {pendingItems.map((item) => (
     <Link to={`/borrowing/pending/view/${item.id}`}>
      <div className='transactionContainer'>
        <div className='transactionFirstRow'>
          <div>Transaction ID #{item.id} </div>
          <div className='transactionStatusContainer'>
            <div className='statusIconContainer'>  
               <RxDotFilled className='iconPendingChecking'/> </div>
            <div className='itemPendingStatusText'> {item.status}</div>
          </div>
         
        </div>
        <div className='transactionSecondRow'>

          <div className='transactionDate'>
              {item.date}
          </div>
          <div className='transactionDate'>
              {item.time}
          </div>

        </div>
        
        
          <div className='transactionThirdRow'>
            Tap to View

          </div>
     
      </div>
      </Link>
    
    ))}
  </div>
  );
}

export default BorrowingPending;