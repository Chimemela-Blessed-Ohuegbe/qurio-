// ----------------- Anime Questions -----------------
const animeQuestions = [
  {
    category: "Anime",
    question: "Who is the main protagonist of Naruto?",
    options: ["Naruto Uzumaki", "Sasuke Uchiha", "Itachi Uchiha", "Kakashi Hatake"],
    answer: "Naruto Uzumaki"
  },
  {
    category: "Anime",
    question: "In Death Note, what is the Shinigami’s name who drops the Death Note?",
    options: ["Ryuk", "Rem", "Gelus", "Sidoh"],
    answer: "Ryuk"
  },
  {
    category: "Anime",
    question: "Which anime features the 'Survey Corps'?",
    options: ["Bleach", "Attack on Titan", "One Piece", "Fullmetal Alchemist"],
    answer: "Attack on Titan"
  },
  {
    category: "Anime",
    question: "What is Monkey D. Luffy’s dream?",
    options: ["Become Hokage", "Find One Piece", "Be the greatest hero", "Destroy Titans"],
    answer: "Find One Piece"
  },
  {
    category: "Anime",
    question: "Which anime has the Uchiha Clan?",
    options: ["Dragon Ball", "Naruto", "My Hero Academia", "Tokyo Ghoul"],
    answer: "Naruto"
  },
  {
    category: "Anime",
    question: "In Dragon Ball Z, who kills Frieza on Namek?",
    options: ["Goku", "Vegeta", "Trunks", "Piccolo"],
    answer: "Trunks"
  },
  {
    category: "Anime",
    question: "What is Edward Elric’s brother’s name in Fullmetal Alchemist?",
    options: ["Alphonse", "Roy", "Scar", "Greed"],
    answer: "Alphonse"
  },
  {
    category: "Anime",
    question: "Which anime character says 'I am gonna be King of the Pirates'?",
    options: ["Naruto", "Goku", "Luffy", "Natsu"],
    answer: "Luffy"
  },
  {
    category: "Anime",
    question: "What color is Ichigo’s hair in Bleach?",
    options: ["Black", "Orange", "Blue", "White"],
    answer: "Orange"
  },
  {
    category: "Anime",
    question: "Who is the creator of the anime 'My Hero Academia'?",
    options: ["Eiichiro Oda", "Masashi Kishimoto", "Kohei Horikoshi", "Hajime Isayama"],
    answer: "Kohei Horikoshi"
  }
];

// ----------------- Maths Questions -----------------
const mathQuestions = [
  {
    category: "Maths",
    question: "What is 12 × 8?",
    options: ["96", "84", "108", "92"],
    answer: "96"
  },
  {
    category: "Maths",
    question: "What is the square root of 144?",
    options: ["10", "12", "14", "16"],
    answer: "12"
  },
  {
    category: "Maths",
    question: "What is 15% of 200?",
    options: ["25", "30", "35", "40"],
    answer: "30"
  },
  {
    category: "Maths",
    question: "Solve: 7² + 3²",
    options: ["49", "58", "52", "61"],
    answer: "58"
  },
  {
    category: "Maths",
    question: "What is 1000 ÷ 25?",
    options: ["25", "30", "35", "40"],
    answer: "40"
  },
  {
    category: "Maths",
    question: "What is the value of π (pi) to 2 decimal places?",
    options: ["3.12", "3.14", "3.15", "3.16"],
    answer: "3.14"
  },
  {
    category: "Maths",
    question: "If x = 5, what is 2x + 7?",
    options: ["12", "15", "17", "19"],
    answer: "17"
  },
  {
    category: "Maths",
    question: "What is 9 × 9?",
    options: ["72", "81", "99", "91"],
    answer: "81"
  },
  {
    category: "Maths",
    question: "What is 3/4 of 200?",
    options: ["100", "120", "140", "150"],
    answer: "150"
  },
  {
    category: "Maths",
    question: "What is the perimeter of a square with side 6 cm?",
    options: ["18 cm", "24 cm", "36 cm", "12 cm"],
    answer: "24 cm"
  }
];

// ----------------- Geography Questions -----------------
const geographyQuestions = [
  {
    category: "Geography",
    question: "What is the capital of Japan?",
    options: ["Tokyo", "Seoul", "Beijing", "Kyoto"],
    answer: "Tokyo"
  },
  {
    category: "Geography",
    question: "Which continent is the Sahara Desert located in?",
    options: ["Asia", "Africa", "Australia", "South America"],
    answer: "Africa"
  },
  {
    category: "Geography",
    question: "Which river is the longest in the world?",
    options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
    answer: "Nile"
  },
  {
    category: "Geography",
    question: "Mount Everest lies between Nepal and which country?",
    options: ["India", "China", "Bhutan", "Pakistan"],
    answer: "China"
  },
  {
    category: "Geography",
    question: "What is the largest ocean on Earth?",
    options: ["Atlantic", "Indian", "Arctic", "Pacific"],
    answer: "Pacific"
  },
  {
    category: "Geography",
    question: "Which country has the most population?",
    options: ["India", "USA", "China", "Brazil"],
    answer: "China"
  },
  {
    category: "Geography",
    question: "What is the capital of Australia?",
    options: ["Sydney", "Melbourne", "Perth", "Canberra"],
    answer: "Canberra"
  },
  {
    category: "Geography",
    question: "Which is the smallest country in the world?",
    options: ["Monaco", "Vatican City", "San Marino", "Malta"],
    answer: "Vatican City"
  },
  {
    category: "Geography",
    question: "Which desert covers much of northern Africa?",
    options: ["Gobi", "Sahara", "Kalahari", "Mojave"],
    answer: "Sahara"
  },
  {
    category: "Geography",
    question: "What is the capital of Canada?",
    options: ["Toronto", "Ottawa", "Vancouver", "Montreal"],
    answer: "Ottawa"
  }
];

// ----------------- Combined -----------------
const quizData = [
  ...animeQuestions,
  ...mathQuestions,
  ...geographyQuestions
];

// Export (if using React/Node)
export { animeQuestions, mathQuestions, geographyQuestions, quizData };
