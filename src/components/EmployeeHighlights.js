import "./EmployeeHighlights.css";
import EmployeeCard from "./EmployeeCard";
function EmployeeHighlights() {
  return (
    <div className="toast-employee-highlights">
      <div className="employee-highlights-container">
        <span className="employee-highlights-title toast-font">
          Employee Highlights
        </span>
        <EmployeeCard />
      </div>
    </div>
  );
}

export default EmployeeHighlights;
