import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/user-profile.css";

export const UserProfile = () => {
  const { actions, store } = useContext(Context);
  const [info, setInfo] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
    lastname: "",
    phonenumber: "",
    picture: "",
  });
  const [show, setShow] = useState(true);
  const [show2, setShow2] = useState(true);

  const handleChange = (e) => {
    setInfo({
      ...info,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div class="container">
      <div class="main-body">
        <div class="row">
          <div class="col-lg-4">
            <div class="card">
              <div class="card-body">
                <div class="d-flex flex-column align-items-center text-center">
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar6.png"
                    alt="Admin"
                    class="rounded-circle p-1 bg-primary"
                    width="110"
                  />
                  <div class="mt-3">
                    <h4>Paco</h4>
                    <p class="text-secondary mb-1">Full Stack Developer</p>
                    <p class="text-muted font-size-sm">
                      Bay Area, San Francisco, CA
                    </p>
                    <button class="btn btn-primary">Follow</button>
                    <button class="btn btn-outline-primary">Message</button>
                  </div>
                </div>
                <hr class="my-4" />
                <ul class="list-group list-group-flush">
                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 class="mb-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-twitter me-2 icon-inline text-info"
                      >
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                      </svg>
                      Twitter
                    </h6>
                    <input type="text" class="form-control" value="@bootday" />
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 class="mb-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-instagram me-2 icon-inline text-danger"
                      >
                        <rect
                          x="2"
                          y="2"
                          width="20"
                          height="20"
                          rx="5"
                          ry="5"
                        ></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                      Instagram
                    </h6>
                    <input type="text" class="form-control" value="bootday" />
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 class="mb-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#4169e1"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-facebook me-2 icon-inline text-primary"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                      Facebook
                    </h6>
                    <input type="text" class="form-control" value="bootday" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-8">
            <div class="card">
              <div class="card-body">
                <div class="row mb-3">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Name</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">
                    <input
                      type="text"
                      class="form-control"
                      defaultValue={store.currentUser.name}
                      onChange={(e)=>{setInfo({...info, name:e.target.value})}}
                    />
                  </div>
                </div>
                <div class="row mb-3">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Last Name</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">
                    <input type="text" class="form-control" value="Snow" />
                  </div>
                </div>
                <div class="row mb-3">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Email</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">
                    <input
                      type="text"
                      class="form-control"
                      value="john@example.com"
                    />
                  </div>
                </div>
                <div class="row mb-3">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Phone</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">
                    <input
                      type="text"
                      class="form-control"
                      value="(239) 816-9029"
                    />
                  </div>
                </div>
                <div class="row mb-3">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Mobile Phone</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">
                    <input
                      type="text"
                      class="form-control"
                      value="(320) 380-4539"
                    />
                  </div>
                </div>
                <div class="row mb-3">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Address</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">
                    <input
                      type="text"
                      class="form-control"
                      value="Bay Area, San Francisco, CA"
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-3"></div>
                  <div class="col-sm-9 text-secondary">
                    <input
                      type="button"
                      class="btn btn-primary px-4"
                      value="Save Changes"
                      onClick={() => actions.changeUser(info)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row text-center">
        <div class="col-md-12">
          <div
            id="carouselBasicExample"
            class="carousel slide carousel-dark"
            data-mdb-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <p class="lead font-italic mx-4 mx-md-5">
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Fugit, error amet numquam iure provident voluptate esse quasi,
                  voluptas nostrum quisquam!"
                </p>
                <div class="mt-5 mb-4">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
                    class="rounded-circle img-fluid shadow-1-strong"
                    alt="smaple image"
                    width="100"
                    height="100"
                  />
                </div>
                <p class="text-muted mb-0">- Anna Morian</p>
              </div>

              <div class="carousel-item">
                <p class="lead font-italic mx-4 mx-md-5">
                  "Neque cupiditate assumenda in maiores repudiandae mollitia
                  adipisci maiores repudiandae mollitia consectetur adipisicing
                  architecto elit sed adipiscing elit."
                </p>
                <div class="mt-5 mb-4">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(31).webp"
                    class="rounded-circle img-fluid shadow-1-strong"
                    alt="smaple image"
                    width="100"
                    height="100"
                  />
                </div>
                <p class="text-muted mb-0">- Teresa May</p>
              </div>

              <div class="carousel-item">
                <p class="lead font-italic mx-4 mx-md-5">
                  "Duis aute irure dolor in reprehenderit in voluptate velit
                  esse cillum dolore eu fugiat nulla pariatur est laborum neque
                  cupiditate assumenda in maiores."
                </p>
                <div class="mt-5 mb-4">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp"
                    class="rounded-circle img-fluid shadow-1-strong"
                    alt="smaple image"
                    width="100"
                    height="100"
                  />
                </div>
                <p class="text-muted mb-0">- Kate Allise</p>
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-mdb-target="#carouselBasicExample"
              data-mdb-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-mdb-target="#carouselBasicExample"
              data-mdb-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
