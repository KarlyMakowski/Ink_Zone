import React, { useState, useContext } from "react";
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
          onChange={(e) => actions.multipleUpload(e)}
          disabled={store.multipleFiles?.length === 5}
          multiple
          
        />
        <label htmlFor="files">Select files</label>
        <input
          type="submit"
          value="Upload"
          name="multipleFiles"
          onClick={(e) => actions.setUploadedFiles(e, files)}
        />
      </div>
      <div className="uploaded-files-list">Render files</div>
    </div>
  );
};


