import Navbar from "./Navbar";
import "./Dashboard.css";
import EmployeeHighlights from "./EmployeeHighlights";
import ToastList from "./UserToasts/ToastList";

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
        <ToastList />
      </div>
    </div>
  );
}

export default Dashboard;
