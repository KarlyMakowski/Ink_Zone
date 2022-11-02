import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

import { PublishFiles } from "../component/publish-files";
import { SelectStyle } from "../component/select";

import "../../styles/profile.css";

import { RiInstagramLine, RiTwitterFill, RiFacebookFill } from "react-icons/ri";

export const Publish = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  const params = useParams();

  return (
    <div className="form">
      <div className="pricing-title">
        <h1>Profile Upload</h1>
      </div>
      <div className="row gutters-sm justify-content-center">
        <div className="col-md-8 profile-card publish-card">
          <form key={store.currentUser?.id}>
            <div className="form_box_input mt-0">
              <label htmlFor="basic-multi-select">Choose the styles that you specialize on</label>
              <SelectStyle />
            </div>
            <div className="form_box_input mt-3">
              <label htmlFor="form-control">Add your description</label>
              <textarea
                className="form-control mt-1"
                style={{ height: "200px" }}
                onChange={(e) => actions.handleChange(e)}
                name="description"
              ></textarea>
            </div>
            <div className="profile-btn publish-btn mt-3">
              <PublishFiles />
            </div>
            <div className="form_box_input_social">
              <div className="form_box_input">
                <label htmlFor="facebook">Facebook</label>
                <div className="form_box_input_box">
                  <div className="form_box_input_box_icon">
                    <RiFacebookFill />
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => actions.handleChange(e)}
                    defaultValue={store.currentUser?.facebook}
                    name="facebook"
                  />
                </div>
              </div>
              <div className="form_box_input">
                <label htmlFor="Twitter">Twitter</label>
                <div className="form_box_input_box">
                  <div className="form_box_input_box_icon">
                    <RiTwitterFill />
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => actions.handleChange(e)}
                    defaultValue={store.currentUser?.twitter}
                    name="twitter"
                  />
                </div>
              </div>
              <div className="form_box_input">
                <label htmlFor="Instagram">Instagram</label>
                <div className="form_box_input_box">
                  <div className="form_box_input_box_icon">
                    <RiInstagramLine />
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => actions.handleChange(e)}
                    defaultValue={store.currentUser?.instagram}
                    name="instagram"
                  />
                </div>
              </div>
            </div>
            <div>
              <input
                type="submit"
                value="Save changes"
                className="update-profile-btn"
                onClick={(e) => actions.publishProfile(e, params.id)}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
