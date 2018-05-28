import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Answers from "../../answers/containers/Answers";
import Header from "./Header";
import {
  findQuestionById,
  findQuestionByIdUnload
} from "../actions/questions_actions";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Content = styled.main`
  flex-grow: 1;
`;

const Container = styled.div`
  padding: 40px 20px;
  max-width: 992px;
  margin: 0 auto;
`;

class QuestionDetails extends Component {
  componentDidMount = () => {
    const { id } = this.props.match.params;
    this.props.findQuestionById(id);
  };
  componentWillUnmount = () => {
    this.props.findQuestionByIdUnload();
  };
  renderLoading = () => {
    return this.props.loading ? <p>Loading ...</p> : null;
  };
  renderQuestion = () => {
    if (this.props.question === null) {
      return <p>No question</p>;
    } else {
      return (
        <React.Fragment>
          <Link to={this.props.location.pathname}>
            {this.props.question.title}
          </Link>
          <p>{this.props.question.body}</p>
        </React.Fragment>
      );
    }
  };
  render() {
    return (
      <Wrapper>
        <Header />
        <Content>
          <Container>
            {this.renderLoading()}
            {this.renderQuestion()}
            <Answers />
          </Container>
        </Content>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    question: state.questions.question,
    loading: state.questions.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    findQuestionById: id => dispatch(findQuestionById(id)),
    findQuestionByIdUnload: () => dispatch(findQuestionByIdUnload())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionDetails);
