import Users from "../../features/users/containers/Users";
import User from "../../features/users/containers/Root";
import QuestionDetails from "../../features/questions/containers/QuestionDetails";
import QuestionNew from "../../features/questions/containers/QuestionNew";
import Root from "../../features/Root";

export default [
  {
    path: "/",
    component: Root,
    exact: true
  },
  {
    path: "/new-question",
    component: QuestionNew,
    private: true
  },
  {
    path: "/questions/:id",
    component: QuestionDetails,
    private: true
  },
  {
    path: "/users",
    component: Users,
    exact: true,
    private: true
  },
  {
    path: "/users/:username",
    component: User,
    private: true
  }
];
