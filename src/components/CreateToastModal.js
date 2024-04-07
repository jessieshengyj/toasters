import "./CreateToastModal.css";
import { ArcTeryxStores } from "../utils/enums/StoreLocations";
import React, { useState } from "react";
import { createToast } from "../services/toastService";
import { ReactComponent as LikedToastSvg } from "../icons/liked-toast.svg";

function CreateToastModal({ setNewToast }) {
  const [toasteeName, setToasteeName] = useState("");
  const [storeLocation, setStoreLocation] = useState("");
  const [recommendedProducts, setRecommendedProducts] = useState("");
  const [reasonForToast, setReasonForToast] = useState("");
  const [submitClicked, setSubmitClicked] = useState(false);

  const resetVariables = () => {
    setToasteeName("");
    setStoreLocation("");
    setRecommendedProducts("");
    setReasonForToast("");
    setSubmitClicked(false);
  };

  const handleNameChange = (event) => {
    setToasteeName(event.target.value);
  };

  const handleLocationChange = (event) => {
    setStoreLocation(event.target.value);
  };

  const handleProductsChange = (event) => {
    setRecommendedProducts(event.target.value);
  };

  const handleReasonChange = (event) => {
    setReasonForToast(event.target.value);
  };

  const handleCreateToast = async (event) => {
    // event.preventDefault();
    setSubmitClicked(true);

    if (reasonForToast && storeLocation) {
      const newToastData = {
        toasterId: "6611b07e9cfbe6f8dd06cfe5",
        toasteeId: "6611e78da1db4cc68288dc07",
        content: reasonForToast,
        arcteryxProduct: recommendedProducts,
        arcteryxStore: storeLocation,
      };

      try {
        const createdToast = await createToast(newToastData);
        console.log("Toast created:", createdToast);
        setNewToast(createdToast);
        document.getElementById("make-toast-modal").close();
      } catch (error) {
        console.error("Error creating toast:", error);
      }
    }
  };

  const allStores = Object.values(ArcTeryxStores).flatMap(Object.values);

  return (
    <dialog id="make-toast-modal" className="modal toast-font">
      <div className="modal-box">
        <h3 className="font-bold text-lg toast-font flex justify-center items-center gap-4">
          Make a Toast!
          <LikedToastSvg />
        </h3>
        <div className="modal-body-row">
          <div>
            <div className="label">
              <span className="label-text">Name of toastee</span>
            </div>
            <label
              className={`input input-bordered flex items-center gap-2 ${submitClicked && !toasteeName ? "input-error" : ""}`}
            >
              <input
                type="text"
                className="grow"
                value={toasteeName}
                onChange={handleNameChange}
                placeholder="Name"
              />
            </label>
          </div>
          <div>
            <div className="label">
              <span className="label-text">Location of Arc'teryx store</span>
            </div>
            <select
              className={`select select-bordered w-full ${submitClicked && !storeLocation ? "select-error" : ""}`}
              value={storeLocation}
              onChange={handleLocationChange}
            >
              <option disabled selected value={""}>
                Choose an Arc'teryx Location
              </option>
              {allStores.map((store) => (
                <option key={store} value={store}>
                  {store}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div>
          <div className="label">
            <span className="label-text">
              Products recommended by this toastee (Optional)
            </span>
          </div>
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              className="grow"
              value={recommendedProducts}
              onChange={handleProductsChange}
            />
          </label>
        </div>
        <div>
          <div className="label">
            <span className="label-text">
              Why the toastee deserves a toast:
            </span>
          </div>
          <label
            className={`input input-bordered flex items-center gap-2 ${submitClicked && !reasonForToast ? "input-error" : ""}`}
          >
            <input
              type="text"
              className="grow"
              value={reasonForToast}
              onChange={handleReasonChange}
            />
          </label>
        </div>
        <div className="modal-action justify-between">
          <form method="dialog">
            <button className="btn-new h-10" onClick={resetVariables}>
              Close
            </button>
          </form>
          <button className="btn-new h-10" onClick={handleCreateToast}>
            Give a toast!
          </button>
        </div>
      </div>
    </dialog>
  );
}

export default CreateToastModal;
