import React, { useState, useEffect } from 'react';
import { ReactComponent as UnlikedToastSvg } from "../../icons/toast-upvote-icon.svg";
import { ReactComponent as LikedToastSvg } from "../../icons/liked-toast.svg";

import { likeToast } from '../../services/toastService';
const userId = '6611b07e9cfbe6f8dd06cfe5';

export default function ToastCard({ id, name, location, gear, timestamp, username, description, likes }) {
    const [likesList, setLikesList] = useState(likes);
    const date = new Date(timestamp);
    console.log('render');
    const clickLikeToast = async () => {
        try {
            const likeChange = likesList.find((l) => l === userId) !== undefined ? 0 : 1;
            await likeToast(id, likeChange, userId);

            if (likeChange) {
                setLikesList([...likesList, userId]);
                console.log('likeLists', likesList);
            } else {
                const idx = likesList.indexOf(userId);
                const newLikes = [...likesList];
                newLikes.splice(idx);
                setLikesList(newLikes);
                console.log('likeLists', likesList);
            }
        } catch (e) {

        }
    };

    useEffect(() => {
        setLikesList(likes);
    }, [likes])
    console.log('isLiked', likesList.find((l) => l === userId) !== undefined);
    return(
    <div className="card w-full h-64 bg-base-100 shadow-xl my-6">
        <div className="card-body">
            <div className="flex justify-between pb-8">
                <div className="w-20">
                    <img
                        className="rounded-full"
                        alt="Tailwind CSS Navbar component"
                        src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                    />
                </div>
                <div className="flex-1 pl-10">
                    <h2 className="card-title pb-4">{ name ? `${name} - ` : '' }{location}</h2>
                    <div className="flex">
                        <p className="text-left">{username}</p>
                        <p className="text-left">{date.toUTCString().split(' ').slice(0, 4).join(' ')}</p>
                        <p className="text-left">{gear}</p>
                    </div>
                </div>
                <div>
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost btn-circle"
                        onClick={clickLikeToast}
                    >
                        <figure className="w-12">
                            {
                                likesList.find((l) => l === userId) !== undefined ? <LikedToastSvg /> : <UnlikedToastSvg />
                            }
                        </figure>
                    </div>
                    <p>{likesList.length}</p>
                </div>
            </div>
            <p className="text-left">{description}</p>
        </div>
    </div>
    );
}

const styles = {

};
