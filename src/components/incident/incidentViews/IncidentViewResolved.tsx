import React, { useState } from 'react';
import {CgProfile} from 'react-icons/cg'
import { Link } from 'react-router-dom';



import {GoArrowLeft} from 'react-icons/go'
function IncidentResolvedView() {
  const [selectedStatus, setSelectedStatus] = useState('');


//   const handleStatusClick = (status) => {
//     setSelectedStatus(status);
//   };


  const pendingItems = [
    {
      id: 1034,
      date: 'August 19, 2023',
      time: '9:00am',
      status: 'Resolved',
      items: 
        [
             {name: 'Pipettes', condition: 'Replaced'},
             {name: 'Petri Dishes', condition: 'Reimbrused'},
             {name: 'Graduated Cylinder', condition: 'Replaced'},
             {name: 'Volumetric Flask', condition: 'Reimbrused'},
             {name: 'Petri Dishes', condition: 'Replaced'},
           
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
          <Link to ='/incident/pending'>
             <GoArrowLeft className='iconLeftArrow'/>
            </Link>
          <div className='titleName'> 
          Viewing Resolved Incident
          </div>
        </div>
      </div>


      {pendingItems.map((item) => (
        <div key={item.id} className="transbody">
          <div className="receiptContainer">
            <div className='transaction-header'>
              <div className='transaction-header-status'>
                Status: <span>{item.status}</span>
              </div>

            </div>

            {/* inside content sa white container */}
            <div className='transactionViewContainer'>

              <div className='transactionView-title'>
                Incident ID #<span className='bold-item-id'>{item.id}</span>
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
              <div className="memInsContIn">
                <div className="membersIn">
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
                              <div className="statusResolved">
                                <p className='status-condition'>{borrowedItems.condition}</p>
                              </div>
                          </div>
                      ))}
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
                    <Link to = '/incident/pending' className='viewButtonReject'>
                        Reject
                    </Link>
                    <Link to= "/incident/pending" className='viewButtonAcceptPending'>
                        Done View
                    </Link>

              </div>
          </div>
        </div>

            
            
            

      ))}
    </section>
  );
}

export default IncidentResolvedView;