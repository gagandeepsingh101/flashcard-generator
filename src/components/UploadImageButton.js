import { Field } from "formik";
import React from "react";
import toast from "react-hot-toast";
import { MdOutlineUploadFile } from "react-icons/md";
import { RiCloseCircleFill } from "react-icons/ri";

// ... (your existing imports)

const UploadImageButton = ({ values, updateImagePreview, index }) => {
	// Handler for when a new image is selected
	const handleImageChange = (e) => {
	  const file = e.target;
  
	  if (file.files[0]) {
		// Check if the selected file is a valid image type
		const reader = new FileReader();
		if (
		  file.files[0].type === "image/png" ||
		  file.files[0].type === "image/jpeg" ||
		  file.files[0].type === "image/webp" ||
		  file.files[0].type === "image/jpg"
		) {
		  // Update image preview based on whether index is defined
		  reader.onload = (e) => {
			if (index === undefined) {
			  updateImagePreview(e.target.result);
			} else {
			  updateImagePreview(e.target.result, index);
			}
		  };
  
		  // Read the content of the selected file as a data URL
		  reader.readAsDataURL(file.files[0]);
		} else {
		  // Display an error toast for invalid image type
		  toast.error("Please upload a valid image");
		}
	  }
	};
  
	return (
	  <>
		{values === "" ? (
		  // Button to trigger file input when no image is present
		  <button
			type="button"
			onClick={(e) =>
			  e.target.parentElement.querySelector("input[type=file]").click()
			}
			className="w-fit h-fit p-1 border-blue-500 border-2 flex text-blue-500 rounded-sm items-center px-2 py-3 md:rounded-md lg:gap-2 lg:text-lg lg:rounded-lg"
		  >
			<MdOutlineUploadFile
			  aria-disabled={true}
			  className={
				"text-2xl lg:text-3xl " +
				(index !== undefined ? "hidden" : "block")
			  }
			/>
			<span>{index !== undefined ? "Select Image" : "Upload Image"}</span>
			{/* File input field (hidden) */}
			<Field
			  className="hidden"
			  type="file"
			  name={
				index !== undefined
				  ? `termInfo[${index}].termImage`
				  : "groupInfo.groupImage"
			  }
			  onChange={handleImageChange}
			/>
		  </button>
		) : (
		  // Display the uploaded image and a close button
		  <div className="w-fit h-full flex">
			<img
			  src={values}
			  alt="preview"
			  className="w-2/3 h-1/2 object-cover  lg:w-fit lg:h-20"
			/>
			<RiCloseCircleFill
			  className={"text-2xl cursor-pointer text-red-500 "}
			  onClick={() => {
				// Clear image preview based on whether index is defined
				if (index === undefined) {
				  updateImagePreview("");
				} else {
				  updateImagePreview("", index);
				}
			  }}
			/>
		  </div>
		)}
	  </>
	);
  };
  
  export default UploadImageButton;
  