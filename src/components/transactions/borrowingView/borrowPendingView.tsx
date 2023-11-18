import React, { useState } from 'react';
import {CgProfile} from 'react-icons/cg'
import { Link } from 'react-router-dom';



import {GoArrowLeft} from 'react-icons/go'
function BorrowPendingView() {
  const [selectedStatus, setSelectedStatus] = useState('');


//   const handleStatusClick = (status) => {
//     setSelectedStatus(status);
//   };


  const pendingItems = [
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
      <div className="titleHeader">
      <div className='arrowTitleView'>
          <Link to ='/borrowing/pending'>
             <GoArrowLeft className='iconLeftArrow'/>
            </Link>
          <div className='titleName'> 
          Viewing Transaction 
          </div>
        </div>
      </div>


      {pendingItems.map((item) => (
        <div key={item.id} className="transbody">
          <div className="receiptContainer">
            <div className='transaction-header'>
              <div className='transaction-header-status-pending'>
                Status: <span>{item.status}</span>
              </div>

              <div className='transaction-view-note'>
                Note: Review the slip and decide whether to accept or reject.
              </div>
            </div>

            {/* inside content sa white container */}
            <div className='transactionViewContainer'>

              <div className='transactionView-title'>
                Transaction ID #<span className='bold-item-id'>{item.id}</span>
              </div>

              {/* --student items */}
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

              {/* --members view       */}
              <div className="memInsCont">
                <div className="members">
                <div className='viewTitleLabel'>Members </div>
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
              


                  {/* --selected view */}
                  <div className='viewTitleLabel'> Selected Items </div>
                  <div className='viewItemsSelected'>
                      {item.items.map((borrowedItems, index) => (
                          <div className='viewEachInfo' key={index}>
                              <div className='eachIndex'>
                                  {index + 1}
                              </div>
                              <div className='eachItemDetails'>
                                  {borrowedItems.name}
                              </div>
                          </div>
                      ))}
                  </div>

                <div className='totalQuantityLabel'>
                  <span className='totalText'>Quantity Borrowed:</span>
                  &nbsp;&nbsp;
                  {totalQuantity}
                </div>

                {/* Approved by View */}
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
                          <li>Lab Technician: 
                            {/* <b>{labtech.Name} </b> */}
                          </li>  
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
                
                        

                <div className='viewDateTime'>
                    <div className='viewDate'>
                        {item.date}
                    </div>
                    <div className='viewTime'>
                        {item.time}
                    </div>
                </div>

              
                

            </div> 
              <div className='darabyue'>
                    <Link to = '/borrowing/rejected' className='viewButtonReject'>
                        Reject
                    </Link>
                    <Link to= "/borrowing/accepted" className='viewButtonAccept'>
                        Accept
                    </Link>

              </div>
          </div>
        </div>

            
            
            

      ))}
    </section>
  );
}

export default BorrowPendingView;