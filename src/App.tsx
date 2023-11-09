import React from 'react';
import './App.css';

/* manage requests*/
import Borrowing from './components/requests/borrowing/borrow';
import Returning from './components/requests/returning/return';
import Breakage from './components/requests/breakage/breakage';

/*tap to view*/
import BorrowPendingView from './components/transactions/borrowingView/borrowPendingView';
import BorrowAcceptedView from './components/transactions/borrowingView/borrowAcceptedView'
import BorrowRejectedView from './components/transactions/borrowingView/borrowRejectedView';

import ReturnPendingView from './components/transactions/returningView/returnPendingView';
import ReturnReturnedView from './components/transactions/returningView/returnReturnedView';

import BreakageListView from './components/transactions/breakageView/breakageListView';
import BreakagePendingView from './components/transactions/breakageView/breakagePendingView';


import Dashboard from './components/dashboard/dashboard';

import Glassware from './components/inventory/glassware';
import Miscellaneous from './components/inventory/miscellaneous';
import Other from './components/inventory/other';
import AddItem from './components/inventory/additem';
import EditItem from './components/inventory/edititem';
import Login from './components/login/Login';
import NavHeaderVisibility from './components/login/loginisolate';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import useLocation


function App() {


  return (
    <Router> {/* Wrap your entire app with the Router */}
    
      <div className="App">

         

          <NavHeaderVisibility />

        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
         {/* manage request */}
          <Route path="/borrowing/pending" element={<Borrowing />} />
          <Route path="/borrowing/accepted" element={<Borrowing />} />
          <Route path="/borrowing/rejected" element={<Borrowing />} />
          <Route path="/returning/pending" element={<Returning />} />
          <Route path="/returning/returned" element={<Returning />} />
          <Route path="/returning/pending" element={<Returning/> } />
          <Route path="/breakage/list" element={<Breakage />} />
          <Route path="/breakage/pending" element={<Breakage />} />
          <Route path="/breakage/replaced" element={<Breakage/> } />
          {/* manage request views */}
          <Route path ="/borrowing/pending/view/:id" element={<BorrowPendingView/> } />
          <Route path ="/borrowing/accepted/view/:id" element={<BorrowAcceptedView/>} />
          <Route path ="/borrowing/rejected/view/:id" element={<BorrowRejectedView/>} />
          
          <Route path ="/returning/pending/view/:id" element={<ReturnPendingView/> } />
          <Route path ="/returning/returned/view/:id" element={<ReturnReturnedView/> } />

          <Route path ="/breakage/list/view/:id" element={<BreakageListView/> } />
          <Route path ="/breakage/pending/view/:id" element={<BreakagePendingView/> } />
          <Route path="/inventory" element={<Glassware />} />
          <Route path="/glassware" element={<Glassware />} />
          <Route path="/miscellaneous" element={<Miscellaneous />} />
          <Route path="/other" element={<Other />} />
          <Route path='add-item' element={<AddItem />} />
          <Route path="/edit/:id" element={<EditItem />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;