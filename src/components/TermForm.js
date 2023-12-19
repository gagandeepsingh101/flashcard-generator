import { Field, FieldArray } from "formik";
import React from "react";
import toast from "react-hot-toast";
import { MdDelete, MdEdit } from "react-icons/md";
import UploadImageButton from "./UploadImageButton";

const TermForm = ({ errors, touched, values, updateImagePreview }) => {
	return (
		<FieldArray
			name="termInfo"
			render={(arrayhelper) => (
				<div className="bg-white h-fit px-3 py-2  lg:py-3 ">
					{values.map((term, index) => (
						<div
							key={index}
							className="w-full h-full flex flex-row flex-wrap gap-2 my-10 md:gap-6 md:items-center lg:gap-3">
							<h1 className="w-full text-center text-xl bg-red-500 text-white md:w-fit px-3 py-1 rounded-full h-fit">{index+1}</h1>
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
										"w-full border-2 focus:outline-none rounded-sm px-2 py-1 lg:py-2 lg:rounded-lg text-black " +
										(errors?.[index]?.termName && touched?.[index]?.termName
											? "border-red-500 text-red-500"
											: "border-black text-black")
									}
								/>
								<p className="h-5 text-red-500">
									{" "}
									{errors?.[index]?.termName && touched?.[index]?.termName
										? errors?.[index]?.termName
										: ""}
								</p>
							</div>
							<div className="w-full h-1/3 flex flex-col gap-2 md:w-1/2 lg:w-1/3 lg:h-full">
								<label
									htmlFor={`termInfo.${index}.termDescription`}
									className="text-gray-500 lg:text-lg">
									Enter Term Descritpion
								</label>
								<Field
									as="textarea"
									type="text"
									name={`termInfo.${index}.termDescription`}
									className={
										"w-full border-2 focus:outline-none rounded-sm px-2 py-1 lg:py-2 lg:rounded-lg text-black lg:max-h-24 " +
										(errors?.[index]?.termDescription &&
										touched?.[index]?.termDescription
											? "border-red-500 text-red-500"
											: "border-black text-black")
									}
								/>
								<p className="h-5 text-red-500">
									{errors?.[index]?.termDescription &&
									touched?.[index]?.termDescription
										? errors?.[index]?.termDescription
										: ""}
								</p>
							</div>
							<div className="w-7/12 h-1/3 flex flex-col md:w-40 lg:w-1/6 lg:h-full">
								<UploadImageButton
									values={term.termImage}
									updateImagePreview={updateImagePreview}
									index={index}
								/>
							</div>
							<div className="w-3/12 h-full flex flex-row md:w-20 md:flex-col lg:w-1/12 lg:h-full">
								<MdEdit className="text-blue-500 w-1/2 h-full p-1 rounded-full cursor-pointer md:w-5/12 lg:w-4/12"></MdEdit>
								<MdDelete
									onClick={() =>
										values.length <= 1
											? toast.error("Can't delete last term")
											: arrayhelper.remove(index)
									}
									className="text-red-500 w-1/2 h-full p-1 rounded-full cursor-pointer md:w-5/12 lg:w-4/12"></MdDelete>
							</div>
						</div>
					))}
					<button
						type="button"
						className=" text-red-500"
						onClick={() =>
							arrayhelper.push({
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
export default TermForm;
