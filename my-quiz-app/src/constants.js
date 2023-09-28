export const jsQuizz = {
  questions: [
    {
      id: 0,
      question:
        'Which of the following is used in React.js to increase performance?',
      choices: [
        'Virtual DOM',
        'Original DOM',
        'Both A and B',
        'None of the above',
      ],
      type: 'MCQs',
      correctAnswer: 'Virtual DOM',
    },
    {
      id: 1,
      question: 'What is ReactJS?',
      choices: [
        'Server-side framework',
        'User Interface framework',
        'both a and b',
        'None of the above',
      ],
      type: 'MCQs',
      correctAnswer: 'User Interface framework',
    },
    {
      id: 2,
      question:
        'Identify the one which is used to pass data to components from outside',
      choices: ['Render with arguments', 'setState', 'PropTypes', 'props'],
      type: 'MCQs',
      correctAnswer: 'props',
    },
    {
      id: 3,
      question: 'In which language is React.js written?',
      choices: ['Python', 'Java', 'C#', 'JavaScript'],
      type: 'MCQs',
      correctAnswer: 'JavaScript',
    },
    {
      id: 4,
      question: 'What is Babel?',
      choices: [
        'JavaScript interpreter',
        'JavaScript transpiler',
        'JavaScript compiler',
        'None of the above',
      ],
      type: 'MCQs',
      correctAnswer: 'JavaScript compiler',
    },
    {
      id: 5,
      question: 'Identify the command used to create a react app?',
      choices: [
        'npm install create-react-app',
        'npm install -g create-react-app',
        'install -g create-react-app',
        'None of the above',
      ],
      type: 'MCQs',
      correctAnswer: 'npm install -g create-react-app',
    },
    {
      id: 6,
      question: 'A state in React.js is also known as?',
      choices: [
        'The internal storage of the component',
        'External storage of the component',
        'Permanent storage',
        'All of the above',
      ],
      type: 'MCQs',
      correctAnswer: 'The internal storage of the component',
    },
    {
      id: 7,
      question:
        'Which of the following method is used to access the state of a component from inside of a member function?',
      choices: [
        'this.prototype.stateValue',
        'this.getState()',
        'this.values',
        'this.state',
      ],
      type: 'MCQs',
      correctAnswer: 'this.values',
    },
    {
      id: 8,
      question:
        'Using which of the following command can prevent default behaviour at in react?',
      choices: [
        'preventDefault()',
        'avoidDefault()',
        'revokeDefault()',
        'None of the above',
      ],
      type: 'MCQs',
      correctAnswer: 'preventDefault()',
    },
    {
      id: 9,
      question:
        '________ provide a way to pass data from one component to another. Fill in the blank.',
      type: 'FIB',
      correctAnswer: 'props',
    },
  ],
}

export const resultInitialState = {
  score: 0,
  correctAnswers: 0,
  wrongAnswers: 0,
}
