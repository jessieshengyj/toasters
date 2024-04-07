import "./CreateToastModal.css";
function CreateToastModal() {
  return (
    <dialog id="make-toast-modal" className="modal toast-font">
      <div className="modal-box">
        <h3 className="font-bold text-lg toast-font">Make a Toast! 🍞</h3>
        <div className="modal-body-row">
          <div>
            <div className="label">
              <span className="label-text">Name of toastee</span>
            </div>
            <label className="input input-bordered flex items-center gap-2">
              <input type="text" className="grow" placeholder="Name" />
              {/*<svg*/}
              {/*  xmlns="http://www.w3.org/2000/svg"*/}
              {/*  viewBox="0 0 16 16"*/}
              {/*  fill="currentColor"*/}
              {/*  className="w-4 h-4 opacity-70"*/}
              {/*>*/}
              {/*  <path*/}
              {/*    fillRule="evenodd"*/}
              {/*    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"*/}
              {/*    clipRule="evenodd"*/}
              {/*  />*/}
              {/*</svg>*/}
            </label>
          </div>
          <div>
            <div className="label">
              <span className="label-text">Location of Arc'teryx store</span>
            </div>
            <label className="input input-bordered flex items-center gap-2">
              {/*<svg*/}
              {/*  xmlns="http://www.w3.org/2000/svg"*/}
              {/*  viewBox="0 0 16 16"*/}
              {/*  fill="currentColor"*/}
              {/*  className="w-4 h-4 opacity-70"*/}
              {/*>*/}
              {/*  <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />*/}
              {/*  <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />*/}
              {/*</svg>*/}
              <input type="text" className="grow" placeholder="Location" />
            </label>
          </div>
        </div>
        <div>
          <div className="label">
            <span className="label-text">
              Products recommended by this toastee
            </span>
          </div>
          <label className="input input-bordered flex items-center gap-2">
            {/*<svg*/}
            {/*  xmlns="http://www.w3.org/2000/svg"*/}
            {/*  viewBox="0 0 16 16"*/}
            {/*  fill="currentColor"*/}
            {/*  className="w-4 h-4 opacity-70"*/}
            {/*>*/}
            {/*  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />*/}
            {/*</svg>*/}
            <input type="text" className="grow" />
          </label>
        </div>
        <div>
          <div className="label">
            <span className="label-text">
              Why the toastee deserves a toast:
            </span>
          </div>
          <label className="input input-bordered flex items-center gap-2">
            {/*<svg*/}
            {/*    xmlns="http://www.w3.org/2000/svg"*/}
            {/*    viewBox="0 0 16 16"*/}
            {/*    fill="currentColor"*/}
            {/*    className="w-4 h-4 opacity-70"*/}
            {/*>*/}
            {/*  <path*/}
            {/*      d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z"/>*/}
            {/*</svg>*/}
            <input type="text" className="grow" />
          </label>
        </div>
        <div className="modal-action justify-between">
          <form method="dialog">
            <button className="btn-new h-10">Close</button>
          </form>
          <button className="btn-new h-10">Give a toast!</button>
        </div>
      </div>
    </dialog>
  );
}

export default CreateToastModal;
