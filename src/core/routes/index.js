import Questions from "../../features/questions/containers/Questions";
import Users from "../../features/users/containers/Users";
import User from "../../features/users/containers/Root";
import QuestionDetails from "../../features/questions/containers/QuestionDetails";
import QuestionNew from "../../features/questions/containers/QuestionNew";
import Login from "../../features/auth/components/Login";
import Signup from "../../features/auth/components/Signup";

export default [
  {
    path: "/",
    component: Questions,
    exact: true,
    private: true
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
  },
  {
    path: "/login",
    component: Login
  },
  {
    path: "/signup",
    component: Signup
  }
];
