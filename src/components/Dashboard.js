import React, { useEffect, useState } from "react";

import Navbar from "./Navbar";
import "./Dashboard.css";
import EmployeeHighlights from "./EmployeeHighlights";
import ToastList from "./UserToasts/ToastList";
import CreateToastModal from "./CreateToastModal";
import { getToasts } from "../services/toastService";
import ToastingPage from "./ToastingPage";

function Dashboard({ tabIndex }) {
  const [toasts, setToasts] = useState([]);
  const [newToast, setNewToast] = useState("");
  const [sortFn, setSortFn] = useState("time");

  useEffect(() => {
    const getToastsData = async () => {
      let toasts = await getToasts();
      toasts = sortToasts(toasts, sortFn);
      setToasts(toasts);
    };
    getToastsData();
  }, [newToast]);

  useEffect(() => {
    const newToasts = [...toasts];
    if (sortFn === "time") {
      newToasts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      setToasts(newToasts);
    } else if (sortFn === "toasts") {
      newToasts.sort((a, b) => b.likes.length - a.likes.length);
      setToasts(newToasts);
    }
  }, [sortFn]);

  const sortToasts = (toasts, sort) => {
    const newToasts = [...toasts];
    if (sortFn === "time") {
      newToasts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    } else if (sortFn === "toasts") {
      newToasts.sort((a, b) => b.likes.length - a.likes.length);
    }

    return newToasts;
  };

  const handleNewToast = (toast) => {
    setNewToast(toast);
  };

  console.log(toasts);

  return (
    <div className="toast-dashboard ml-72">
      <Navbar />
      <div className="toast-body-container">
        {tabIndex ? (
          <ToastingPage />
        ) : (
          <>
            <EmployeeHighlights />
            <div className="btn-option-container">
              <div className="btn-left">
                <button
                  className={`btn-new toast-font ${sortFn === "time" ? "btn-toast-active" : ""}`}
                  onClick={() => {
                    setSortFn("time");
                  }}
                >
                  New
                </button>
                <button
                  className={`btn-new toast-font ${sortFn === "toasts" ? "btn-toast-active" : ""}`}
                  onClick={() => {
                    setSortFn("toasts");
                  }}
                >
                  Top Toasts
                </button>
              </div>
              <div className="btn-right">
                <button
                  className="btn-new toast-font"
                  onClick={() =>
                    document.getElementById("make-toast-modal").showModal()
                  }
                >
                  Make a Toast
                </button>
                <CreateToastModal setNewToast={handleNewToast} />
              </div>
            </div>
            <ToastList toasts={toasts} />
          </>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
