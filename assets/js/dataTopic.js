// Separate objects for each topic, each containing 15 questions

const geographyQuiz = [{
    question: "What is the capital city of France?",
    answers: ["Paris", "Madrid", "Berlin", "Rome"],
    correctAnswer: "Paris"
  },
  {
    question: "Which continent is the Sahara Desert located in?",
    answers: ["Africa", "Asia", "Australia", "South America"],
    correctAnswer: "Africa"
  },
  {
    question: "What is the longest river in the world?",
    answers: ["Nile", "Amazon", "Yangtze", "Mississippi"],
    correctAnswer: "Nile"
  },
  {
    question: "Which ocean lies between Africa and Australia?",
    answers: ["Indian Ocean", "Atlantic Ocean", "Pacific Ocean", "Arctic Ocean"],
    correctAnswer: "Indian Ocean"
  },
  {
    question: "Mount Everest is part of which mountain range?",
    answers: ["Himalayas", "Alps", "Andes", "Rockies"],
    correctAnswer: "Himalayas"
  },
  {
    question: "Which country has the most people?",
    answers: ["China", "India", "USA", "Russia"],
    correctAnswer: "China"
  },
  {
    question: "What is the smallest country in the world?",
    answers: ["Vatican City", "Monaco", "Malta", "San Marino"],
    correctAnswer: "Vatican City"
  },
  {
    question: "Which country is known as the Land of the Rising Sun?",
    answers: ["Japan", "China", "Thailand", "South Korea"],
    correctAnswer: "Japan"
  },
  {
    question: "Which US state is the Grand Canyon located in?",
    answers: ["Arizona", "Nevada", "Utah", "California"],
    correctAnswer: "Arizona"
  },
  {
    question: "What is the capital of Canada?",
    answers: ["Ottawa", "Toronto", "Vancouver", "Montreal"],
    correctAnswer: "Ottawa"
  },
  {
    question: "Which country is shaped like a boot?",
    answers: ["Italy", "Spain", "Portugal", "Greece"],
    correctAnswer: "Italy"
  },
  {
    question: "What is the largest continent?",
    answers: ["Asia", "Africa", "Europe", "North America"],
    correctAnswer: "Asia"
  },
  {
    question: "Which river runs through Egypt?",
    answers: ["Nile", "Euphrates", "Amazon", "Tigris"],
    correctAnswer: "Nile"
  },
  {
    question: "Which country has the city of Istanbul?",
    answers: ["Turkey", "Greece", "Egypt", "Syria"],
    correctAnswer: "Turkey"
  },
  {
    question: "Which continent is Brazil in?",
    answers: ["South America", "North America", "Europe", "Africa"],
    correctAnswer: "South America"
  },
  {
    question: "Which ocean is the largest?",
    answers: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
    correctAnswer: "Pacific Ocean"
  },
  {
    question: "Which city is known as the Big Apple?",
    answers: ["New York", "Los Angeles", "Chicago", "San Francisco"],
    correctAnswer: "New York"
  },
  {
    question: "Where is the Great Barrier Reef located?",
    answers: ["Australia", "Hawaii", "Indonesia", "Philippines"],
    correctAnswer: "Australia"
  },
  {
    question: "Which desert is the largest in the world?",
    answers: ["Antarctic", "Sahara", "Gobi", "Kalahari"],
    correctAnswer: "Antarctic"
  },
  {
    question: "Which country has pyramids?",
    answers: ["Egypt", "Mexico", "China", "India"],
    correctAnswer: "Egypt"
  },
  {
    question: "Which is the highest mountain in Africa?",
    answers: ["Mount Kilimanjaro", "Mount Kenya", "Atlas Mountains", "Rwenzori"],
    correctAnswer: "Mount Kilimanjaro"
  },
  {
    question: "Which country has a maple leaf on its flag?",
    answers: ["Canada", "USA", "Australia", "New Zealand"],
    correctAnswer: "Canada"
  },
  {
    question: "Which city is the capital of Japan?",
    answers: ["Tokyo", "Kyoto", "Osaka", "Nagoya"],
    correctAnswer: "Tokyo"
  },
  {
    question: "What is the name of the sea between Europe and Africa?",
    answers: ["Mediterranean Sea", "Black Sea", "Red Sea", "Baltic Sea"],
    correctAnswer: "Mediterranean Sea"
  },
  {
    question: "What is the capital of Germany?",
    answers: ["Berlin", "Munich", "Hamburg", "Frankfurt"],
    correctAnswer: "Berlin"
  },
  {
    question: "Where is the Eiffel Tower?",
    answers: ["Paris", "London", "Rome", "Madrid"],
    correctAnswer: "Paris"
  },
  {
    question: "Which island country is southeast of India?",
    answers: ["Sri Lanka", "Maldives", "Indonesia", "Philippines"],
    correctAnswer: "Sri Lanka"
  },
  {
    question: "Which African country starts with 'N' and is the most populous?",
    answers: ["Nigeria", "Niger", "Namibia", "Nepal"],
    correctAnswer: "Nigeria"
  },
  {
    question: "What is the capital of Spain?",
    answers: ["Madrid", "Barcelona", "Seville", "Valencia"],
    correctAnswer: "Madrid"
  },
  {
    question: "Which river flows through London?",
    answers: ["Thames", "Seine", "Danube", "Rhine"],
    correctAnswer: "Thames"
  }
];

const historyQuiz = [
  {
    question: "Who was the first President of the United States?",
    answers: ["George Washington", "Abraham Lincoln", "Thomas Jefferson", "John Adams"],
    correctAnswer: "George Washington"
  },
  {
    question: "In which year did World War II end?",
    answers: ["1945", "1939", "1941", "1950"],
    correctAnswer: "1945"
  },
  {
    question: "Which ancient civilization built the pyramids?",
    answers: ["Egyptians", "Romans", "Greeks", "Aztecs"],
    correctAnswer: "Egyptians"
  },
  {
    question: "Who discovered America in 1492?",
    answers: ["Christopher Columbus", "Leif Erikson", "Amerigo Vespucci", "Ferdinand Magellan"],
    correctAnswer: "Christopher Columbus"
  },
  {
    question: "Which war was fought between the North and South in the United States?",
    answers: ["Civil War", "Revolutionary War", "World War I", "Vietnam War"],
    correctAnswer: "Civil War"
  },
  {
    question: "Who was the leader of Nazi Germany?",
    answers: ["Adolf Hitler", "Joseph Stalin", "Winston Churchill", "Benito Mussolini"],
    correctAnswer: "Adolf Hitler"
  },
  {
    question: "In which country did the Renaissance begin?",
    answers: ["Italy", "France", "England", "Germany"],
    correctAnswer: "Italy"
  },
  {
    question: "What wall fell in 1989?",
    answers: ["Berlin Wall", "Great Wall of China", "Hadrian's Wall", "Wailing Wall"],
    correctAnswer: "Berlin Wall"
  },
  {
    question: "Who was the first man to walk on the moon?",
    answers: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "John Glenn"],
    correctAnswer: "Neil Armstrong"
  },
  {
    question: "What ship sank in 1912 after hitting an iceberg?",
    answers: ["Titanic", "Lusitania", "Queen Mary", "Britannic"],
    correctAnswer: "Titanic"
  },
  {
    question: "Who was the famous queen of ancient Egypt?",
    answers: ["Cleopatra", "Nefertiti", "Isis", "Hatshepsut"],
    correctAnswer: "Cleopatra"
  },
  {
    question: "What empire was ruled by Julius Caesar?",
    answers: ["Roman Empire", "Greek Empire", "Ottoman Empire", "Byzantine Empire"],
    correctAnswer: "Roman Empire"
  },
  {
    question: "Which country started the Industrial Revolution?",
    answers: ["Britain", "Germany", "France", "USA"],
    correctAnswer: "Britain"
  },
  {
    question: "Who was Martin Luther King Jr.?",
    answers: ["Civil rights leader", "President", "Scientist", "Inventor"],
    correctAnswer: "Civil rights leader"
  },
  {
    question: "What was the name of the first successful airplane?",
    answers: ["Wright Flyer", "Spirit of St. Louis", "Concorde", "Boeing 707"],
    correctAnswer: "Wright Flyer"
  },
  {
    question: "Who painted the Mona Lisa?",
    answers: ["Leonardo da Vinci", "Michelangelo", "Raphael", "Donatello"],
    correctAnswer: "Leonardo da Vinci"
  },
  {
    question: "Which U.S. President abolished slavery?",
    answers: ["Abraham Lincoln", "George Washington", "Theodore Roosevelt", "Andrew Jackson"],
    correctAnswer: "Abraham Lincoln"
  },
  {
    question: "What was the Cold War?",
    answers: ["Political tension between USA and USSR", "A real war", "A war in Antarctica", "WWII battle"],
    correctAnswer: "Political tension between USA and USSR"
  },
  {
    question: "Who wrote the Declaration of Independence?",
    answers: ["Thomas Jefferson", "George Washington", "John Adams", "Benjamin Franklin"],
    correctAnswer: "Thomas Jefferson"
  },
  {
    question: "What was the Great Depression?",
    answers: ["An economic crisis", "A war", "A disease", "A revolution"],
    correctAnswer: "An economic crisis"
  },
  {
    question: "Who was the famous leader of the Indian independence movement?",
    answers: ["Mahatma Gandhi", "Jawaharlal Nehru", "Indira Gandhi", "B. R. Ambedkar"],
    correctAnswer: "Mahatma Gandhi"
  },
  {
    question: "Where was Napoleon Bonaparte from?",
    answers: ["France", "Italy", "Germany", "Spain"],
    correctAnswer: "France"
  },
  {
    question: "What ancient city was destroyed by a volcano in 79 AD?",
    answers: ["Pompeii", "Rome", "Athens", "Carthage"],
    correctAnswer: "Pompeii"
  },
  {
    question: "Who was the first female Prime Minister of the UK?",
    answers: ["Margaret Thatcher", "Elizabeth II", "Theresa May", "Queen Victoria"],
    correctAnswer: "Margaret Thatcher"
  },
  {
    question: "Which country built the Great Wall?",
    answers: ["China", "Japan", "India", "Mongolia"],
    correctAnswer: "China"
  },
  {
    question: "What ancient civilization lived in Machu Picchu?",
    answers: ["Incas", "Mayas", "Aztecs", "Olmecs"],
    correctAnswer: "Incas"
  },
  {
    question: "Which U.S. President was in office during WWII?",
    answers: ["Franklin D. Roosevelt", "Harry Truman", "Dwight Eisenhower", "Woodrow Wilson"],
    correctAnswer: "Franklin D. Roosevelt"
  },
  {
    question: "What was the name of Hitler’s book?",
    answers: ["Mein Kampf", "Das Kapital", "The Third Reich", "Nazi Manifesto"],
    correctAnswer: "Mein Kampf"
  },
  {
    question: "What year did the Berlin Wall fall?",
    answers: ["1989", "1990", "1987", "1991"],
    correctAnswer: "1989"
  },
  {
    question: "Where was the Declaration of Independence signed?",
    answers: ["Philadelphia", "Washington D.C.", "New York", "Boston"],
    correctAnswer: "Philadelphia"
  }
];

const mathQuiz = [
  {
    question: "What is 7 + 5?",
    answers: ["12", "10", "14", "13"],
    correctAnswer: "12"
  },
  {
    question: "What is the square root of 64?",
    answers: ["8", "6", "7", "9"],
    correctAnswer: "8"
  },
  {
    question: "What is 9 x 6?",
    answers: ["54", "63", "48", "56"],
    correctAnswer: "54"
  },
  {
    question: "What is 100 divided by 4?",
    answers: ["25", "20", "30", "40"],
    correctAnswer: "25"
  },
  {
    question: "What is the value of Pi (approx)?",
    answers: ["3.14", "2.71", "1.61", "4.20"],
    correctAnswer: "3.14"
  },
  {
    question: "What is 15% of 200?",
    answers: ["30", "25", "35", "40"],
    correctAnswer: "30"
  },
  {
    question: "How many degrees are in a right angle?",
    answers: ["90", "180", "45", "60"],
    correctAnswer: "90"
  },
  {
    question: "What is 2 to the power of 5?",
    answers: ["32", "16", "64", "25"],
    correctAnswer: "32"
  },
  {
    question: "What is the perimeter of a square with side 5?",
    answers: ["20", "10", "25", "15"],
    correctAnswer: "20"
  },
  {
    question: "What is 0.5 x 8?",
    answers: ["4", "2", "6", "5"],
    correctAnswer: "4"
  },
  {
    question: "What is the next prime number after 7?",
    answers: ["11", "9", "10", "8"],
    correctAnswer: "11"
  },
  {
    question: "How many sides does a hexagon have?",
    answers: ["6", "8", "5", "7"],
    correctAnswer: "6"
  },
  {
    question: "What is 11 x 11?",
    answers: ["121", "111", "132", "101"],
    correctAnswer: "121"
  },
  {
    question: "What is 81 divided by 9?",
    answers: ["9", "8", "7", "6"],
    correctAnswer: "9"
  },
  {
    question: "What is 3³?",
    answers: ["27", "9", "18", "36"],
    correctAnswer: "27"
  },
  {
    question: "How many minutes are in 2 hours?",
    answers: ["120", "60", "90", "150"],
    correctAnswer: "120"
  },
  {
    question: "What is 45 + 55?",
    answers: ["100", "90", "110", "105"],
    correctAnswer: "100"
  },
  {
    question: "What is the area of a rectangle 5x3?",
    answers: ["15", "8", "10", "18"],
    correctAnswer: "15"
  },
  {
    question: "Which number is even?",
    answers: ["16", "15", "13", "11"],
    correctAnswer: "16"
  },
  {
    question: "What is 1/2 + 1/2?",
    answers: ["1", "0.5", "2", "1.5"],
    correctAnswer: "1"
  },
  {
    question: "What is 3.5 + 4.5?",
    answers: ["8", "7.5", "9", "7"],
    correctAnswer: "8"
  },
  {
    question: "What is the result of 10 - 4?",
    answers: ["6", "4", "5", "7"],
    correctAnswer: "6"
  },
  {
    question: "Which number is a multiple of 4?",
    answers: ["16", "13", "15", "11"],
    correctAnswer: "16"
  },
  {
    question: "How many zeros are in one thousand?",
    answers: ["3", "2", "4", "5"],
    correctAnswer: "3"
  },
  {
    question: "What is the product of 0 x 99?",
    answers: ["0", "99", "1", "100"],
    correctAnswer: "0"
  },
  {
    question: "What is the largest two-digit number?",
    answers: ["99", "100", "98", "89"],
    correctAnswer: "99"
  },
  {
    question: "What is 18 - 9?",
    answers: ["9", "8", "10", "7"],
    correctAnswer: "9"
  },
  {
    question: "What is the sum of angles in a triangle?",
    answers: ["180°", "90°", "360°", "270°"],
    correctAnswer: "180°"
  },
  {
    question: "What comes after 999?",
    answers: ["1000", "1001", "998", "9999"],
    correctAnswer: "1000"
  },
  {
    question: "What is 5 x 0?",
    answers: ["0", "5", "1", "10"],
    correctAnswer: "0"
  }
];
