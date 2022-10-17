import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

import Select from "react-select";

import "../../styles/profile.css";

import { RiInstagramLine, RiTwitterFill, RiFacebookFill } from "react-icons/ri";

export const Publish = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  const styles = [
    { value: "Old School", label: "Old School", color: "black" },
    { value: "New School", label: "New School", color: "black" },
    { value: "Neo Traditional", label: "Neo Traditional", color: "black" },
    { value: "Realism", label: "Realism", color: "black" },
    { value: "Surrealism", label: "Surrealism", color: "black" },
    { value: "Black Work", label: "Black Work", color: "black" },
    { value: "Dot Work", label: "Dot Work", color: "black" },
    { value: "Sketch", label: "Sketch", color: "black" },
    { value: "Watercolor", label: "Watercolor", color: "black" },
    { value: "Japanese", label: "Japanese", color: "black" },
  ];

  const colorStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor: "rgba(255, 255, 255, 0.15)",
      minHeight: "60px",
      borderColor: "rgba(255, 255, 255, 0.5)",
      borderRadius: "6px",
      boxShadow: "0 0 1px rgba(255, 255, 255, 0.5)",
      ":hover": { borderColor: "rgba(255, 255, 255, 0.5)" },
      fontSize: "1.3em",
      fontWeight: "bold",
    }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      return {
        ...styles,
        color: data.color,
        fontSize: "1.3em",
        fontWeight: "bold",
      };
    },
    multiValue: (styles, { data }) => {
      return {
        ...styles,
        backgroundColor: "rgb(255,255,255, 0.3)",
        borderRadius: "6px",
        color: "black",
        fontSize: "1.3em",
      };
    },
    multiValueLabel: (styles, { data }) => {
      return {
        ...styles,
        color: "black",
      };
    },
    multiValueRemove: (styles, { data }) => {
      return {
        ...styles,
        cursor: "pointer",
        ":hover": {
          color: "#fff",
        },
      };
    },
  };

  return (
    <div className="form">
      <div className="pricing-title">
        <h1>Publish Your Art</h1>
      </div>
      <div className="row gutters-sm">
        <div className="col-md-4 mb-3">
          <div className="profile-card">
            <div className="profile-card-body">
              <div className="d-flex flex-column align-items-center text-center img-size">
                <div className="profile-btn">
                  <form
                    onSubmit={(e) => actions.uploadPicture(e)}
                    className="pic-update-mobile"
                  >
                    <input
                      type="file"
                      id="files"
                      className="hidden"
                      onChange={(e) => {
                        actions.multipleUpload(e);
                      }}
                    />
                    <label htmlFor="files">Upload</label>
                    <input type="submit" value="Submit" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-8 profile-card">
          <form onSubmit={(e) => actions.loadProfile(e)}>
            <div className="form_box_input mt-0">
              <label htmlFor="basic-multi-select">Select your styles:</label>
              <Select
                isMulti
                name="styles"
                options={styles}
                className="basic-multi-select mt-1"
                classNamePrefix="select"
                styles={colorStyles}
              />
            </div>
            <div className="form_box_input mt-3">
              <label htmlFor="form-control">Add your description:</label>
              <textarea
                className="form-control mt-1"
                style={{ height: "150px" }}
                onChange={(e) => actions.handleChange(e)}
                name="description"
              ></textarea>
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
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
