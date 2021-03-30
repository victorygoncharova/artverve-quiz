import React from "react";
import { Route, Switch } from "react-router-dom";
import FinishedQuiz from "./containers/FinishedQuiz/FinishedQuiz";
import Quiz from "./containers/Quiz/Quiz";
import StartQuiz from "./containers/StartQuiz/StartQuiz";
import Layout from "./hoc/Layout/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={StartQuiz} />
        <Route path="/quiz" component={Quiz} />
        <Route path="/finish-quiz" component={FinishedQuiz} />
      </Switch>
    </Layout>
  );
}

export default App;
