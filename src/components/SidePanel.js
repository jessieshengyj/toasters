import "./SidePanel.css";
import { ReactComponent as ToastSvg } from "../icons/a-toast.svg";
import { useState } from "react";

function SidePanel() {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  return (
    <div className="side-panel w-72 overflow-auto fixed">
      <ul className="menu p-4 w-72 min-h-full bg-white text-base-content toast-font">
        <div className="side-panel-header side-panel-title overflow-hidden">
          <span>Toasters</span>
        </div>
        <div className="side-panel-buttons">
          <li>
            <button
              className={`${selectedTabIndex === 0 ? "btn-toast-active" : ""}`}
              onClick={() => setSelectedTabIndex(0)}
            >
              Home
            </button>
          </li>
          <li>
            <button
              className={`${selectedTabIndex === 1 ? "btn-toast-active" : ""}`}
              onClick={() => setSelectedTabIndex(1)}
            >
              My Toasts
            </button>
          </li>
          <figure className="w-10 pt-12">
            <ToastSvg />
          </figure>
        </div>
      </ul>
    </div>
  );
}

export default SidePanel;
