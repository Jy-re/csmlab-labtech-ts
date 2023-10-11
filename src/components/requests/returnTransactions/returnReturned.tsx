import React, { useState }from 'react';
import {RxDotFilled} from 'react-icons/rx'
import { Link } from 'react-router-dom';


function ReturningReturn() {
 
    const acceptedItems = [
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
          status: 'Approved'
        }
        
        
       
      ]

  return (
    <div className="optionContainer"> 
    <div
    className="selectedStatusTitle"> Returned </div>
    {acceptedItems.map((item) => (
   
      <div className='transactionContainer'>
        <div className='transactionFirstRow'>
          <div>Transaction ID #{item.id} </div>
          <div className='transactionStatusContainer'>
            <div className='statusIconContainer'>  
               <RxDotFilled className='iconApprove'/> </div>
            <div className='itemApproveStatusText'> {item.status}</div>
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
        <Link to={`/returning/returned/view/${item.id}`}>
          <div className='transactionThirdRow'>
            Tap to View

          </div>
      </Link>
      </div>
    
    ))}
  </div>
  );
}

export default ReturningReturn;