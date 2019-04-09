import React, { Component } from "react";
import { connect } from "react-redux";

import QuestionLoading from "../components/QuestionLoading";
import Question from "../components/Question";
import { getQuestions } from "../actions/questionsActionCreators";

class Questions extends Component {
  componentDidMount = () => {
    this.props.getQuestions();
  };

  renderLoading = () => {
    return this.props.loading ? <QuestionLoading /> : null;
  };

  renderQuestions = () => {
    if (this.props.questions.length === 0 && this.props.loading === false) {
      return <p>No questions</p>;
    } else {
      return this.props.questions.map(question => {
        return (
          <Question
            key={question.id}
            id={question.id}
            title={question.title}
            body={question.body}
            upvotes={question.upvotesCount}
            answers={question.answersCount}
            author={question.user.username}
            createdAt={question.createdAt}
          />
        );
      });
    }
  };

  render() {
    const { questions } = this.props;

    return (
      <>
        {questions.map(question => {
          return (
            <Question
              key={question.id}
              id={question.id}
              title={question.title}
              body={question.body}
              upvotes={question.upvotesCount}
              answers={question.answersCount}
              author={question.user.username}
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
