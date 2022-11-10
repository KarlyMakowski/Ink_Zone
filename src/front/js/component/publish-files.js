import React, { useContext } from "react";
import { Context } from "../store/appContext";

import "../../styles/publish-files.css";

export const PublishFiles = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="publish-box">
      <h5>Post your Art</h5>
      <div className="input-box">
        <input
          type="file"
          id="files"
          className="hidden"
          onChange={(e) => actions.setUploadedFiles(e)}
          multiple
        />
        <label htmlFor="files">Select files</label>
        <input
          type="submit"
          value="Upload"
          onClick={(e) => actions.multipleUpload(e)}
        />
      </div>
      <div className="uploaded-files-list">
        {Array.from(store.multipleFiles).map((item, index) => {
          return (
            <div key={index} className="uploaded-file">
              <img
                src={item ? URL.createObjectURL(item) : null}
                alt={"image-" + index}
                className="publish-image"
                style={{ width: "15rem", height: "15rem", objectFit: "cover" }}
              />
              <button onClick={(e) => actions.deleteFile(e, index)}>
                Delete image
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
