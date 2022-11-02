import React, { useContext } from "react";
import { Context } from "../store/appContext";

import Select from "react-select";

import "../../styles/profile.css";

export const SelectStyle = ({ experts }) => {
  const { actions } = useContext(Context);

  const options = [
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

  const colourStyles = {
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
        backgroundImage:
          "linear-gradient(to bottom right, #aeffb9 0%, #a091ff 100%)",
        borderRadius: "6px",
        color: "black",
        fontSize: "1.1em",
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
    <Select
      className="basic-multi-select mt-1"
      classNamePrefix="select"
      name="stylesPublish"
      options={options}
      styles={colourStyles}
      onChange={experts == true ? (e) => actions.handleSearch(e) : (e) => actions.handleSelect(e)}
      isMulti
    />
  );
};
