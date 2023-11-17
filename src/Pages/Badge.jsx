import React, { useRef, useState } from "react";
import SectionHeadingText from "../Components/SectionHeadingText";
import Wrapper from "../Components/Wrapper";
import { FaCloudUploadAlt } from "react-icons/fa";
import { MdSimCardDownload } from "react-icons/md";
import * as htmlToImage from "html-to-image";
import toast from "react-hot-toast";

const Badge = () => {
  const [circleImage, setCircleImage] = useState(false);

  const componentSquare = useRef(null);
  const componentCircle = useRef(null);

  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const url = URL.createObjectURL(file);
      setSelectedFile(file);
      setImageUrl(url);
    }
  };

  //   const exportAsImage = async (el, name) => {
  //     const dataUrl = await htmlToImage.toPng(el);
  //     const link = document.createElement("a");
  //     link.download = `${name}.png`;
  //     link.href = dataUrl;
  //     link.click();
  //   };

  const exportAsImage = async (el, name, width, height) => {
    // Convert the HTML element to an image
    const dataUrl = await htmlToImage.toPng(el);

    // Create a canvas element with the specified dimensions
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;

    // Get the 2D context of the canvas
    const context = canvas.getContext("2d");

    // Create an Image object
    const img = new Image();

    // Set the source of the Image object to the data URL
    img.src = dataUrl;

    // When the image has loaded, draw it onto the canvas with the desired dimensions
    img.onload = () => {
      context.drawImage(img, 0, 0, width, height);

      // Create a link element for downloading
      const link = document.createElement("a");

      // Set the download attribute and href with the canvas data URL
      link.download = `${name}.png`;
      link.href = canvas.toDataURL("image/png");

      // Simulate a click on the link to trigger the download
      link.click();
    };
  };

  const downLoadFunction = async () => {
    await toast.promise(
      new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 1000); // Adjust the duration as needed
      }),
      {
        loading: "Downloading...",
        success: "Download successfully!",
        error: "An error occurred during register.",
      }
    );
    if (circleImage) {
      exportAsImage(
        componentCircle.current,
        `devfest2023BBSR-Badge`,
        1000,
        1000
      );
    } else {
      exportAsImage(
        componentSquare.current,
        `devfest2023BBSR-Badge`,
        1000,
        1000
      );
    }
  };

  return (
    <div id="Badge">
      <Wrapper>
        <div id="Badge-container-main">
          <div id="Badge-container-main-1">
            <div id="Badge-heading">
              <SectionHeadingText text={"Devfest'23 Badge"} />
              <p>
                Now that you are here, how about personalising your Devfest
                Bhubaneswar 2023 profile? Upload an image and generate a
                personalised badge with the Devfest Bhubaneswar 2023 frame. Also
                share your image using <span>#DevfestBhubaneswar2023</span> on
                different social platforms.
              </p>
            </div>
            <form id="Badge-container-main-1-forms">
              <div className="InputBox">
                <h4>Select a Image</h4>
                <label htmlFor="photo" className="InputBox-file">
                  <div className="ico">
                    <FaCloudUploadAlt />
                  </div>
                  <span>choose a image</span>
                </label>
                <input type="file" id="photo" onChange={handleFileChange} />
              </div>
            </form>
          </div>
          <div id="Badge-container-main-2">
            <div id="Badge-container-main-2-options">
              <div>
                <button
                  onClick={() => setCircleImage(false)}
                  className={`${circleImage !== true ? "active" : ""}`}
                >
                  <span>Square</span>
                </button>
                <button
                  onClick={() => setCircleImage(true)}
                  className={`${circleImage === true ? "active" : ""}`}
                >
                  <span>Circle</span>
                </button>
              </div>

              <button id="downloadBtn" onClick={() => downLoadFunction()}>
                <div className="ico">
                  <MdSimCardDownload />
                </div>
                <span>Download Badge</span>
              </button>
            </div>
            <div id="Badge-container-main-2-image">
              <div id="Badge-container-main-2-image-container">
                {circleImage ? (
                  <div
                    className="Badge-container-main-2-image-item Badge-container-main-2-image-item-circle"
                    ref={componentCircle}
                  >
                    <img src={imageUrl} alt="" className="main-image" />
                    <img
                      src="https://res.cloudinary.com/da2lvku5u/image/upload/f_auto,q_auto/v1/devfest2023/uvdzhnqno3nqxpky8sq7"
                      alt="bottom"
                      className="circleBottom"
                    />
                  </div>
                ) : (
                  <div
                    className="Badge-container-main-2-image-item Badge-container-main-2-image-item-square"
                    ref={componentSquare}
                  >
                    <img src={imageUrl} alt="" className="main-image" />
                    <img
                      src="https://res.cloudinary.com/da2lvku5u/image/upload/f_auto,q_auto/v1/devfest2023/zji4flrs9cugx0ir5jyb"
                      alt="topLeft"
                      className="topLeft"
                    />
                    <img
                      src="https://res.cloudinary.com/da2lvku5u/image/upload/f_auto,q_auto/v1/devfest2023/haxs6mosoygdcrxlwxwy"
                      alt="topLeft"
                      className="topRight"
                    />
                    <img
                      src="https://res.cloudinary.com/da2lvku5u/image/upload/f_auto,q_auto/v1/devfest2023/kayvyakruugrhgzaytwm"
                      alt="topLeft"
                      className="topBottom"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Badge;
