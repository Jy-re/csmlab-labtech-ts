import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsHourglassSplit } from 'react-icons/bs';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { MdCancel } from 'react-icons/md';
import {RxDotFilled} from 'react-icons/rx'



function Returning() {
  const [selectedStatus, setSelectedStatus] = useState<string>('pending');

  const handleStatusClick = (status: string) => {
    setSelectedStatus(status);
  };



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
  const pendingItems = [
    {
      id: 1034,
      date: 'August 19, 2023',
      time: '9:00am',
      status: 'Returning'
    },
    {
      id: 1022,
      date: 'August 19, 2023',
      time: '9:00am',
      status: 'Returning'
    }
    
  ]


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
        {selectedStatus === 'pending' &&  <div className="optionContainer"> 
            <div
            className="selectedStatusTitle">Pending Approve</div>
            {pendingItems.map((item) => (
            <Link to={`/returning/pending/view/${item.id}`}>
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
        {selectedStatus === 'returned' &&
          <div className="optionContainer"> 
          <div
          className="selectedStatusTitle"> Returned </div>
          {acceptedItems.map((item) => (
          <Link to={`/returning/returned/view/${item.id}`}>
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
      </div>
    </section>
  );
}

export default Returning;
