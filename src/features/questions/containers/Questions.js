import React, { Component } from "react";
import { connect } from "react-redux";

import QuestionLoading from "../components/QuestionLoading";
import Question from "../components/Question";
import { getQuestions } from "../actions/questionsActionCreators";

class Questions extends Component {
  componentDidMount = () => {
    const { getQuestions } = this.props;

    getQuestions();
  };

  render() {
    const { loading, questions } = this.props;

    return (
      <>
        {questions.length === 0 && loading ? <QuestionLoading /> : null}
        {questions.map(question => {
          return (
            <Question
              key={question.id}
              id={question.id}
              title={question.title}
              body={question.body}
              upvotes={question.upvotesCount}
              answers={question.answersCount}
              author={question.author}
              createdAt={question.createdAt}
            />
          );
        })}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    questions: state.questions.questions,
    loading: state.questions.loading
  };
};

export default connect(
  mapStateToProps,
  { getQuestions }
)(Questions);
