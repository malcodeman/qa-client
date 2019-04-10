import React from "react";
import * as Yup from "yup";
import styled from "styled-components";
import { withFormik, Form, Field } from "formik";

const Input = styled(Field)`
  height: 36px;
  font-size: 0.8rem;
  outline: 0;
  margin: 0;
  border: 0;
  width: 100%;
  padding: 0 10px;
  background-color: ${props => props.theme.backgroundSecondary};
  color: ${props => props.theme.primary};
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
