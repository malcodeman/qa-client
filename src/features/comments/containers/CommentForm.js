import React, { Component } from "react";
import * as Yup from "yup";
import styled from "styled-components";
import { withFormik, Form, Field } from "formik";

const Input = styled(Field)`
  color: #262626;
  height: 36px;
  font-size: 0.8rem;
  padding: 0;
  outline: 0;
  margin: 0;
  border: 0;
  width: 100%;
`;

class FormikForm extends Component {
  render() {
    return (
      <Form>
        <Input type="text" name="body" placeholder="add a comment" />
      </Form>
    );
  }
}

const CommentForm = withFormik({
  mapPropsToValues: props => ({
    body: props.body || "",
    id: props.questionId || props.answerId || "",
    answer: Boolean(props.answerId)
  }),
  validationSchema: Yup.object().shape({
    body: Yup.string().required("Body is missing")
  }),
  mapValuesToPayload: values => ({
    id: values.questionId || values.answerId,
    body: values.body || "",
    answer: values.answer
  }),
  handleSubmit(payload, bag) {
    bag.setSubmitting(false);
    bag.props.createComment(payload);
    bag.resetForm();
  }
})(FormikForm);

export default CommentForm;
