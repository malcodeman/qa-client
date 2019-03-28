import React from "react";
import * as Yup from "yup";
import styled from "styled-components";
import { withFormik, Form, Field } from "formik";
import { withRouter } from "react-router-dom";

const StyledForm = styled(Form)`
  background-color: #fff;
`;

const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const Label = styled.label`
  font-size: 0.8rem;
`;

const Input = styled(Field)`
  color: #262626;
  height: 36px;
  font-size: 0.8rem;
  padding: 0 4px;
  outline: 0;
  border-radius: 2px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  margin-bottom: 2px;
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

const Button = styled.button`
border: 0;
padding: 0 10px;
border-radius: 3px;
color: #fff;
background-color: #007aff;
height: 28px;
cursor: pointer;
}
`;

class FormikForm extends React.Component {
  render() {
    const { errors, touched } = this.props;

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
  }
}

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

export default withRouter(QuestionNewForm);
