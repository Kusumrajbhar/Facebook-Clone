import React, { useState, useEffect } from "react";
import { Avatar, Paper, Button } from "@material-ui/core";
import girl1 from "../../Assets/Images/girl1.jpg";

function ProfileWrapper() {
  const [userProfileImage, setUserProfileImage] = useState();
  const [localImage, setLocalImage] = useState(undefined);

  const uploadProfileImageHandler = (e) => {
    const myImage = e.target.files[0];
    const blobImage = URL.createObjectURL(myImage);
    setUserProfileImage(blobImage);
    localStorage.setItem("userImage", blobImage);
  };

  useEffect(() => {
    const storedImage = localStorage.getItem("userImage");
    setLocalImage(storedImage);
  }, [userProfileImage]);

  return (
    <div className="main">
      <Paper>
        <img src={localImage && localImage} height="300" width="300" alt="" />
        <div className="flexWithCenterJustify">
          <span style={{ width: "500px" }} className="flexWithCenter">
            <span style={{ borderRadius: "50%" }} className="iconLetter">
              <img
                src={localImage && localImage}
                height="100"
                width="100"
                alt=""
              />
            </span>
            <span>Kusum Rajbhar</span>
          </span>
          <Button variant="contained" color="primary" component="label">
            <input
              style={{ padding: "5%" }}
              type="file"
              onChange={uploadProfileImageHandler}
              hidden
            />
            Upload Image
          </Button>
        </div>
      </Paper>
    </div>
  );
}

export default ProfileWrapper;
