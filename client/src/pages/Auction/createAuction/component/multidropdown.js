import React, { useState, useEffect, useRef } from "react";
import { Grid, Card } from "@mui/material";

const UploadImages = ({ setImageFiles }) => {
  const [selectedFiles, setSelectedFiles] = useState(undefined);
  const [imagePreviews, setImagePreviews] = useState([]);

  const selectFiles = (event) => {
    let images = [];

    for (let i = 0; i < event.target.files.length; i++) {
      images.push(URL.createObjectURL(event.target.files[i]));
    }

    setSelectedFiles(event.target.files);
    setImagePreviews(images);
    setImageFiles(event.target.files);
  };

  return (
    <Card sx={{padding: '20px'}}>
    <div>
      <Grid container >
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <label className="btn btn-default p-0">
            <input
              type="file"
              multiple
              style={{border: 'none', marginBottom: '5px'}}
              accept="image/*"
              onChange={selectFiles}
            />
          </label>
        </Grid>
      </Grid>
      <Grid container>
      {imagePreviews && 
        imagePreviews.map((img, i) => {
          return (
            <Grid item xl={6} lg={6} md={6} sm={6} xs={6} sx={{padding: '5px'}} key={new Date() + i}>
              <img className="preview" src={img} alt={"image-" + i} key={i}/>
            </Grid>
          );
        })
      }
      </Grid>
    </div>
    </Card>
  );
};

export default UploadImages;