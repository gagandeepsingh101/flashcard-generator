import { Field } from "formik";
import React from "react";
import UploadImageButton from "./UploadImageButton";

const GroupForm = ({ errors, touched, values, updateImagePreview }) => {
	return (
		<div className="w-full flex flex-col mx-auto h-[45vh] bg-white px-2 py-3  rounded-md lg:justify-center lg:gap-4 lg:h-[35vh]">
			<div className="w-full h-2/3 flex flex-col justify-between gap-2 lg:flex-row lg:h-1/3 lg:gap-3 lg:justify-start lg:items-center">
				<div className="w-full h-2/3 flex flex-col gap-1 lg:w-1/2 lg:h-fit ">
					<label
						htmlFor="groupInfo.groupName"
						className="text-gray-500 lg:text-lg">
						Enter Group Name
					</label>
					<Field
						type="text"
						name="groupInfo.groupName"
						className={
							"w-full border-2 focus:outline-none rounded-sm px-2 py-1 lg:py-2 lg:rounded-lg " +
							(errors?.groupName && touched?.groupName
								? "border-red-500 text-red-500"
								: "border-black text-black")
						}
					/>
					<div className="h-5 text-red-500">
						{errors?.groupName && touched?.groupName ? errors?.groupName : ""}
					</div>
				</div>
				<div className="w-full h-12 flex flex-col lg:w-fit lg:h-fit ">
					<UploadImageButton
						values={values.groupImage}
						updateImagePreview={updateImagePreview}
					/>
				</div>
			</div>
			<div className="w-full h-28 flex flex-col gap-1 mt-2 lg:mt-0 lg:w-1/2 lg:h-1/2">
				<label
					htmlFor="groupInfo.groupDescription"
					className="lg:text-lg text-gray-500">
					Enter Group Description
				</label>
				<Field
					type="text"
					as="textarea"
					name="groupInfo.groupDescription"
					rows={3}
					className={
						" w-full border-2 focus:outline-none rounded-sm px-2 py-1 lg:py-2 lg:rounded-lg " +
						(errors?.groupDescription && touched?.groupDescription
							? "border-red-500 text-red-500"
							: "border-black text-black")
					}
				/>
				{
					<div className="text-red-500 h-5">
						{errors?.groupDescription &&
							touched?.groupDescription &&
							errors?.groupDescription}
					</div>
				}
			</div>
		</div>
	);
};
export default GroupForm;
