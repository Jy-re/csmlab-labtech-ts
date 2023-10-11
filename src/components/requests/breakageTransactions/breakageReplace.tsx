import React, { useState }from 'react';
import {RxDotFilled} from 'react-icons/rx'

import { Link } from 'react-router-dom';

function Replaced() {
 
    const pendingItems = [
        {
          id: 1034,
          date: 'August 19, 2023',
          time: '9:00am',
          status: 'Replaced'
        },
        {
          id: 1234,
          date: 'August 19, 2023',
          time: '9:00am',
          status: 'Replaced'
        }
        
        
       
      ]

  return (
   <div className="optionContainer"> 
              <div
              className="selectedStatusTitle">Replaced</div>
            
            </div>
  );
}

export default Replaced;