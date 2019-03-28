import React, { Component } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import styled from "styled-components";

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
  resize: none;
  font-family: sans-serif;
  padding: 4px;
`;

const Error = styled.div`
  font-size: 0.8rem;
  color: #fff;
  background-color: #b00e23;
  display: inline-block;
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
  height: 28px;
  cursor: pointer;
`;

class FormikForm extends Component {
  render() {
    const { errors, touched } = this.props;
    return (
      <StyledForm>
        <Heading>Your Answer</Heading>
        <FormItem>
          <TextArea name="body" component="textarea" />
          {touched.body && errors.body && <Error>{errors.body}</Error>}
        </FormItem>
        <Submit>Post Your Answer</Submit>
      </StyledForm>
    );
  }
}

const YourAnswer = withFormik({
  mapPropsToValues: props => ({
    questionId: props.questionId || "",
    body: props.body || ""
  }),
  validationSchema: Yup.object().shape({
    body: Yup.string().required("Body is missing")
  }),
  mapValuesToPayload: values => ({
    questionId: values.questionId,
    body: values.body
  }),
  handleSubmit(payload, bag) {
    bag.setSubmitting(false);
    bag.props.createAnswer(payload);
    bag.resetForm();
  }
})(FormikForm);

export default YourAnswer;
