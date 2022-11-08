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
          /* disabled={uploadedFiles.length === 5} */
          multiple
        />
        <label htmlFor="files">Select files</label>
        <input
          type="submit"
          value="Upload"
          name="multipleFiles"
          onClick={(e) => actions.multipleUpload(e)}
        />
      </div>
      <div className="uploaded-files-list">
        {Array.from(store.multipleFiles).map((item, index) => {
          console.log(store.multipleFiles);
          return (
            <div key={item} className="uploaded-file">
              <img
                src={item ? URL.createObjectURL(item) : null}
                alt={console.log(item) /* "image-" + index */}
                className="publish-image"
                style={{ width: "15rem", height: "15rem" }}
              />
              <button
                onClick={() =>
                  setUploadedFiles(
                    store.multipleFiles.filter((e) => e !== item)
                  )
                }
              >
                Delete image
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
