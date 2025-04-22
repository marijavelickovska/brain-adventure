// jshint esversion: 11
// JSHint directive to enable ES11 syntax support


// Separate objects for each topic, each containing 15 questions
const geographyQuiz = [
  {
    question: "What is the capital city of France?",
    answers: ["Rome", "Paris", "Madrid", "Berlin"],
    correct: "Paris"
  },
  {
    question: "Which continent is the Sahara Desert located in?",
    answers: ["Africa", "South America", "Australia", "Asia"],
    correct: "Africa"
  },
  {
    question: "What is the longest river in the world?",
    answers: ["Mississippi", "Nile", "Amazon", "Yangtze"],
    correct: "Nile"
  },
  {
    question: "Which ocean lies between Africa and Australia?",
    answers: ["Arctic Ocean", "Pacific Ocean", "Indian Ocean", "Atlantic Ocean"],
    correct: "Indian Ocean"
  },
  {
    question: "Mount Everest is part of which mountain range?",
    answers: ["Alps", "Himalayas", "Rockies", "Andes"],
    correct: "Himalayas"
  },
  {
    question: "Which country has the most people?",
    answers: ["USA", "China", "India", "Russia"],
    correct: "China"
  },
  {
    question: "What is the smallest country in the world?",
    answers: ["Malta", "San Marino", "Vatican City", "Monaco"],
    correct: "Vatican City"
  },
  {
    question: "Which country is known as the Land of the Rising Sun?",
    answers: ["Japan", "Thailand", "China", "South Korea"],
    correct: "Japan"
  },
  {
    question: "Which US state is the Grand Canyon located in?",
    answers: ["Utah", "Arizona", "California", "Nevada"],
    correct: "Arizona"
  },
  {
    question: "What is the capital of Canada?",
    answers: ["Montreal", "Ottawa", "Vancouver", "Toronto"],
    correct: "Ottawa"
  },
  {
    question: "Which country is shaped like a boot?",
    answers: ["Italy", "Portugal", "Spain", "Greece"],
    correct: "Italy"
  },
  {
    question: "What is the largest continent?",
    answers: ["Africa", "Asia", "North America", "Europe"],
    correct: "Asia"
  },
  {
    question: "Which river runs through Egypt?",
    answers: ["Nile", "Tigris", "Amazon", "Euphrates"],
    correct: "Nile"
  },
  {
    question: "Which country has the city of Istanbul?",
    answers: ["Turkey", "Egypt", "Greece", "Syria"],
    correct: "Turkey"
  },
  {
    question: "Which continent is Brazil in?",
    answers: ["Africa", "Europe", "South America", "North America"],
    correct: "South America"
  },
  {
    question: "Which ocean is the largest?",
    answers: ["Indian Ocean", "Arctic Ocean", "Atlantic Ocean", "Pacific Ocean"],
    correct: "Pacific Ocean"
  },
  {
    question: "Which city is known as the Big Apple?",
    answers: ["Chicago", "Los Angeles", "New York", "San Francisco"],
    correct: "New York"
  },
  {
    question: "Where is the Great Barrier Reef located?",
    answers: ["Hawaii", "Indonesia", "Philippines", "Australia"],
    correct: "Australia"
  },
  {
    question: "Which desert is the largest in the world?",
    answers: ["Sahara", "Kalahari", "Antarctic", "Gobi"],
    correct: "Antarctic"
  },
  {
    question: "Which country has pyramids?",
    answers: ["India", "China", "Mexico", "Egypt"],
    correct: "Egypt"
  },
  {
    question: "Which is the highest mountain in Africa?",
    answers: ["Mount Kenya", "Rwenzori", "Mount Kilimanjaro", "Atlas Mountains"],
    correct: "Mount Kilimanjaro"
  },
  {
    question: "Which country has a maple leaf on its flag?",
    answers: ["USA", "Canada", "New Zealand", "Australia"],
    correct: "Canada"
  },
  {
    question: "Which city is the capital of Japan?",
    answers: ["Osaka", "Tokyo", "Kyoto", "Nagoya"],
    correct: "Tokyo"
  },
  {
    question: "What is the name of the sea between Europe and Africa?",
    answers: ["Red Sea", "Black Sea", "Mediterranean Sea", "Baltic Sea"],
    correct: "Mediterranean Sea"
  },
  {
    question: "What is the capital of Germany?",
    answers: ["Hamburg", "Frankfurt", "Munich", "Berlin"],
    correct: "Berlin"
  },
  {
    question: "Where is the Eiffel Tower?",
    answers: ["Rome", "Madrid", "Paris", "London"],
    correct: "Paris"
  },
  {
    question: "Which island country is southeast of India?",
    answers: ["Maldives", "Indonesia", "Sri Lanka", "Philippines"],
    correct: "Sri Lanka"
  },
  {
    question: "Which African country starts with 'N' and is the most populous?",
    answers: ["Nepal", "Namibia", "Nigeria", "Niger"],
    correct: "Nigeria"
  },
  {
    question: "What is the capital of Spain?",
    answers: ["Seville", "Madrid", "Valencia", "Barcelona"],
    correct: "Madrid"
  },
  {
    question: "Which river flows through London?",
    answers: ["Rhine", "Seine", "Thames", "Danube"],
    correct: "Thames"
  }
];

const historyQuiz = [
  {
    question: "Who was the first President of the United States?",
    answers: ["Abraham Lincoln", "Thomas Jefferson", "George Washington", "John Adams"],
    correct: "George Washington"
  },
  {
    question: "In which year did World War II end?",
    answers: ["1939", "1941", "1950", "1945"],
    correct: "1945"
  },
  {
    question: "Which ancient civilization built the pyramids?",
    answers: ["Egyptians", "Aztecs", "Romans", "Greeks"],
    correct: "Egyptians"
  },
  {
    question: "Who discovered America in 1492?",
    answers: ["Leif Erikson", "Ferdinand Magellan", "Amerigo Vespucci", "Christopher Columbus"],
    correct: "Christopher Columbus"
  },
  {
    question: "Which war was fought between the North and South in the United States?",
    answers: ["Civil War", "World War I", "Revolutionary War", "Vietnam War"],
    correct: "Civil War"
  },
  {
    question: "Who was the leader of Nazi Germany?",
    answers: ["Adolf Hitler", "Joseph Stalin", "Benito Mussolini", "Winston Churchill"],
    correct: "Adolf Hitler"
  },
  {
    question: "In which country did the Renaissance begin?",
    answers: ["England", "Germany", "France", "Italy"],
    correct: "Italy"
  },
  {
    question: "What wall fell in 1989?",
    answers: ["Great Wall of China", "Berlin Wall", "Wailing Wall", "Hadrian's Wall"],
    correct: "Berlin Wall"
  },
  {
    question: "Who was the first man to walk on the moon?",
    answers: ["Yuri Gagarin", "Neil Armstrong", "John Glenn", "Buzz Aldrin"],
    correct: "Neil Armstrong"
  },
  {
    question: "What ship sank in 1912 after hitting an iceberg?",
    answers: ["Lusitania", "Queen Mary", "Titanic", "Britannic"],
    correct: "Titanic"
  },
  {
    question: "Who was the famous queen of ancient Egypt?",
    answers: ["Isis", "Cleopatra", "Nefertiti", "Hatshepsut"],
    correct: "Cleopatra"
  },
  {
    question: "What empire was ruled by Julius Caesar?",
    answers: ["Ottoman Empire", "Greek Empire", "Byzantine Empire", "Roman Empire"],
    correct: "Roman Empire"
  },
  {
    question: "Which country started the Industrial Revolution?",
    answers: ["Germany", "France", "USA", "Britain"],
    correct: "Britain"
  },
  {
    question: "Who was Martin Luther King Jr.?",
    answers: ["Scientist", "Inventor", "Civil rights leader", "President"],
    correct: "Civil rights leader"
  },
  {
    question: "What was the name of the first successful airplane?",
    answers: ["Spirit of St. Louis", "Concorde", "Wright Flyer", "Boeing 707"],
    correct: "Wright Flyer"
  },
  {
    question: "Who painted the Mona Lisa?",
    answers: ["Raphael", "Leonardo da Vinci", "Michelangelo", "Donatello"],
    correct: "Leonardo da Vinci"
  },
  {
    question: "Which U.S. President abolished slavery?",
    answers: ["Andrew Jackson", "Abraham Lincoln", "George Washington", "Theodore Roosevelt"],
    correct: "Abraham Lincoln"
  },
  {
    question: "Who was Julius Caesar?",
    answers: ["A Roman general", "A Greek philosopher", "An Egyptian king", "A Roman emperor"],
    correct: "A Roman general"
  },
  {
    question: "Who wrote the Declaration of Independence?",
    answers: ["George Washington", "Benjamin Franklin", "Thomas Jefferson", "John Adams"],
    correct: "Thomas Jefferson"
  },
  {
    question: "What was the Great Depression?",
    answers: ["An economic crisis", "A revolution", "A war", "A disease"],
    correct: "An economic crisis"
  },
  {
    question: "Who was the famous leader of the Indian independence movement?",
    answers: ["Mahatma Gandhi", "Indira Gandhi", "Jawaharlal Nehru", "B. R. Ambedkar"],
    correct: "Mahatma Gandhi"
  },
  {
    question: "Where was Napoleon Bonaparte from?",
    answers: ["Germany", "Spain", "France", "Italy"],
    correct: "France"
  },
  {
    question: "What ancient city was destroyed by a volcano in 79 AD?",
    answers: ["Rome", "Carthage", "Pompeii", "Athens"],
    correct: "Pompeii"
  },
  {
    question: "Who was the first female Prime Minister of the UK?",
    answers: ["Queen Victoria", "Elizabeth II", "Theresa May", "Margaret Thatcher"],
    correct: "Margaret Thatcher"
  },
  {
    question: "Which country built the Great Wall?",
    answers: ["India", "Japan", "China", "Mongolia"],
    correct: "China"
  },
  {
    question: "What ancient civilization lived in Machu Picchu?",
    answers: ["Aztecs", "Incas", "Mayas", "Olmecs"],
    correct: "Incas"
  },
  {
    question: "Which U.S. President was in office during WWII?",
    answers: ["Harry Truman", "Franklin D. Roosevelt", "Woodrow Wilson", "Dwight Eisenhower"],
    correct: "Franklin D. Roosevelt"
  },
  {
    question: "What was the name of Hitler’s book?",
    answers: ["The Third Reich", "Nazi Manifesto", "Mein Kampf", "Das Kapital"],
    correct: "Mein Kampf"
  },
  {
    question: "What year did the Berlin Wall fall?",
    answers: ["1990", "1989", "1987", "1991"],
    correct: "1989"
  },
  {
    question: "Where was the Declaration of Independence signed?",
    answers: ["Boston", "Washington D.C.", "New York", "Philadelphia"],
    correct: "Philadelphia"
  }
];

const mathQuiz = [
  {
    question: "What is 7 + 5?",
    answers: ["13", "10", "12", "14"],
    correct: "12"
  },
  {
    question: "What is the square root of 64?",
    answers: ["6", "8", "7", "9"],
    correct: "8"
  },
  {
    question: "What is 9 x 6?",
    answers: ["48", "63", "56", "54"],
    correct: "54"
  },
  {
    question: "What is 100 divided by 4?",
    answers: ["25", "30", "40", "20"],
    correct: "25"
  },
  {
    question: "What is the value of Pi (approx)?",
    answers: ["2.71", "4.20", "1.61", "3.14"],
    correct: "3.14"
  },
  {
    question: "What is 15% of 200?",
    answers: ["25", "35", "30", "40"],
    correct: "30"
  },
  {
    question: "How many degrees are in a right angle?",
    answers: ["90", "180", "60", "45"],
    correct: "90"
  },
  {
    question: "What is 2 to the power of 5?",
    answers: ["16", "25", "64", "32"],
    correct: "32"
  },
  {
    question: "What is the perimeter of a square with side 5?",
    answers: ["25", "10", "15", "20"],
    correct: "20"
  },
  {
    question: "What is 0.5 x 8?",
    answers: ["4", "6", "2", "5"],
    correct: "4"
  },
  {
    question: "What is the next prime number after 7?",
    answers: ["10", "9", "11", "8"],
    correct: "11"
  },
  {
    question: "How many sides does a hexagon have?",
    answers: ["7", "6", "5", "8"],
    correct: "6"
  },
  {
    question: "What is 11 x 11?",
    answers: ["101", "111", "132", "121"],
    correct: "121"
  },
  {
    question: "What is 81 divided by 9?",
    answers: ["9", "8", "7", "6"],
    correct: "9"
  },
  {
    question: "What is 3³?",
    answers: ["27", "36", "9", "18"],
    correct: "27"
  },
  {
    question: "How many minutes are in 2 hours?",
    answers: ["90", "120", "150", "60"],
    correct: "120"
  },
  {
    question: "What is 45 + 55?",
    answers: ["105", "90", "100", "110"],
    correct: "100"
  },
  {
    question: "What is the area of a rectangle 5x3?",
    answers: ["10", "15", "18", "8"],
    correct: "15"
  },
  {
    question: "Which number is even?",
    answers: ["15", "11", "13", "16"],
    correct: "16"
  },
  {
    question: "What is 1/2 + 1/2?",
    answers: ["1", "1.5", "2", "0.5"],
    correct: "1"
  },
  {
    question: "What is 3.5 + 4.5?",
    answers: ["9", "7", "7.5", "8"],
    correct: "8"
  },
  {
    question: "What is the result of 10 - 4?",
    answers: ["4", "7", "6", "5"],
    correct: "6"
  },
  {
    question: "Which number is a multiple of 4?",
    answers: ["15", "11", "16", "13"],
    correct: "16"
  },
  {
    question: "How many zeros are in one thousand?",
    answers: ["2", "5", "3", "4"],
    correct: "3"
  },
  {
    question: "What is the product of 0 x 99?",
    answers: ["99", "1", "100", "0"],
    correct: "0"
  },
  {
    question: "What is the largest two-digit number?",
    answers: ["89", "98", "100", "99"],
    correct: "99"
  },
  {
    question: "What is 18 - 9?",
    answers: ["9", "8", "7", "10"],
    correct: "9"
  },
  {
    question: "What is the sum of angles in a triangle?",
    answers: ["180°", "90°", "360°", "270°"],
    correct: "180°"
  },
  {
    question: "What comes after 999?",
    answers: ["9999", "1000", "998", "1001"],
    correct: "1000"
  },
  {
    question: "What is 5 x 0?",
    answers: ["1", "10", "5", "0"],
    correct: "0"
  }
];





