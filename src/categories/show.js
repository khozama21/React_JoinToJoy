 import React from 'react'
import List from './catList';
import useFetch from './useFetch';
const Show = () => {
    console.log("hi")
    const url = "http://localhost:8001/categories";
    const {data: categories, isPneding } = useFetch(url)
    return (


        <div>
           
           {isPneding && <div className="text-center"><h3> LOADING...</h3> </div>}
            {categories && <List categories={categories}  />}
            
            {/* <BlogList blogs={blogs.filter((blog)=>blog.author==='mario')} title="Mario's Blogs" /> */}

        </div>
    );
}

export default Show;