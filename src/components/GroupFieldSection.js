import { Field } from "formik";
import React from "react";
import UploadImageButton from "./UploadImageButton";

const GroupFieldSection = ({ errors, touched, values, updateImagePreview }) => {
	return (
		<div className="w-full flex flex-wrap mx-auto h-[45vh] bg-white px-2 py-3 rounded-md md:h-[40vh] lg:gap-4 lg:h-[35vh]">
			{/* Group Name and Image Section */}
			<div className="w-full h-1/2 flex flex-wrap gap-2 md:h-1/3 lg:gap-3 ">
				{/* Group Name Input */}
				<div className="w-full h-2/3 flex flex-col gap-1 md:w-1/2 md:h-full lg:h-fit ">
					<label
						htmlFor="groupInfo.groupName"
						className="text-gray-500 lg:text-lg">
						Enter Group Name
					</label>
					<Field
						placeholder="Write Group Name"
						type="text"
						name="groupInfo.groupName"
						className={
							"w-full border-2 focus:outline-none rounded-sm px-2 focus:border-black py-1 lg:py-2 md:rounded-md lg:rounded-lg " +
							(errors?.groupName && touched?.groupName
								? "border-red-500 text-red-500"
								: "border-grey-300 text-black")
						}
					/>
					<div className="h-5 text-red-500">
						{errors?.groupName && touched?.groupName ? errors?.groupName : ""}
					</div>
				</div>

				{/* Upload Image Button */}
				<div className="w-full md:w-1/4 md:h-fit md:my-auto lg:w-fit ">
					<UploadImageButton
						values={values.groupImage}
						updateImagePreview={updateImagePreview}
					/>
				</div>
			</div>

			{/* Group Description Section */}
			<div className="w-full h-28 flex flex-col gap-1 mt-2 lg:mt-0 lg:w-3/4 lg:h-full">
				<label
					htmlFor="groupInfo.groupDescription"
					className="lg:text-lg text-gray-500">
					Enter Group Description
				</label>
				<Field
					type="text"
					as="textarea"
					placeholder="Write Group Description"
					name="groupInfo.groupDescription"
					rows={3}
					className={
						"w-full border-2 focus:outline-none rounded-sm px-2 py-1 focus:border-black md:rounded-md lg:py-2 lg:rounded-lg " +
						(errors?.groupDescription && touched?.groupDescription
							? "border-red-500 text-red-500"
							: "border-grey-300 text-black")
					}
				/>
				<div className="text-red-500 h-5">
					{errors?.groupDescription &&
						touched?.groupDescription &&
						errors?.groupDescription}
				</div>
			</div>
		</div>
	);
};

export default GroupFieldSection;
