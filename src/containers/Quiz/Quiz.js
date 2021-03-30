import React, { Component } from "react";
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";
import FinishedQuiz from "../../containers/FinishedQuiz/FinishedQuiz";
import {
  img1,
  img10,
  img11,
  img13,
  img14,
  img15,
  img16,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img9,
} from "../../images/index";
import styles from "./Quiz.module.scss";

class Quiz extends Component {
  state = {
    results: {},
    isFinished: false,
    activeQuestion: 0,
    answerState: null,
    showRight: false,
    quiz: [
      {
        id: 1,
        question:
          'К какому периоду творчества Пабло Пикассо относится "Девочка на шаре"?',
        rightAnswerId: 2,
        image: img1,
        answers: [
          { text: "голубой период", id: 1 },
          { text: "розовый период", id: 2 },
          { text: "сюрреализм", id: 3 },
        ],
      },
      {
        id: 2,
        question: "В каком году родился Иван Айвазовский?",
        rightAnswerId: 1,
        image: img2,
        answers: [
          { text: "1817", id: 1 },
          { text: "1905", id: 2 },
          { text: "1801", id: 3 },
        ],
      },
      {
        id: 3,
        question: "Кто создал логотип для испанской компании «Chupa Chups»?",
        rightAnswerId: 2,
        image: img3,
        answers: [
          { text: "Энди Уорхол", id: 1 },
          { text: "Сальвадор Дали", id: 2 },
          { text: "Казимир Малевич", id: 3 },
        ],
      },
      {
        id: 4,
        question: "В каком году родился Франсиско Гойя?",
        rightAnswerId: 1,
        image: img4,
        answers: [
          { text: "1746", id: 1 },
          { text: "1801", id: 2 },
          { text: "1703", id: 3 },
        ],
      },
      {
        id: 5,
        question:
          "Как называлась последняя картина мексиканской художницы Фриды Кало?",
        rightAnswerId: 3,
        image: img5,
        answers: [
          { text: "Всего-то несколько царапин", id: 1 },
          { text: "Автопортрет в бархатном платье", id: 2 },
          { text: "Да здравствует жизнь!", id: 3 },
        ],
      },
      {
        id: 6,
        question: `В какой период жизни Сальвадор Дали создал картину "Жираф в огне"?`,
        rightAnswerId: 2,
        image: img15,
        answers: [
          { text: "После разрыва с отцом", id: 1 },
          { text: "Перед эмиграцией в США", id: 2 },
          { text: "После возвращения в Испанию!", id: 3 },
        ],
      },
      {
        id: 7,
        question: `Где хранится "Мона Лиза"?`,
        rightAnswerId: 3,
        image: img9,
        answers: [
          { text: "Британский музей", id: 1 },
          { text: "Лондонская национальная галерея", id: 2 },
          { text: "Лувр", id: 3 },
        ],
      },
      {
        id: 8,
        question: "Как называли Густава Климта?",
        rightAnswerId: 1,
        image: img14,
        answers: [
          { text: "Дамский художник", id: 1 },
          { text: "Австрийский гений", id: 2 },
          { text: "Основоположник эротизма", id: 3 },
        ],
      },
      {
        id: 9,
        question: `В каком стиле написана картина "Фрида и Диего Ривера" Фриды Кало?`,
        rightAnswerId: 2,
        image: img16,
        answers: [
          { text: "Примитивизм", id: 1 },
          { text: "Наивное искусство", id: 2 },
          { text: "Самодеятельное искусство", id: 3 },
        ],
      },
      {
        id: 10,
        question: `Что изображено на картине Ван Гога "Звездная ночь"?`,
        rightAnswerId: 1,
        image: img10,
        answers: [
          { text: "Вид из окна спальни Ван Гога", id: 1 },
          { text: "Родной город художника", id: 2 },
          { text: "Город, в котором художник хотел жить", id: 3 },
        ],
      },
      {
        id: 11,
        question: "Как называется картина Шишкина?",
        rightAnswerId: 1,
        image: img11,
        answers: [
          { text: "Медведи в дремучем лесу", id: 1 },
          { text: "Утро в сосновом лесу", id: 2 },
          { text: "Резвящиеся медвежата", id: 3 },
        ],
      },
      {
        id: 12,
        question: "Какой из представленных фактов о картине Репина правдивый?",
        rightAnswerId: 2,
        image: img13,
        answers: [
          { text: "Репин придумал сюжет картины во сне", id: 1 },
          {
            text: "Натурщики персонажей - известные современники Репина",
            id: 2,
          },
          { text: "Картина хранится в Эрмитаже", id: 3 },
        ],
      },
      {
        id: 13,
        question: `Кому приписывается авторство картины "Мадонна Литта"?`,
        rightAnswerId: 3,
        image: img6,
        answers: [
          { text: "Караваджо", id: 1 },
          { text: "Рембрандт", id: 2 },
          { text: "Леонардо да Винчи", id: 3 },
        ],
      },
      {
        id: 14,
        question: `Какой из представленных фактов о картине "Неравный брак" Пукирева ложный?`,
        rightAnswerId: 1,
        image: img7,
        answers: [
          {
            text: "Работа была написана в последние годы жизни художника",
            id: 1,
          },
          { text: "Картина экспонируется в Третьяковской галерее", id: 2 },
          {
            text:
              "На картине изображено таинство венчания в православной церкви",
            id: 3,
          },
        ],
      },
    ],
  };

  onAnswerClickHandler = (answerId) => {
    const results = this.state.results;

    if (this.state.answerState) return;

    const question = this.state.quiz[this.state.activeQuestion];

    if (question.rightAnswerId === answerId) {
      results[this.state.activeQuestion + 1] = "success";
      this.setState({
        answerState: { [answerId]: "success" },
        results,
      });
    } else {
      results[this.state.activeQuestion + 1] = "error";
      this.setState({
        answerState: { [answerId]: "error" },
        results,
        showRight: true,
      });
    }
  };

  onNextButtonHandler = () => {
    if (this.isQuizFinished()) {
      this.setState({
        isFinished: true,
      });
    } else {
      this.setState({
        activeQuestion: this.state.activeQuestion + 1,
        answerState: null,
        showRight: false,
      });
    }
  };

  isQuizFinished = () =>
    this.state.activeQuestion + 1 === this.state.quiz.length;

  repeatQuiz = () => {
    this.setState({
      results: {},
      isFinished: false,
      activeQuestion: 0,
      answerState: null,
      showRight: false,
    });
  };

  render() {
    const {
      activeQuestion,
      quiz,
      answerState,
      showRight,
      results,
    } = this.state;

    return (
      <div className={styles.quiz}>
        {this.state.isFinished ? (
          <FinishedQuiz
            results={results}
            quiz={quiz}
            repeatQuiz={this.repeatQuiz}
          />
        ) : (
          <div className={styles.question}>
            <ActiveQuiz
              answers={quiz[activeQuestion].answers}
              question={quiz[activeQuestion].question}
              quizLength={quiz.length}
              answerNumber={activeQuestion + 1}
              state={answerState}
              rightAnswerId={quiz[activeQuestion].rightAnswerId}
              showRight={showRight}
              onAnswerClick={this.onAnswerClickHandler}
              onButtonClick={this.onNextButtonHandler}
              image={quiz[activeQuestion].image}
            />
          </div>
        )}
      </div>
    );
  }
}

export default Quiz;
