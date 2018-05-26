import React, { Component } from "react";
import { withFormik, Form, Field } from "formik";
import Yup from "yup";
import styled from "styled-components";

const StyledForm = styled(Form)`
  background-color: #fff;
  display: flex;
  flex-direction: column;
`;

const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
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

const ErrorMessage = styled.span`
  font-size: 0.8rem;
  color: #b00e23;
`;

class FormikForm extends Component {
  componentDidUpdate = prevProps => {
    if (
      prevProps.create_question_trigger === false &&
      prevProps.create_question_trigger !== this.props.create_question_trigger
    ) {
      this.props.submitForm();
      this.props.createQuestionClear();
    }
  };
  render() {
    const { errors, touched } = this.props;
    return (
      <StyledForm>
        <FormItem>
          <Input type="text" name="content" />
          {touched.content &&
            errors.content && <ErrorMessage>{errors.content}</ErrorMessage>}
        </FormItem>
      </StyledForm>
    );
  }
}

const QuestionNewForm = withFormik({
  mapPropsToValues: props => ({
    content: props.content || ""
  }),
  validationSchema: Yup.object().shape({
    content: Yup.string().required("Question can't be empty")
  }),
  handleSubmit(payload, bag) {
    bag.setSubmitting(false);
    bag.props.createQuestion(payload);
    bag.resetForm();
  }
})(FormikForm);

export default QuestionNewForm;
