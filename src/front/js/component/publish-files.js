import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";

import "../../styles/publish-files.css";

const MAX_COUNT = 5;

export const PublishFiles = () => {
  const { store, actions } = useContext(Context);

  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [fileLimit, setFileLimit] = useState(false);

  const handleUploadFiles = (files) => {
    const uploaded = [...uploadedFiles];
    const limitExceeded = false;

    files.some((file) => {
      if (uploaded.findIndex((f) => f.name === file.name) === -1) {
        uploaded.push(file);
        if (uploaded.length === MAX_COUNT) setFileLimit(true);
        if (uploaded.length > MAX_COUNT) {
          setFileLimit(false);
          limitExceeded = true;
          return true;
        }
      }
    });
    if (!limitExceeded) setUploadedFiles(uploaded);
  };

  const handleFileEvent = (e) => {
    const chosenFiles = Array.prototype.slice.call(e.target.files);
    handleUploadFiles(chosenFiles);
  };

  return (
    <>
      <div className="publish-box">
        <h5>Post your Art</h5>
        <div className="input-box">
          <input
            type="file"
            id="files"
            className="hidden"
            onChange={handleFileEvent}
            disabled={fileLimit}
            multiple
          />
          <label htmlFor="files">Select files</label>
          <input
            type="submit"
            value="Upload"
            name="multipleFiles"
            className={`${!fileLimit ? "" : "disabled"}`}
          />
        </div>
      </div>
      <div className="uploaded-files-list">
        {uploadedFiles &&
          uploadedFiles.map((file, index) => {
            return (
              <div key={index} className="uploaded-file">
                <img src={file} alt={"image-" + index} className="publish-image" />
                <button
                  onClick={() =>
                    setUploadedFiles(uploadedFiles.filter((e) => e !== file))
                  }
                >
                  Delete image
                </button>
              </div>
            );
          })}
      </div>
    </>
  );
};
