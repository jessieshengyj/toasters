import "./Navbar.css";
function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl toast-font dashboard-title">
          Dashboard
        </a>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              {/*<svg*/}
              {/*    xmlns="http://www.w3.org/2000/svg"*/}
              {/*    className="h-5 w-5"*/}
              {/*    fill="none"*/}
              {/*    viewBox="0 0 24 24"*/}
              {/*    stroke="currentColor"*/}
              {/*>*/}
              {/*  <path*/}
              {/*      strokeLinecap="round"*/}
              {/*      strokeLinejoin="round"*/}
              {/*      strokeWidth="2"*/}
              {/*      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"*/}
              {/*  />*/}
              {/*</svg>*/}
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xlinkHref="http://www.w3.org/1999/xlink"
              >
                <rect width="25" height="25" fill="url(#pattern0_71_3)" />
                <defs>
                  <pattern
                    id="pattern0_71_3"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use
                      xlinkHref="#image0_71_3"
                      transform="scale(0.00195312)"
                    />
                  </pattern>
                  <image
                    id="image0_71_3"
                    width="512"
                    height="512"
                    xlinkHref="data:image/png;base64,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"
                  />
                </defs>
              </svg>

              <span className="badge badge-sm indicator-item">8</span>
            </div>
          </div>
          <div
            tabIndex={0}
            className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
          >
            <div className="card-body">
              <span className="font-bold text-lg">8 Items</span>
              <span className="text-info">Subtotal: $999</span>
              <div className="card-actions">
                <button className="btn btn-primary btn-block">View cart</button>
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
