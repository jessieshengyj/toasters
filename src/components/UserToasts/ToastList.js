import React from 'react';
import ToastCard from './ToastCard';

export default function ToastList() {
    return(
        <div className="px-16">
            <ToastCard name="Sandy" location="North Vancouver Arc'teryx" gear="atom jacket" timestamp="2 Hours Ago" username="faz" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id hendrerit risus. Nullam tempor pharetra venenatis. Duis bibendum lectus a velit hendrerit rhoncus."  />
            <ToastCard name="Sandy" location="North Vancouver Arc'teryx" gear="atom jacket" timestamp="2 Hours Ago" username="faz" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id hendrerit risus. Nullam tempor pharetra venenatis. Duis bibendum lectus a velit hendrerit rhoncus."/>
            <ToastCard name="Sandy" location="North Vancouver Arc'teryx" gear="atom jacket" timestamp="2 Hours Ago" username="faz" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id hendrerit risus. Nullam tempor pharetra venenatis. Duis bibendum lectus a velit hendrerit rhoncus."/>
        </div>
    )
}