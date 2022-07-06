import { useState, useEffect } from "react";


const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isPneding, setPending] = useState(true);
    

   
        useEffect(() => {

            fetch(url)
                .then(res => {
                    return res.json();
                }).then(data => {
                   
                    setData(data);
                    setPending(false)
                    console.log(data)
                }).catch(err => {
                    console.log(err.message);
                })








        }, [url]); 

        return(
           {data,isPneding}
        );
       
}

export default useFetch;