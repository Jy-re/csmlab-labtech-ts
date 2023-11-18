import React, { useState } from 'react'

import {CgProfile} from 'react-icons/cg'
import { Link } from 'react-router-dom';
import {RxDotFilled} from 'react-icons/rx';

import {GoArrowLeft} from 'react-icons/go'

function ReturnPendingView() {
  const [selectedStatus, setSelectedStatus] = useState('');


//   const handleStatusClick = (status) => {
//     setSelectedStatus(status);
//   };


  const pendingItems = [
    {
      id: 1034,
      date: 'August 19, 2023',
      time: '9:00am',
      status: 'Returning',
      items: 
        [
             {name: 'Pipettes', quantity: 1, breakage: 1},
             {name: 'Petri Dishes', quantity: 6,breakage: 4},
             {name: 'Graduated Cylinder', quantity: 2, breakage: 1},
           
           
        ]

    }
  ]
    
    const studentDetails =[
     {
        idNumber: 201854265,
        name: 'Sofia Dara Alilin',
        Dept: 'BSCHEMISTRY',
        Section: 'CHEM3H2'
        
     }   
    ]
    const membersDetails =[
        {
           idNumber: 2018542654,
           Name: 'Joel Morongot',
       
        },
        {
          idNumber: 2020100768,
          Name: 'Joel Morongot',
      
       },   
       {
        idNumber: 2020100768,
        Name: 'Trissa Saman Asali Mulan Yee',
    
     }   
    ]

    const instructor = [
      {
        idNumber: 2055060541,
        Name: 'Ms. Jerilyn Yare',
      }
    ]

    const labtech = [
      {
        Name: "Prince Kurt Laurence",
      }
    ]

    let totalQuantity = 0;
    pendingItems.forEach((item) => {
      item.items.forEach((borrowedItem) => {
        totalQuantity += borrowedItem.quantity;
      });
    });
   
    
  
//   const acceptedItems = [
//     {
//       id: 1034,
//       date: 'August 19, 2023',
//       time: '9:00am',
//       status: 'Approved'
//     },
//     {
//       id: 1234,
//       date: 'August 19, 2023',
//       time: '9:00am',
//       status: 'Approved'
//     }
    
    
   
//   ]

  return (
    <section className="content">
      {/* Title ni siya */}
      <div className="titleHeader">
        <div className="arrowTitleView">
          <Link to ='/borrowing/pending'>
            <GoArrowLeft className='iconLeftArrow'/>
          </Link>
          <div className="titleName">
            Viewing Transaction
          </div>
        </div>
      </div>

      {/* Body */}
      {pendingItems.map((item) => (
        <div className="transbody">
          <div className="receiptContainer">

            {/* Status Head */}
            <div className='transaction-header'>
              <div className='transaction-header-status-pending'>
                Status: <span>{item.status}</span>
              </div>

              <div className='transaction-view-note'>
                Note: Please wait for the students to come and provide the requested items.
              </div>
            </div>

            {/* White Container */}
            <div className="transactionViewContainer">

              {/* Trans ID */}
              <div className="transactionView-title">
                Transaction ID #<span className='bold-item-id'>{item.id}</span>
              </div>

              {/* Student Details */}
              {studentDetails.map((student) => (
                <div className="firstRow">
                  <div className='viewStudentInfo'>
                    <div className='iconProfileContainer'> 
                      <CgProfile className='iconProfile'/>
                    </div>
                    <div className='student-details'>
                      <div className='student-Name'>
                        {student.name}
                      </div>
                      <div className='student-ID-Dept'>
                        {student.idNumber}-{student.Dept}
                      </div>
                    </div>
                  </div>
                    <div className="sectionContainer">
                      Section: <b>{student.Section}</b>
                    </div>
                </div>
              ))}

              {/* Second Row*/}
              <div className="memInsCont">

                {/* Members */}
                <div className="members">
                  <div className="viewTitleLabel">Members</div>
                  <div className='viewMembersInfo'>
                    {membersDetails.map((member, index)=>(       
                      <div className='viewEachInfo'>
                        <div className='eachIndex'>
                          {index + 1}
                        </div>
                        <div className='eachmemID'>
                          {member.idNumber}
                        </div>
                        <div className='eachmemNAME'>
                          {member.Name}       
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Instructor */}
                <div className="instructor">
                  <div className='viewTitleLabel'>Instructor </div>
                  <div className='viewMembersInfo'>
                    {instructor.map((instructor, index)=>(       
                      <div className='viewEachInfo'>
                        <div className='eachmemNAME'>
                          {instructor.Name}       
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Third Row = Items Selected */}
              <div className='viewTitleLabel'> Selected Items </div>
              <div className='viewItemsSelected'>
                {item.items.map((borrowedItems, index) => (
                  <div className='viewEachInfo' key={index}>
                    <div className='eachIndex'>
                      {index + 1}
                    </div>
                    <div className='eachItemDetails'>
                      {borrowedItems.name}
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x&nbsp;
                      {borrowedItems.quantity}
                    </div>
                  </div>
                ))}
              </div>

              <div className='totalQuantityLabel'>
                <span className='totalText'>Quantity Borrowed:</span>
                &nbsp;&nbsp;
                {totalQuantity}
              </div>

              {/* Last Row Approved by View */}
              <div className="approvedCont">
                <div className='viewTitleLabel'>Approved by: </div>
                <div className='viewMembersInfo'>
                  {instructor.map((instructor, index)=>(       
                    <div className='viewEachInfo'>
                      <ul className='eachmemNAME'>
                        <li>Instructor: <b>{instructor.Name}</b></li>       
                      </ul>
                    </div>
                  ))}
                  {labtech.map((labtech, index)=>(       
                    <div className='viewEachInfo'>
                      <ul className='eachmemNAME'>
                        <li>Lab Technician: <b>{labtech.Name} </b>
                        </li>  
                      </ul>
                    </div>
                  ))}
                </div>
              </div>


              {/* Time and Date Created */}
              <div className='viewDateTime'>
                <div className='viewDate'>
                  {item.date}
                </div>
                <div className='viewTime'>
                  {item.time}
                </div>
              </div>
            </div> 

            {/* buttons */}
            <div className="threeButtonsViewTrans">
              <div className="firstRowButtons">
                <Link to = '/borrowing' className='viewButtonIncidentReport'>
                  Incident Report
                </Link>
                <Link to= "/borrowing/completed" className='viewButtonReturn'>
                  Marked as Returned
                </Link>
              </div>
              <div className="secondRowButtons">
                <Link to = '/borrowing' className='viewButtonCancel'>
                  Cancel
                </Link>
              </div>
              
             
            </div>


          </div>
        </div>
      ))}
      
    </section>

  );
}

export default ReturnPendingView;