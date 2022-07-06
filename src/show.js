 import React from 'react'
import List from './catList';
import useFetch from './useFetch';
const Show = () => {
    const url = "http://localhost:8000/categories";
    const {data: categories, isPneding } = useFetch(url)
    return (


        <div>
           
           {isPneding && <div className="content"> <h3> LOADING...</h3></div>}
            {categories && <List categories={categories} title="All Categories" />}
            
            {/* <BlogList blogs={blogs.filter((blog)=>blog.author==='mario')} title="Mario's Blogs" /> */}

        </div>
    );
}

export default Show;