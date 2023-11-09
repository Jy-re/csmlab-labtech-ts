import React, { useState }from 'react';
import {RxDotFilled} from 'react-icons/rx'
import { Link } from 'react-router-dom';


function BorrowingRejected() {

  const rejectedItems = [
    {
      id: 1034,
      date: 'August 19, 2023',
      time: '9:00am',
      status: 'Rejected'
    },
    {
      id: 1234,
      date: 'August 19, 2023',
      time: '9:00am',
      status: 'Rejected'
    }
  ]
  return (
 
    <div className="optionContainer"> 
    <div
    className="selectedStatusTitle">Rejected</div>
    {rejectedItems.map((item) => (
     <Link to={`/borrowing/rejected/view/${item.id}`}>
      <div className='transactionContainer'>
        <div className='transactionFirstRow'>
          <div>Transaction ID #{item.id} </div>
          <div className='transactionStatusContainer'>
            <div className='statusIconContainer'>  
               <RxDotFilled className='iconRejected'/> </div>
            <div className='itemRejectedStatusText'> {item.status}</div>
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
          )}
 

export default BorrowingRejected;