import "./SidePanel.css";
import Dashboard from "./Dashboard";
function SidePanel() {
  return (
    <div className="side-panel-left">
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Page content here */}
          {/*<label*/}
          {/*  htmlFor="my-drawer-2"*/}
          {/*  className="btn btn-primary drawer-button lg:hidden"*/}
          {/*>*/}
          {/*  Open drawer*/}
          {/*</label>*/}
          <Dashboard />
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-72 min-h-full bg-white text-base-content toast-font">
            {/* Sidebar content here */}
            <div className="side-panel-header side-panel-title">
              <span>Toasters</span>
            </div>
            <div className="side-panel-buttons">
              <li>
                <button>Home</button>
              </li>
              <li>
                <button>My Toasts</button>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SidePanel;
