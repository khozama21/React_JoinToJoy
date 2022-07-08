import { Link } from "react-router-dom";


const List = ({ categories }) => {
    return (

        <div>
            {/* <h2> {title}</h2> */}
            <div class=" section-container">
                <div class="   container">
                     
                    <div class="home-speakers-container">
                        {categories.map((category) => (

                            <div key={category.id}>
                                {/* <Link to={`/blogs/${category.id}`}> */}


                                {/* <h2> {category.title}</h2>
                        <small> {category.about}</small> */}


                                {/* </Link> */}

                                {/* <button className="btn btn-danger ml-5" onClick={()=>{handleDelete(blog.id)}} >Delete Blog</button> */}

                                <div class="speaker-card-speaker-card">
                                    <div class="speaker-card-image-container">
                                        <img
                                            alt="image"
                                            src={category.url}
                                            class="speaker-card-image"
                                        />
                                        <div class="speaker-card-read-more-container">
                                        <Link to={`/categories/${category.id}`}> 
                                            <span class="speaker-card-hint">Book An Appointmnet</span>
                                            </Link>
                                            <svg viewBox="0 0 1024 1024" class="speaker-card-icon">
                                                <path
                                                    d="M621.254 877.254l320-320c24.994-24.992 24.994-65.516 0-90.51l-320-320c-24.994-24.992-65.516-24.992-90.51 0-24.994 24.994-24.994 65.516 0 90.51l210.746 210.746h-613.49c-35.346 0-64 28.654-64 64s28.654 64 64 64h613.49l-210.746 210.746c-12.496 12.496-18.744 28.876-18.744 45.254s6.248 32.758 18.744 45.254c24.994 24.994 65.516 24.994 90.51 0z"
                                                ></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <span class="speaker-card-first-name">
                                        <h4 >{category.title}</h4>
                                    </span>
                                    
                                </div>


                            </div>
                        ))}
                    </div>
                </div>
            </div>


</div>

            );
}

            export default List;