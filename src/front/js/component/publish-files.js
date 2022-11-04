import React, { useState } from "react";

import "../../styles/publish-files.css";

export const PublishFiles = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleUploadFiles = (e) => {
    if (e.target.files) {
      const filesArr = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      );
      setUploadedFiles((prevImages) => prevImages.concat(filesArr));
      Array.from(e.target.files).map((file) => URL.revokeObjectURL(file));
    }
  };

  const renderFiles = (source) => {
    return source.map((image, index) => {
      return (
        <div key={image} className="uploaded-file">
          <img
            src={image}
            alt={"image-" + index}
            className="publish-image"
            style={{ width: "15rem", height: "15rem" }}
          />
          <button
            onClick={() =>
              setUploadedFiles(uploadedFiles.filter((e) => e !== image))
            }
          >
            Delete image
          </button>
        </div>
      );
    });
  };

  return (
    <div className="publish-box">
      <h5>Post your Art</h5>
      <div className="input-box">
        <input
          type="file"
          id="files"
          className="hidden"
          onChange={handleUploadFiles}
          disabled={uploadedFiles.length === 5}
          multiple
        />
        <label htmlFor="files">Select files</label>
        <input type="submit" value="Upload" name="multipleFiles" />
      </div>
      <div className="uploaded-files-list">{renderFiles(uploadedFiles)}</div>
    </div>
  );
};
