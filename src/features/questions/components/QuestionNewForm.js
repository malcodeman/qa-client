import React from "react";
import * as Yup from "yup";
import styled from "styled-components";
import { withFormik, Form, Field } from "formik";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { createQuestion } from "../actions/questionsActionCreators";

const StyledForm = styled(Form)``;

const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
`;

const Label = styled.label`
  font-size: 0.8rem;
  color: ${props => props.theme.primary};
`;

const Input = styled(Field)`
  height: 36px;
  font-size: 0.8rem;
  outline: 0;
  padding: 0 10px;
  background-color: ${props => props.theme.backgroundSecondary};
  border-radius: ${props => props.theme.borderRadius};
  border: 1px solid ${props => props.theme.borderColor};
  color: ${props => props.theme.primary};
`;

const TextArea = styled(Field)`
  height: 256px;
  font-size: 0.8rem;
  resize: none;
  font-family: sans-serif;
  padding: 10px;
  background-color: ${props => props.theme.backgroundSecondary};
  border: 1px solid ${props => props.theme.borderColor};
  color: ${props => props.theme.primary};
`;

const Error = styled.div`
  font-size: 0.8rem;
  color: #fff;
  display: inline-block;
  padding: 4px;
  margin: 4px 0;
  align-self: flex-start;
  background-color: ${props => props.theme.error};
`;

const Button = styled.button`
  border: 0;
  padding: 0 10px;
  color: #fff;
  height: 36px;
  cursor: pointer;
  background-color: ${props => props.theme.brand};
  border-radius: ${props => props.theme.borderRadius};
`;

const FormikForm = props => {
  const { errors, touched } = props;

  return (
    <StyledForm>
      <FormItem>
        <Label>Title</Label>
        <Input type="text" name="title" />
        {touched.title && errors.title && <Error>{errors.title}</Error>}
      </FormItem>
      <FormItem>
        <TextArea name="body" component="textarea" />
        {touched.body && errors.body && <Error>{errors.body}</Error>}
      </FormItem>
      <Button>Post Your Question</Button>
    </StyledForm>
  );
};

const QuestionNewForm = withFormik({
  mapPropsToValues: props => ({
    title: props.title || "",
    body: props.body || ""
  }),
  validationSchema: Yup.object().shape({
    title: Yup.string().required("Title is missing"),
    body: Yup.string().required("Body is missing")
  }),
  handleSubmit(payload, bag) {
    bag.props.createQuestion(payload, {
      setSubmitting: bag.setSubmitting,
      history: bag.props.history
    });
  }
})(FormikForm);

export default withRouter(
  connect(
    null,
    { createQuestion }
  )(QuestionNewForm)
);
