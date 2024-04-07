import Dashboard from "./Dashboard";
import SidePanel from "./SidePanel";
import {useEffect, useState} from "react";

function PageLayout() {
  const [tabIndex, setTabIndex] = useState(0);

    useEffect(() => {
        console.log('tab index', tabIndex)
    }, [tabIndex]);

  return (
    <>
      <SidePanel setSelectedTab={(index) => setTabIndex(index)} />
      <Dashboard tabIndex={tabIndex} />
    </>
    // <div className="side-panel-left overflow-hidden">
    //   <div className="drawer lg:drawer-open overflow-hidden">
    //     <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
    //     <div className="drawer-content flex flex-col">
    //       {/* Page content here */}
    //       {/*<label*/}
    //       {/*  htmlFor="my-drawer-2"*/}
    //       {/*  className="btn btn-primary drawer-button lg:hidden"*/}
    //       {/*>*/}
    //       {/*  Open drawer*/}
    //       {/*</label>*/}
    //       <Dashboard />
    //     </div>
    //     <div className="drawer-side hide">
    //       <label
    //         htmlFor="my-drawer-2"
    //         aria-label="close sidebar"
    //         className="drawer-overlay"
    //       ></label>
    //       <ul className="menu p-4 w-72 min-h-full bg-white text-base-content toast-font">
    //         {/* Sidebar content here */}
    //         <div className="side-panel-header side-panel-title overflow-hidden">
    //           <span>Toasters</span>
    //         </div>
    //         <div className="side-panel-buttons">
    //           <li>
    //             <button>Home</button>
    //           </li>
    //           <li>
    //             <button>My Toasts</button>
    //           </li>
    //           <figure className="w-10 pt-12">
    //             <ToastSvg />
    //           </figure>
    //         </div>
    //       </ul>
    //     </div>
    //   </div>
    // </div>
  );
}

export default PageLayout;
