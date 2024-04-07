import React, { useEffect, useState } from 'react';

import Navbar from "./Navbar";
import "./Dashboard.css";
import EmployeeHighlights from "./EmployeeHighlights";
import ToastList from "./UserToasts/ToastList";
import CreateToastModal from "./CreateToastModal";
import { getToasts } from '../services/toastService';

function Dashboard() {
  const [toasts, setToasts] = useState([]);
  useEffect(() => {
    const getToastsData = async () => {
      const toasts = await getToasts();
      setToasts(toasts);
    }
    getToastsData();
  }, [])
  console.log(toasts);
  return (
    <div className="toast-dashboard">
      <Navbar />
      <div className="toast-body-container">
        <EmployeeHighlights />
        <div className="btn-option-container">
          <div className="btn-left">
            <button className="btn-new toast-font">New</button>
            <button className="btn-new toast-font">Top Toasts</button>
          </div>
          <div className="btn-right">
            <button className="btn-new toast-font" onClick={() => document.getElementById('make-toast-modal').showModal()}>Make a Toast</button>
            <CreateToastModal />
          </div>
        </div>
        <ToastList toasts={toasts} />
      </div>
    </div>
  );
}

export default Dashboard;
