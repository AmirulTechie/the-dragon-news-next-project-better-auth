import Link from 'next/link';
import React from 'react';


const LeftSideBar = ({ categoreis , activeId }) => {
    return (
        <>
            <h2>All Categories</h2>
            <ul className="flex flex-col gap-2 mt-5 mr-40">
                {
                    categoreis.map((catagory) => {
                        return  <li key={catagory.category_id}
                            className={`${activeId === catagory.category_id && "bg-slate-300"} bg-slate-50 p-2 text-center rounded-md`}
                        ><Link className={`block p-2`} href={`/category/${catagory.category_id}`}>{catagory.category_name}</Link></li>
                    })
                }
            </ul>  
        </>
    );
};


export default LeftSideBar; 