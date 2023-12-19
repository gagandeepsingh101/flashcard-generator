import { Field } from "formik";
import React from "react";
import toast from "react-hot-toast";
import { MdDelete, MdOutlineUploadFile } from "react-icons/md";
const UploadImageButton = ({
	values,
	updateImagePreview,
	index
}) => {
	const handleImageChange = (e) => {
		const file = e.target.files[0];

		if (file) {
			if (
				file.type === "image/png" ||
				file.type === "image/jpeg" ||
				file.type === "image/webp" ||
				file.type === "image/jpg"
			) {
				if (index === undefined) {
					updateImagePreview(URL.createObjectURL(file));
				} else {
					updateImagePreview(URL.createObjectURL(file), index);
				}
			} else {
				toast.error("Please upload a valid image");
			}
		}
	};

	return (
		<>
			{values === "" ? (
				<button
					type="button"
					onClick={(e) =>
						e.target.parentElement.querySelector("input[type=file]").click()
					}
					className="w-fit h-fit p-1 border-blue-500 border-2 flex text-blue-500 rounded-sm items-center px-2 py-3 lg:gap-2 lg:text-lg lg:rounded-lg">
					<MdOutlineUploadFile className="text-2xl lg:text-3xl" />
					<span>{index !== undefined ? "Select Image" : "Upload Image"}</span>
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
				<div className="w-fit h-full flex ">
					<img
						src={values}
						alt="preview"
						className="w-2/3 h-1/2 object-cover  lg:w-fit lg:h-20"
					/>
					<MdDelete
						className={"text-2xl cursor-pointer text-red-500 "}
						onClick={() => {
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
