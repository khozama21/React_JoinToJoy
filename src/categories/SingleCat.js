import React from 'react'
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import { useParams } from "react-router";
import { ApplicationForm } from './ApplicationForm';
import useFetch from "./useFetch";

export const SingleCat = () => {
    const { id } = useParams();
    const { data: category, isPneding } = useFetch('http://localhost:8000/categories/' + id);
    const nav=useHistory();


 


  return (
    <div className="container text-center mt-5">
            {isPneding && <div className="text-center"> <h3> LOADING...</h3></div>}
            {category && (
                <article>
                    <h2> {category.title} </h2>
                     
                    <div>

                         {category.about}  
                    </div>
                </article>
            
            )}
            <a href="/application" className="btn btn-primary" >Fill Application</a>
        </div>
  )
}
