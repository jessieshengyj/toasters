import "./EmployeeCard.css";
import { ReactComponent as TestSvg } from "../icons/toast-upvote-icon.svg";

function EmployeeCard() {
  return (
    <div className="employee-card-container">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <TestSvg />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title toast-font">Name</h2>
          <div className="card-actions"></div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeCard;
