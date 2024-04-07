import React from 'react';
import ToastCard from './ToastCard';

export default function ToastList({ toasts }) {
    console.log(toasts);
    return(
        <div className="px-16">
            {
                toasts && toasts.map((t) => {
                    return <ToastCard name={t.toasteeName} location={t.location} timestamp={t.updatedAt} gear={t.arcteryxProduct} likes={t.likes} username={t.toasterName} description={t.content} />
                })
            }
        </div>
    )
}