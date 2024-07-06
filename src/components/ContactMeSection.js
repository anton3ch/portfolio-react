import React from "react";
import ReactDOM from "react-dom";
import { useFormik, FormikProvider, Form, useField } from "formik";
import "./../index.css";
import * as Yup from "yup";

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const TextInputLiveFeedback = ({ label, helpText, ...props }) => {
  const [field, meta] = useField(props);

  // Show inline feedback if EITHER
  // - the input is focused AND value is longer than 2 characters
  // - or, the has been visited (touched === true)
  const [didFocus, setDidFocus] = React.useState(false);
  const handleFocus = () => setDidFocus(true);
  const showFeedback =
    (!!didFocus && field.value.trim().length > 2) || meta.touched;

  return (
    <div
      className={`formElement ${
        showFeedback ? (meta.error ? "invalid" : "valid") : ""
      }`}
    >
      <div>
        <label htmlFor={props.id}>{label}</label>{" "}
      </div>
      {props.type === "textarea" ? (
        <textarea
          {...props}
          {...field}
          aria-describedby={`${props.id}-feedback ${props.id}-help`}
          onFocus={handleFocus}
          className="formComment"
          style={
            showFeedback && meta.error ? { border: "1px solid red" } : null
          }
        />
      ) : (
        <input
          {...props}
          {...field}
          aria-describedby={`${props.id}-feedback ${props.id}-help`}
          onFocus={handleFocus}
          style={
            showFeedback && meta.error ? { border: "1px solid red" } : null
          }
        />
      )}
      {showFeedback ? (
        <div
          id={`${props.id}-feedback`}
          aria-live="polite"
          className="feedback text-sm"
        >
          {meta.error ? meta.error : "✓"}
        </div>
      ) : (
        <text className="placeholderForm"> </text>
      )}
      <div className="text-xs" id={`${props.id}-help`} tabIndex="-1">
        {helpText}
      </div>
    </div>
  );
};

const LandingSection = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      comment: "",
    },
    onSubmit: async (values, { resetForm }) => {
      await sleep(500);
      alert(JSON.stringify(values, null, 2));
      resetForm();
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
      email: Yup.string().email("Invalid email").required("Required"),
      comment: Yup.string()
        .min(10, "Must be at least 10 characters!")
        .required("Required"),
      // username: Yup.string()
      //   .min(8, "Must be at least 8 characters")
      //   .max(20, "Must be less  than 20 characters")
      //   .required("Username is required")
      //   .matches(
      //     /^[a-zA-Z0-9]+$/,
      //     "Cannot contain special characters or spaces"
      //   ),
    }),
  });

  return (
    <div className="contact">
      <h2 className="sectionTitle">Contact me</h2>
      <FormikProvider value={formik}>
        <div className="card cardForm">
          <Form className="formBody">
            <TextInputLiveFeedback
              label="Name"
              id="name"
              name="name"
              type="text"
            />
            <TextInputLiveFeedback
              label="Email"
              id="email"
              name="email"
              type="text"
            />
            <TextInputLiveFeedback
              label="Comment"
              id="comment"
              name="comment"
              // helpText="Must be at least 10 characters."
              type="textarea"
            />

            <button type="submit" className="formButton">
              Submit
            </button>
            {/* <button type="reset">Reset</button> */}
          </Form>
        </div>
      </FormikProvider>
    </div>
  );
};

export default LandingSection;
