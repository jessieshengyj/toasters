import React, { useEffect, useState } from "react";
import { ReactComponent as UnlikedToastSvg } from "../../icons/toast-upvote-icon.svg";
import { ReactComponent as LikedToastSvg } from "../../icons/liked-toast.svg";
import "./ToastCard.css";
import { likeToast } from "../../services/toastService";

const userId = "6611b07e9cfbe6f8dd06cfe5";

function ToastCardDetailed({
  detail_id,
  detail_name,
  detail_location,
  detail_gear,
  detail_timestamp,
  detail_username,
  detail_description,
  detail_likes,
}) {
  const [likesList, setLikesList] = useState(detail_likes);
  const date = new Date(detail_timestamp);

  // useEffect(() => {
  //   console.log("render detail card", [detail_id,
  //     detail_name,
  //     detail_location,
  //     detail_gear,
  //     detail_timestamp,
  //     detail_username,
  //     detail_description,
  //     detail_likes]);
  // })
  const clickLikeToast = async (event) => {
    try {
      const likeChange =
        likesList.find((l) => l === userId) !== undefined ? 0 : 1;
      await likeToast(detail_id, likeChange, userId);

      if (likeChange) {
        setLikesList([...likesList, userId]);
        console.log("likeLists", likesList);
      } else {
        const idx = likesList.indexOf(userId);
        const newLikes = [...likesList];
        newLikes.splice(idx);
        setLikesList(newLikes);
        console.log("likeLists", likesList);
      }
    } catch (e) {}
  };

  useEffect(() => {
    setLikesList(detail_likes);
  }, [detail_likes]);
  return (
    <dialog id={`toast-card-detailed-${detail_timestamp}`} className="modal">
      <div className="modal-box">
        <div className="card-body max-w-screen-md">
          <div className="flex justify-between pb-8">
            <div className="w-20">
              <img
                className="rounded-full"
                alt="Tailwind CSS Navbar component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
            <div className="flex-1 pl-10 pr-10">
              <h2 className="card-title pb-4">
                {detail_name ? `${detail_name} - ` : ""}
                {detail_location}
              </h2>
              <div className="flex">
                <p className="text-left">{detail_username}</p>
                <p className="text-left">
                  {date.toUTCString().split(" ").slice(0, 4).join(" ")}
                </p>
                <p className="text-left">{detail_gear}</p>
              </div>
            </div>
            <div>
              <div
                role="button"
                className="toast-btn"
                onClick={clickLikeToast}
              >
                <figure className="w-12">
                  {likesList.find((l) => l === userId) !== undefined ? (
                    <LikedToastSvg />
                  ) : (
                    <UnlikedToastSvg />
                  )}
                </figure>
              </div>
              <p>{likesList.length}</p>
            </div>
          </div>
          <p className="text-left">{detail_description}</p>
        </div>
        <p className="py-4">
          Press <kbd className="kbd kbd-sm">Esc</kbd> key or click outside to
          close
        </p>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>Close</button>
      </form>
    </dialog>
  );
}

export default ToastCardDetailed;
