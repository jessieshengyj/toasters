import Navbar from "./Navbar";
import "./Dashboard.css";
import EmployeeHighlights from "./EmployeeHighlights";

function Dashboard() {
  return (
    <div className="toast-dashboard">
      <Navbar />
      <div className="toast-body-container">
        <EmployeeHighlights />
          <div>
              <button className="btn-new toast-font">New</button>
              <button className="btn-new toast-font">Top Toasts</button>
              <button className="btn-new toast-font">Make a Toast</button>
          </div>
      </div>
    </div>
  );
}

export default Dashboard;
