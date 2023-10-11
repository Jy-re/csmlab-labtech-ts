import React, { useState }from 'react';
import {RxDotFilled} from 'react-icons/rx'
import { Link } from 'react-router-dom';


function breakagePending() {
 
    const pendingItems = [
        {
          id: 1034,
          date: 'August 19, 2023',
          time: '9:00am',
          status: 'Replacing'
        },
        {
          id: 1234,
          date: 'August 19, 2023',
          time: '9:00am',
          status: 'Replacing'
        }
        
        
       
      ]

  return (
   <div className="optionContainer"> 
              <div
              className="selectedStatusTitle"> Replacement Requests </div>
              {pendingItems.map((item) => (
             
                <div className='transactionContainer'>
                  <div className='transactionFirstRow'>
                    <div>Transaction ID #{item.id} </div>
                    <div className='transactionStatusContainer'>
                      <div className='statusIconContainer'>  
                         <RxDotFilled className='iconPending'/> </div>
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
                  <Link to={`/breakage/pending/view/${item.id}`}>
                    <div className='transactionThirdRow'>
                      Tap to View

                    </div>
                </Link>
                </div>
              
              ))}
            </div>
  );
}

export default breakagePending;