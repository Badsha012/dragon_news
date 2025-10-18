import React, { use } from 'react';
 const catagoriesPromise= fetch("/categories.json").then(res =>res.json());

const Categories = () => {
    const categories=use(catagoriesPromise)

    return (
        <div>
            <h2 className='font-bold'>All Catagories ({categories.length})</h2>
        </div>
    );
};

export default Categories;