import React, { useState } from 'react';
import { CgProfile } from 'react-icons/cg';
import { Link } from 'react-router-dom';
import { GoArrowLeft } from 'react-icons/go';

function BorrowTransactionView() {
  const [selectedStatus, setSelectedStatus] = useState('');
  
  const allTransactions = [
    {
      id: 1034,
      date: 'August 19, 2023',
      time: '9:00am',
      status: 'Pending',
      items: 
        [
            {name: 'Pipettes', quantity: 1},
            {name: 'Petri Dishes', quantity: 3},
            {name: 'Graduated Cylinder', quantity: 2},
            {name: 'Volumetric Flask', quantity: 2},
            {name: 'Petri Dishes', quantity: 3},
            {name: 'Graduated Cylinder', quantity: 2},
            {name: 'Volumetric Flask', quantity: 2},
            {name: 'Petri Dishes', quantity: 3},
            {name: 'Graduated Cylinder', quantity: 2},
            {name: 'Volumetric Flask', quantity: 2},
            {name: 'Volumetric Flask', quantity: 2},
            {name: 'Petri Dishes', quantity: 3},
            {name: 'Graduated Cylinder', quantity: 2},
            {name: 'Volumetric Flask', quantity: 2},
            {name: 'Volumetric Flask', quantity: 2},
            {name: 'Petri Dishes', quantity: 3},
            {name: 'Graduated Cylinder', quantity: 2},
            
        ]
,   
    
      studentDetails: {
        idNumber: 201854265,
        name: 'Sofia Dara Alilin',
        Dept: 'BSCHEMISTRY',
      },
      membersDetails: [
        { idNumber: 2018542654, Name: 'Joel Morongot' },
        { idNumber: 2020100768, Name: 'Joel Morongot' },
        { idNumber: 2020100768, Name: 'Trissa Saman Asali Mulan Yee' },
      ],
    },


    {
      id: 1035,
      date: 'August 20, 2023',
      time: '10:00am',
      status: 'Accepted',
      items: 
        [
            {name: 'Pipettes', quantity: 1},
            {name: 'Petri Dishes', quantity: 3},
            {name: 'Graduated Cylinder', quantity: 2},
            {name: 'Volumetric Flask', quantity: 2},
            {name: 'Petri Dishes', quantity: 3},
            {name: 'Graduated Cylinder', quantity: 2},
            {name: 'Volumetric Flask', quantity: 2},
            {name: 'Petri Dishes', quantity: 3},
            {name: 'Graduated Cylinder', quantity: 2},
            {name: 'Volumetric Flask', quantity: 2},
            {name: 'Volumetric Flask', quantity: 2},
            {name: 'Petri Dishes', quantity: 3},
            {name: 'Graduated Cylinder', quantity: 2},
            {name: 'Volumetric Flask', quantity: 2},
            {name: 'Volumetric Flask', quantity: 2},
            {name: 'Petri Dishes', quantity: 3},
            {name: 'Graduated Cylinder', quantity: 2},
            
        ],
      studentDetails: {
        idNumber: 201854265,
        name: 'Sofia Dara Alilin',
        Dept: 'BSCHEMISTRY',
      },
      membersDetails: [
        { idNumber: 2018542654, Name: 'Joel Morongot' },
        { idNumber: 2020100768, Name: 'Joel Morongot' },
        { idNumber: 2020100768, Name: 'Trissa Saman Asali Mulan Yee' },
      ],
    },
    // Add more transactions with different statuses
  ];

 
  const filteredTransactions = selectedStatus
    ? allTransactions.filter((transaction) => transaction.status === selectedStatus)
    : allTransactions;

  let totalQuantity = 0;

  filteredTransactions.forEach((item) => {
    item.items.forEach((borrowedItem) => {
      totalQuantity += borrowedItem.quantity;
    });
  });


  return (
    <section className="content">
      <div className="titleHeader">
        <div className="arrowTitleView">
          <Link to="/borrowing/pending">
            <GoArrowLeft className="iconLeftArrow" />
          </Link>
          <div className="titleName">Viewing Transaction</div>
        </div>
      </div>

      {filteredTransactions.map((item) => (
        <div key={item.id}>
          <div className="transaction-header">
            <div className={`transaction-header-status-${item.status.toLowerCase()}`}>
              Status: <span>{item.status}</span>
            </div>

            {/* Transaction note */}
            {item.status === 'Accepted' && (
              <div className="transaction-view-note">
                Note: Please wait for the students to come and provide the requested items
              </div>
            )}
            {item.status === 'Pending' && (
              <div className="transaction-view-note">
                Note: Review the slip and decide whether to accept or reject
              </div>
            )}
          </div>

          <div className="transactionViewContainer">
            {/* Inside content sa white container */}

            <div className="transactionView-title">
              Transaction ID #{item.id}
            </div>

            {/* ... (other JSX) */}

            {/* Buttons bottom */}
            {item.status === 'Pending' && (
              <div className="darabyue">
                <Link to={`/borrowing/rejected/${item.id}`} className="viewButtonReject">
                  Reject
                </Link>
                <Link to={`/borrowing/accepted/${item.id}`} className="viewButtonAccept">
                  Accept
                </Link>
              </div>
            )}
            {item.status === 'Accepted' && (
              <div className="darabyue">
                <Link to={`/borrowing/rejected/${item.id}`} className="viewButtonReject">
                  Abort
                </Link>
                <Link to={`/borrowing/accepted/${item.id}`} className="viewButtonAccept">
                  Done View
                </Link>
              </div>
            )}
            {item.status === 'Rejected' && (
              <div className="darabyue">
                <Link to="/borrowing/pending" className="viewButtonAccept">
                  Done View
                </Link>
              </div>
            )}
          </div>
        </div>
      ))}
    </section>
  );
}

export default BorrowTransactionView;