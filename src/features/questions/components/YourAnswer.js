import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import styled from "styled-components";

import Loader from "../../loader/components/Loader";

const StyledForm = styled(Form)`
  background-color: #fff;
  padding: 24px 0;
`;

const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const Heading = styled.h2`
  color: rgba(0, 0, 0, 0.8);
  font-size: 1.4rem;
  font-weight: normal;
`;

const TextArea = styled(Field)`
  border: 1px solid rgba(0, 0, 0, 0.1);
  height: 256px;
  font-size: 0.8rem;
  font-family: sans-serif;
  resize: none;
  padding: 4px;
`;

const Error = styled.div`
  font-size: 0.8rem;
  color: #fff;
  background-color: #b00e23;
  padding: 4px;
  margin: 4px 0;
  align-self: flex-start;
`;

const Submit = styled.button`
  border: 0;
  padding: 0 10px;
  border-radius: 3px;
  color: #fff;
  background-color: #007aff;
  height: 36px;
  cursor: pointer;
`;

const FormikForm = props => {
  const { errors, touched, isSubmitting } = props;

  return (
    <StyledForm>
      <Heading>Your Answer</Heading>
      <FormItem>
        <TextArea name="body" component="textarea" />
        {touched.body && errors.body && <Error>{errors.body}</Error>}
      </FormItem>
      <Submit disabled={isSubmitting}>
        {isSubmitting ? <Loader /> : "Post Your Answer"}
      </Submit>
    </StyledForm>
  );
};

const YourAnswer = withFormik({
  validationSchema: Yup.object().shape({
    body: Yup.string().required("Body is missing")
  }),
  mapPropsToValues: props => ({
    questionId: props.questionId || "",
    body: props.body || ""
  }),
  handleSubmit(payload, bag) {
    bag.props.createAnswer(payload, {
      setSubmitting: bag.setSubmitting,
      resetForm: bag.resetForm
    });
  }
})(FormikForm);

export default YourAnswer;
