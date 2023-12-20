import { Field, FieldArray } from "formik";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { MdDelete, MdEdit } from "react-icons/md";
import UploadImageButton from "./UploadImageButton";

// TerFieldSection Component
const TerFieldSection = ({ errors, touched, values, updateImagePreview }) => {
	// State to track edit mode for each term
	const [editMode, setEditMode] = useState([]);

	// Function to handle the click event for the edit button
	const handleEditClick = (index) => {
		// Toggle edit mode and show toast notification
		if (editMode[index]) {
			toast.success(`Edit mode enabled for Term ${index + 1}`);
		} else {
			toast.success(`Edit mode disabled for Term ${index + 1}`);
		}

		// Update the edit mode state
		setEditMode((prevEditModes) => {
			const newEditModes = [...prevEditModes];
			newEditModes[index] = !newEditModes[index];
			return newEditModes;
		});
	};

	return (
		// FieldArray component to dynamically render term sections
		<FieldArray
			disabled={true}
			name="termInfo"
			render={(arrayHelper) => (
				<div className="bg-white h-fit px-3 py-2 lg:py-3 rounded-xl">
					{/* Mapping over values to render each term section */}
					{values.map((term, index) => (
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
									type="text"
									name={`termInfo.${index}.termName`}
									className={
										"w-full border-2 focus:outline-none rounded-sm px-2 py-1 lg:py-2 md:rounded-md lg:rounded-lg " +
										(errors?.[index]?.termName && touched?.[index]?.termName
											? "border-red-500 text-red-500"
											: "border-black text-black")
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
									type="text"
									name={`termInfo.${index}.termDescription`}
									className={
										"w-full border-2 focus:outline-none rounded-sm px-2 py-1 lg:py-2 md:rounded-md lg:rounded-lg lg:max-h-24 " +
										(errors?.[index]?.termDescription &&
										touched?.[index]?.termDescription
											? "border-red-500 text-red-500"
											: "border-black text-black")
									}
									readOnly={editMode[index]}
								/>
								<p className="h-5 text-red-500">
									{errors?.[index]?.termDescription &&
									touched?.[index]?.termDescription
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
									className="text-blue-500 w-1/2 h-full p-1 rounded-full cursor-pointer md:w-5/12 lg:w-4/12"
								/>
								<MdDelete
									onClick={() =>
										values.length <= 1
											? toast.error("Can't delete last term")
											: arrayHelper.remove(index)
									}
									className="text-red-500 w-1/2 h-full p-1 rounded-full cursor-pointer md:w-5/12 lg:w-4/12"
								/>
							</div>
						</div>
					))}

					{/* Button to add more terms */}
					<button
						type="button"
						className="text-blue-500 font-bold"
						onClick={() =>
							arrayHelper.push({
								termName: "",
								termDescription: "",
								termImage: "",
							})
						}>
						Add More+
					</button>
				</div>
			)}
		/>
	);
};

export default TerFieldSection;
