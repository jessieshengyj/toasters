import React, { useState, useEffect } from "react";
import { ReactComponent as UnlikedToastSvg } from "../../icons/toast-upvote-icon.svg";
import { ReactComponent as LikedToastSvg } from "../../icons/liked-toast.svg";
import "./ToastCard.css";

import { likeToast } from "../../services/toastService";
import ToastCardDetailed from "./ToastCardDetailed";
const userId = "6611b07e9cfbe6f8dd06cfe5";

export default function ToastCard({
  id,
  name,
  location,
  gear,
  timestamp,
  username,
  description,
  likes,
  experience, 
  toasterUsername
}) {
  const [likesList, setLikesList] = useState(likes);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const date = new Date(timestamp);
  console.log("render");
  const clickLikeToast = async (event) => {
    event.stopPropagation();
    try {
      const likeChange =
        likesList.find((l) => l === userId) !== undefined ? 0 : 1;
      await likeToast(id, likeChange, userId);

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
    setLikesList(likes);
  }, [likes]);

  // useEffect(() => {
  //   if (showDetailModal) {
  //     document.getElementById("toast-card-detailed").showModal();
  //   }
  // }, [showDetailModal]);

  console.log("isLiked", likesList.find((l) => l === userId) !== undefined);
  return (
    <>
      <div className="card w-full h-64 bg-base-100 shadow-md my-6">
        <div
          className="card-body"
          onClick={() => {
            // setShowDetailModal(true);
            document.getElementById(`toast-card-detailed-${timestamp}`).showModal();
          }}
        >
          <div className="flex justify-between pb-8">
            <div className="w-20">
              <img
                className="rounded-full"
                alt="Tailwind CSS Navbar component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
            <div className="flex-1 pl-10">
              <h2 className="card-title pb-4">
                {name ? `${name} - ` : ""}
                {location}
              </h2>
              <div className="flex">
                  <p className="text-left">{toasterUsername}</p>
                  <p className="text-left">{date.toUTCString().split(' ').slice(0, 4).join(' ')}</p>
                  <p className="text-left">{gear}</p>
                  <p className="text-left">{experience}</p>
              </div>
            </div>
            <div>
              <div
                tabIndex={0}
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
          <p className="text-left toast-card-description">{description}</p>
        </div>
      </div>
      <ToastCardDetailed
        detail_id={id}
        detail_name={name}
        detail_location={location}
        detail_timestamp={timestamp}
        detail_gear={gear}
        detail_likes={likes}
        detail_username={username}
        detail_description={description}
      />
    </>
  );
}

const styles = {};
