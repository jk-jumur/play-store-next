

import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
    return (
        <div className="h-screen bg-purple-100 flex flex-col items-center justify-center  text-3xl font-bold text-black gap-4">
            This Page Is Not Found
            <Link href={'/'}><button className="btn btn-primary">Back To Home</button></Link>
        </div>
    );
};

export default NotFoundPage;