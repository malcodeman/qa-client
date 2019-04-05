import React from "react";
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

const FormikForm = () => {
  return (
    <Form>
      <Input type="text" name="body" placeholder="add a comment" />
    </Form>
  );
};

const CommentForm = withFormik({
  validationSchema: Yup.object().shape({
    body: Yup.string().required("Body is missing")
  }),
  mapPropsToValues: props => ({
    id: props.id || "",
    body: props.body || ""
  }),
  handleSubmit(payload, bag) {
    bag.props.createComment(payload);
    bag.resetForm();
  }
})(FormikForm);

export default CommentForm;
