import { Field } from "formik";
import React from "react";
import UploadImageButton from "./UploadImageButton";
import toast from "react-hot-toast";
import { MdEdit, MdDelete } from "react-icons/md";

// Component for rendering a single term field in the form
const SingleTermFieldItem = ({
	term,
	index,
	errors,
	touched,
	values,
	updateImagePreview,
	editMode,
	handleEditClick,
	arrayHelper,
}) => {
	return (
		<div
			key={index}
			className="w-full h-full flex flex-row flex-wrap gap-2 my-6 md:gap-6 md:items-center lg:gap-3">
			{/* Term index display */}
			<h1 className="w-full text-center text-xl bg-red-500 text-white md:w-fit px-3 py-1 rounded-full h-fit">
				{index + 1}
			</h1>

			{/* Term Name Section */}
			<div className="w-full h-1/3 flex md:w-3/4 lg:h-full lg:w-1/3 flex-col gap-2">
				<label
					htmlFor={`termInfo.${index}.termName`}
					className="text-gray-500 lg:text-lg">
					Enter Term Name
				</label>
				<Field
					placeholder="Write Term Name"
					type="text"
					name={`termInfo.${index}.termName`}
					className={
						"w-full border-2 focus:outline-none rounded-sm px-2 focus:border-black py-1 lg:py-2 md:rounded-md lg:rounded-lg " +
						(errors?.[index]?.termName && touched?.[index]?.termName
							? "border-red-500 text-red-500"
							: "border-gray-300 text-black")
					}
					readOnly={editMode[index]}
				/>
				<p className="h-5 text-red-500">
					{errors?.[index]?.termName && touched?.[index]?.termName
						? errors?.[index]?.termName
						: ""}
				</p>
			</div>

			{/* Term Description Section */}
			<div className="w-full h-1/3 flex flex-col gap-2 md:w-1/2 lg:w-1/3 lg:h-full">
				<label
					htmlFor={`termInfo.${index}.termDescription`}
					className="text-gray-500 lg:text-lg">
					Enter Term Description
				</label>
				<Field
					as="textarea"
					placeholder="Enter Term Description"
					type="text"
					name={`termInfo.${index}.termDescription`}
					className={
						"w-full border-2 focus:outline-none rounded-sm px-2 py-1 focus:border-black lg:py-2 md:rounded-md lg:rounded-lg lg:max-h-24 " +
						(errors?.[index]?.termDescription &&
						touched?.[index]?.termDescription
							? "border-red-500 text-red-500"
							: "border-gray-300 text-black")
					}
					readOnly={editMode[index]}
				/>
				<p className="h-5 text-red-500">
					{errors?.[index]?.termDescription && touched?.[index]?.termDescription
						? errors?.[index]?.termDescription
						: ""}
				</p>
			</div>

			{/* Term Image Section */}
			<div className="w-7/12 h-1/3 flex flex-col md:w-40 lg:w-1/6 lg:h-full">
				<UploadImageButton
					isDisabled={editMode[index]}
					values={term.termImage}
					updateImagePreview={updateImagePreview}
					index={index}
				/>
			</div>

			{/* Edit and Delete Buttons */}
			<div className="w-3/12 h-full flex flex-row md:w-20 lg:w-1/12 lg:h-full">
				<MdEdit
					onClick={() => handleEditClick(index)}
					className="text-blue-500 w-1/2 h-full p-1 rounded-full cursor-pointer md:w-5/12 lg:w-4/12 hover:text-blue-800"
				/>
				<MdDelete
					onClick={() =>
						values.length <= 1
							? toast.error("Can't delete last term")
							: arrayHelper.remove(index)
					}
					className="text-red-500 w-1/2 h-full p-1 rounded-full cursor-pointer md:w-5/12 lg:w-4/12 hover:text-red-800"
				/>
			</div>
		</div>
	);
};

export default SingleTermFieldItem;
