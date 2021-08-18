import React, { useState, useEffect } from "react";
import { Paper } from "@material-ui/core";
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
        <div>
          <input
            type="file"
            onChange={uploadProfileImageHandler}
            placeholder="Upload Profile"
          />
        </div>
      </Paper>
    </div>
  );
}

export default ProfileWrapper;
