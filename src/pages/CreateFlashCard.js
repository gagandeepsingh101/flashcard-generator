import { Form, Formik } from "formik";
import React from "react";
import toast from "react-hot-toast";
import * as Yup from "yup";
import GroupForm from "../components/GroupForm";
import TermForm from "../components/TermForm";

const CreateFlashCard = () => {
	const validationCreateFlashcardData = Yup.object().shape({
		groupInfo: Yup.object().shape({
			groupName: Yup.string()
				.required("Required")
				.min(3, "Must be 3 characters or more")
				.max(20, "Must be 20 characters or less"),
			groupDescription: Yup.string()
				.required("Required")
				.min(15, "Must be 15 characters or more")
				.max(350, "Must be 350 characters or less"),
		}),
		termInfo: Yup.array().of(
			Yup.object().shape({
				termName: Yup.string()
					.required("Required")
					.min(3, "Must be 3 characters or more")
					.max(20, "Must be 20 characters or less"),
				termDescription: Yup.string()
					.required("Required")
					.min(15, "Must be 15 characters or more")
					.max(100, "Must be 100 characters or less"),
			})
		),
	});
	return (
		<div className="w-11/12 mx-auto h-[81vh] py-3 overflow-y-scroll scrollbar-thin scrollbar-thumb-red-500 scrollbar-thumb-rounded-full ">
			<Formik
				initialValues={{
					groupInfo: {
						groupName: "",
						groupDescription: "",
						groupImage: "",
					},
					termInfo: [{ termName: "", termDescription: "", termImage: "" }],
				}}
				validationSchema={validationCreateFlashcardData}
				onSubmit={(values, { resetForm }) => {
					console.log(values);
					if (values.groupInfo.groupImage === "") {
						toast.error("Please upload a valid image");
						return;
					}

					resetForm();
					toast.success("Flashcard created successfully");
				}}>
				{({ values, setFieldValue, errors, touched }) => (
					<Form className="flex flex-col gap-6">
						<GroupForm
							errors={errors.groupInfo}
							touched={touched.groupInfo}
							values={values.groupInfo}
							updateImagePreview={(value) => {
								setFieldValue("groupInfo.groupImage", value);
							}}
						/>

						<TermForm
							errors={errors.termInfo}
							touched={touched.termInfo}
							values={values.termInfo}
							updateImagePreview={(value, idx) => {
								setFieldValue(`termInfo[${idx}].termImage`, value);
							}}
						/>
						<button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded w-2/12 mx-auto" type="submit">Create Flashcard</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default CreateFlashCard;
