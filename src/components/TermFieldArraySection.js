import { FieldArray } from "formik";
import React, { useState } from "react";
import toast from "react-hot-toast";
import SingleTermFieldItem from "./SingleTermFieldItem";

// TermFieldArraySection Component
const TermFieldArraySection = ({
  errors,
  touched,
  values,
  updateImagePreview,
}) => {
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
            <SingleTermFieldItem
              arrayHelper={arrayHelper}
              key={index}
              index={index}
              term={term}
              errors={errors}
              touched={touched}
              values={values}
              updateImagePreview={updateImagePreview}
              editMode={editMode}
              handleEditClick={handleEditClick}
            />
          ))}

          {/* Button to add more terms */}
          <button
            type="button"
            className="text-blue-500 font-bold hover:text-blue-700 md:text-lg"
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

export default TermFieldArraySection;
