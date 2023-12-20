import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import { useSubmitFlashcardData } from "../hooks/useSubmitFlashcardData";
import GroupFieldSection from "../components/GroupFieldSection";
import TerFieldSection from "../components/TermFieldSection";
import { useDispatch } from "react-redux";

const CreateFlashCard = () => {

  
  // Custom hook for handling flashcard data submission
  const handleSubmit = useSubmitFlashcardData;
  const dispatch = useDispatch();

  // Validation schema using Yup
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
    <div className="w-11/12 mx-auto h-[81vh] py-3 overflow-y-scroll scrollbar-thin scrollbar-thumb-red-500 scrollbar-thumb-rounded-full">
      {/* Formik wrapper for form handling */}
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
          // Call the custom submit function with values and form reset
          handleSubmit(values, resetForm,dispatch);
        }}
      >
        {({ values, setFieldValue, errors, touched }) => (
          <Form className="flex flex-col gap-6">
            {/* Group Field Section */}
            <GroupFieldSection
              errors={errors.groupInfo}
              touched={touched.groupInfo}
              values={values.groupInfo}
              updateImagePreview={(value) => {
                setFieldValue("groupInfo.groupImage", value);
              }}
            />

            {/* Term Field Section */}
            <TerFieldSection
              errors={errors.termInfo}
              touched={touched.termInfo}
              values={values.termInfo}
              updateImagePreview={(value, idx) => {
                setFieldValue(`termInfo[${idx}].termImage`, value);
              }}
            />

            {/* Submit Button */}
            <button
              className="w-2/3 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded md:w-4/12 lg:w-2/12 mx-auto"
              type="submit"
            >
              Create Flashcard
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CreateFlashCard;
