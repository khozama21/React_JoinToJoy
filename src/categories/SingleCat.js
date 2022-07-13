import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router";
import { ApplicationForm } from "./ApplicationForm";
import useFetch from "./useFetch";
import "./app.css";

export const SingleCat = () => {
  const { id } = useParams();
  const { data: category, isPneding } = useFetch(
    "http://localhost:8001/categories/" + id
  );
  const nav = useHistory();

  return (
    <div className="container-fluid text-center mt-5">
      {isPneding && (
        <div className="text-center">
          {" "}
          <h3> LOADING...</h3>
        </div>
      )}

      {category && (
        <article>
          <div class="jumbotron bg-cover text-white">
            <div class="container py-5 text-center">
              <h1 class="display-4 font-weight-bold">
                Reservation Application
              </h1>

              {/* <a href="#" role="button" class="btn btn-primary px-5">See All Features</a> */}
            </div>
          </div>

          <div class="container py-5">
            <h2 class="h3 font-weight-bold">{category.title}</h2>
            <div class="row">
              <div>
                <p class="text-muted m-2">{category.about}</p>
                {/* <p class="font-italic text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.</p> */}
              </div>
              {/* <div class="col-lg-8">
                            <p class="font-italic text-muted">Lorem ipsum dolor sit amet, consectetur <strong class="font-weight-bold text-dark">adipisicing elit, sed </strong>do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in <strong class="font-weight-bold text-dark">reprehenderit in voluptate </strong>velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div> */}
            </div>
          </div>
        </article>
      )}
      {(() => {
        if (localStorage.getItem("isLoggedIn") == "true") {
          return (
            <a href="/application" className="btn btn-primary mb-5">
              Fill Application
            </a>
          );
        } else {
          return (
            <div>
              <a href="/login" class="loginBtn">
                please Login
              </a>
            </div>
          );
        }
      })()}
    </div>
  );
};
