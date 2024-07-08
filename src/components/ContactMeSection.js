import React, { useState } from "react";
import { useFormik, FormikProvider, Form, useField } from "formik";
// import "./../index.css";
import "./Styles/contactMeStyles.css"; // Import the new CSS file
import * as Yup from "yup";

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const TextInputLiveFeedback = ({ label, helpText, ...props }) => {
  const [field, meta] = useField(props);
  const [didFocus, setDidFocus] = React.useState(false);
  const [showFeedback, setShowFeedback] = React.useState(false);
  const handleFocus = () => {
    setDidFocus(true);
    console.log("hello", meta.error);
  };
  // const showFeedback =
  //   (didFocus && field.value.trim().length > 0) || meta.touched;

  React.useEffect(() => {
    console.log("hello", meta.error);
    if ((didFocus && field.value.trim().length > 0) || meta.touched) {
      setShowFeedback(true);
    }
  }, [didFocus, meta.touched, field.value, meta.error]);

  return (
    <div
      className={`formElement ${
        showFeedback
          ? meta.error || meta.error === undefined
            ? "invalid"
            : "valid"
          : ""
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
          onFocus={() => setDidFocus(true)}
          className={`formComment ${
            didFocus
              ? meta.error || field.value.trim().length < 1
                ? "invalid"
                : "valid"
              : ""
          }`}
        />
      ) : (
        <input
          {...props}
          {...field}
          aria-describedby={`${props.id}-feedback ${props.id}-help`}
          onFocus={() => setDidFocus(true)}
          className={`${
            didFocus
              ? meta.error || field.value.trim().length < 1
                ? "invalid"
                : "valid"
              : ""
          }`}
        />
      )}

      <div
        id={`${props.id}-feedback`}
        aria-live="polite"
        className={`feedback text-sm ${showFeedback ? "" : "hidden"}`}
      >
        {meta.error ? meta.error : "✓"}
      </div>

      <div className="text-xs" id={`${props.id}-help`} tabIndex="-1">
        {helpText}
      </div>
    </div>
  );
};

const LandingSection = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      comment: "",
    },
    onSubmit: async (values, { resetForm }) => {
      setIsLoading(true);
      await sleep(500);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "2f782ea6-4b9d-48e6-be85-e8c784d9a606",
          ...values,
        }),
      });

      setIsLoading(false);

      if (response.ok) {
        setFormSubmitted(true);
        resetForm();
      } else {
        alert("There was an error submitting the form.");
      }
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
    }),
  });

  return (
    <div className="contact">
      <h2 className="sectionTitle">CONTACT ME</h2>
      <FormikProvider value={formik}>
        <div className="card cardForm">
          {formSubmitted ? (
            <div className="formSuccess">
              <h3 className="thankYouMessage">Thank You!</h3>
              <div className="successMessage">
                <div className="checkmark">✓</div>
                <h4>The form has been submitted!</h4>
              </div>

              <button
                type="button"
                className="formButton"
                onClick={() => setFormSubmitted(false)}
              >
                Submit Another Form
              </button>
            </div>
          ) : isLoading ? (
            <div className="loading">
              <div className="spinner"></div>
            </div>
          ) : (
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
                type="textarea"
              />
              <button type="submit" className="formButton">
                Submit
              </button>
            </Form>
          )}
        </div>
      </FormikProvider>
    </div>
  );
};

export default LandingSection;
