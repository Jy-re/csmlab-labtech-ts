import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { BsHourglassSplit } from 'react-icons/bs';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { MdCancel } from 'react-icons/md';
import {RxDotFilled} from 'react-icons/rx'

import Pending from '../borrowTransactions/borrowPending';
import Accepted from '../borrowTransactions/borrowAcccepted';
import Rejected from '../borrowTransactions/borrowRejected';

function Borrowing() {
  const [selectedStatus, setSelectedStatus] = useState<string>('pending');
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
        {selectedStatus === 'pending' &&      
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
        }


        {selectedStatus === 'accepted' && 
          <div className="optionContainer"> 
          <div
          className="selectedStatusTitle"> Accepted / Approve </div>
          {acceptedItems.map((item) => (
           <Link to={`/borrowing/accepted/view/${item.id}`}>
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
                
                      <div className='transactionThirdRow'>
                        Tap to View

                      </div>
                 
            </div>
          </Link>
          
          ))}
        </div>
        }
        {selectedStatus === 'rejected' &&
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
        }
        {/* Add similar conditions for 'rejected' status if needed */}
      </div>
    </section>
  );
}

export default Borrowing;
