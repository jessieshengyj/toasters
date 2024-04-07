import Navbar from "./Navbar";
import "./Dashboard.css";
import EmployeeHighlights from "./EmployeeHighlights";
import CreateToastModal from "./CreateToastModal";

function Dashboard() {
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
      </div>
    </div>
  );
}

export default Dashboard;
