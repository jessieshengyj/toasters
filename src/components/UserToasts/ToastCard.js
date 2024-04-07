import React from 'react';
import { ReactComponent as TestSvg } from "../../icons/toast-upvote-icon.svg";

export default function ToastCard({ name, location, gear, timestamp, username, description, likes }) {
    const date = new Date(timestamp);
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
                    >
                        <figure className="w-12">
                            <TestSvg />
                        </figure>
                    </div>
                    <p>{likes.length}</p>
                </div>
            </div>
            <p className="text-left">{description}</p>
        </div>
    </div>
    );
}

const styles = {

};
