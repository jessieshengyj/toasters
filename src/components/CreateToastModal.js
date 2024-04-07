import "./CreateToastModal.css";
import { ArcTeryxStores } from "../utils/enums/StoreLocations";
import { useState } from "react";
import { createToast } from "../services/toastService";

function CreateToastModal({ setNewToast }) {
  const [toasteeName, setToasteeName] = useState("");
  const [storeLocation, setStoreLocation] = useState("");
  const [recommendedProducts, setRecommendedProducts] = useState("");
  const [reasonForToast, setReasonForToast] = useState("");

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
    event.preventDefault();
    const newToastData = {
      toasterId: "6611b07e9cfbe6f8dd06cfe5",
      toasteeId: "6611e78da1db4cc68288dc07",
      content: reasonForToast,
      arcteryxProduct: recommendedProducts,
      arcteryxStore: storeLocation,
    };
    // Here you can submit the form data or perform any other actions with the saved values
    console.log("Toastee Name:", toasteeName);
    console.log("Store Location:", storeLocation);
    console.log("Recommended Products:", recommendedProducts);
    console.log("Reason for Toast:", reasonForToast);
    console.log("new toast", newToastData);

    try {
      const createdToast = await createToast(newToastData);
      console.log("Toast created:", createdToast);
      setNewToast(createdToast);
      // Do something with the created toast data
    } catch (error) {
      // Handle error if needed
      console.error("Error creating toast:", error);
    }
  };

  const allStores = Object.values(ArcTeryxStores).flatMap(Object.values);

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
              className="select select-bordered w-full"
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
              Products recommended by this toastee
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
          <label className="input input-bordered flex items-center gap-2">
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
            <button className="btn-new h-10">Close</button>
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
