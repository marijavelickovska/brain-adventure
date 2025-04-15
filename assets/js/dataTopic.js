// Separate objects for each topic, each containing 15 questions

const geographyQuiz = [{
    question: "What is the capital city of France?",
    answers: ["Paris", "Madrid", "Berlin", "Rome"],
    correct: "Paris"
  },
  {
    question: "Which continent is the Sahara Desert located in?",
    answers: ["Africa", "Asia", "Australia", "South America"],
    correct: "Africa"
  },
  {
    question: "What is the longest river in the world?",
    answers: ["Nile", "Amazon", "Yangtze", "Mississippi"],
    correct: "Nile"
  },
  {
    question: "Which ocean lies between Africa and Australia?",
    answers: ["Indian Ocean", "Atlantic Ocean", "Pacific Ocean", "Arctic Ocean"],
    correct: "Indian Ocean"
  },
  {
    question: "Mount Everest is part of which mountain range?",
    answers: ["Himalayas", "Alps", "Andes", "Rockies"],
    correct: "Himalayas"
  },
  {
    question: "Which country has the most people?",
    answers: ["China", "India", "USA", "Russia"],
    correct: "China"
  },
  {
    question: "What is the smallest country in the world?",
    answers: ["Vatican City", "Monaco", "Malta", "San Marino"],
    correct: "Vatican City"
  },
  {
    question: "Which country is known as the Land of the Rising Sun?",
    answers: ["Japan", "China", "Thailand", "South Korea"],
    correct: "Japan"
  },
  {
    question: "Which US state is the Grand Canyon located in?",
    answers: ["Arizona", "Nevada", "Utah", "California"],
    correct: "Arizona"
  },
  {
    question: "What is the capital of Canada?",
    answers: ["Ottawa", "Toronto", "Vancouver", "Montreal"],
    correct: "Ottawa"
  },
  {
    question: "Which country is shaped like a boot?",
    answers: ["Italy", "Spain", "Portugal", "Greece"],
    correct: "Italy"
  },
  {
    question: "What is the largest continent?",
    answers: ["Asia", "Africa", "Europe", "North America"],
    correct: "Asia"
  },
  {
    question: "Which river runs through Egypt?",
    answers: ["Nile", "Euphrates", "Amazon", "Tigris"],
    correct: "Nile"
  },
  {
    question: "Which country has the city of Istanbul?",
    answers: ["Turkey", "Greece", "Egypt", "Syria"],
    correct: "Turkey"
  },
  {
    question: "Which continent is Brazil in?",
    answers: ["South America", "North America", "Europe", "Africa"],
    correct: "South America"
  },
  {
    question: "Which ocean is the largest?",
    answers: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
    correct: "Pacific Ocean"
  },
  {
    question: "Which city is known as the Big Apple?",
    answers: ["New York", "Los Angeles", "Chicago", "San Francisco"],
    correct: "New York"
  },
  {
    question: "Where is the Great Barrier Reef located?",
    answers: ["Australia", "Hawaii", "Indonesia", "Philippines"],
    correct: "Australia"
  },
  {
    question: "Which desert is the largest in the world?",
    answers: ["Antarctic", "Sahara", "Gobi", "Kalahari"],
    correct: "Antarctic"
  },
  {
    question: "Which country has pyramids?",
    answers: ["Egypt", "Mexico", "China", "India"],
    correct: "Egypt"
  },
  {
    question: "Which is the highest mountain in Africa?",
    answers: ["Mount Kilimanjaro", "Mount Kenya", "Atlas Mountains", "Rwenzori"],
    correct: "Mount Kilimanjaro"
  },
  {
    question: "Which country has a maple leaf on its flag?",
    answers: ["Canada", "USA", "Australia", "New Zealand"],
    correct: "Canada"
  },
  {
    question: "Which city is the capital of Japan?",
    answers: ["Tokyo", "Kyoto", "Osaka", "Nagoya"],
    correct: "Tokyo"
  },
  {
    question: "What is the name of the sea between Europe and Africa?",
    answers: ["Mediterranean Sea", "Black Sea", "Red Sea", "Baltic Sea"],
    correct: "Mediterranean Sea"
  },
  {
    question: "What is the capital of Germany?",
    answers: ["Berlin", "Munich", "Hamburg", "Frankfurt"],
    correct: "Berlin"
  },
  {
    question: "Where is the Eiffel Tower?",
    answers: ["Paris", "London", "Rome", "Madrid"],
    correct: "Paris"
  },
  {
    question: "Which island country is southeast of India?",
    answers: ["Sri Lanka", "Maldives", "Indonesia", "Philippines"],
    correct: "Sri Lanka"
  },
  {
    question: "Which African country starts with 'N' and is the most populous?",
    answers: ["Nigeria", "Niger", "Namibia", "Nepal"],
    correct: "Nigeria"
  },
  {
    question: "What is the capital of Spain?",
    answers: ["Madrid", "Barcelona", "Seville", "Valencia"],
    correct: "Madrid"
  },
  {
    question: "Which river flows through London?",
    answers: ["Thames", "Seine", "Danube", "Rhine"],
    correct: "Thames"
  }
];

const historyQuiz = [
  {
    question: "Who was the first President of the United States?",
    answers: ["George Washington", "Abraham Lincoln", "Thomas Jefferson", "John Adams"],
    correct: "George Washington"
  },
  {
    question: "In which year did World War II end?",
    answers: ["1945", "1939", "1941", "1950"],
    correct: "1945"
  },
  {
    question: "Which ancient civilization built the pyramids?",
    answers: ["Egyptians", "Romans", "Greeks", "Aztecs"],
    correct: "Egyptians"
  },
  {
    question: "Who discovered America in 1492?",
    answers: ["Christopher Columbus", "Leif Erikson", "Amerigo Vespucci", "Ferdinand Magellan"],
    correct: "Christopher Columbus"
  },
  {
    question: "Which war was fought between the North and South in the United States?",
    answers: ["Civil War", "Revolutionary War", "World War I", "Vietnam War"],
    correct: "Civil War"
  },
  {
    question: "Who was the leader of Nazi Germany?",
    answers: ["Adolf Hitler", "Joseph Stalin", "Winston Churchill", "Benito Mussolini"],
    correct: "Adolf Hitler"
  },
  {
    question: "In which country did the Renaissance begin?",
    answers: ["Italy", "France", "England", "Germany"],
    correct: "Italy"
  },
  {
    question: "What wall fell in 1989?",
    answers: ["Berlin Wall", "Great Wall of China", "Hadrian's Wall", "Wailing Wall"],
    correct: "Berlin Wall"
  },
  {
    question: "Who was the first man to walk on the moon?",
    answers: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "John Glenn"],
    correct: "Neil Armstrong"
  },
  {
    question: "What ship sank in 1912 after hitting an iceberg?",
    answers: ["Titanic", "Lusitania", "Queen Mary", "Britannic"],
    correct: "Titanic"
  },
  {
    question: "Who was the famous queen of ancient Egypt?",
    answers: ["Cleopatra", "Nefertiti", "Isis", "Hatshepsut"],
    correct: "Cleopatra"
  },
  {
    question: "What empire was ruled by Julius Caesar?",
    answers: ["Roman Empire", "Greek Empire", "Ottoman Empire", "Byzantine Empire"],
    correct: "Roman Empire"
  },
  {
    question: "Which country started the Industrial Revolution?",
    answers: ["Britain", "Germany", "France", "USA"],
    correct: "Britain"
  },
  {
    question: "Who was Martin Luther King Jr.?",
    answers: ["Civil rights leader", "President", "Scientist", "Inventor"],
    correct: "Civil rights leader"
  },
  {
    question: "What was the name of the first successful airplane?",
    answers: ["Wright Flyer", "Spirit of St. Louis", "Concorde", "Boeing 707"],
    correct: "Wright Flyer"
  },
  {
    question: "Who painted the Mona Lisa?",
    answers: ["Leonardo da Vinci", "Michelangelo", "Raphael", "Donatello"],
    correct: "Leonardo da Vinci"
  },
  {
    question: "Which U.S. President abolished slavery?",
    answers: ["Abraham Lincoln", "George Washington", "Theodore Roosevelt", "Andrew Jackson"],
    correct: "Abraham Lincoln"
  },
  {
    question: "What was the Cold War?",
    answers: ["Political tension between USA and USSR", "A real war", "A war in Antarctica", "WWII battle"],
    correct: "Political tension between USA and USSR"
  },
  {
    question: "Who wrote the Declaration of Independence?",
    answers: ["Thomas Jefferson", "George Washington", "John Adams", "Benjamin Franklin"],
    correct: "Thomas Jefferson"
  },
  {
    question: "What was the Great Depression?",
    answers: ["An economic crisis", "A war", "A disease", "A revolution"],
    correct: "An economic crisis"
  },
  {
    question: "Who was the famous leader of the Indian independence movement?",
    answers: ["Mahatma Gandhi", "Jawaharlal Nehru", "Indira Gandhi", "B. R. Ambedkar"],
    correct: "Mahatma Gandhi"
  },
  {
    question: "Where was Napoleon Bonaparte from?",
    answers: ["France", "Italy", "Germany", "Spain"],
    correct: "France"
  },
  {
    question: "What ancient city was destroyed by a volcano in 79 AD?",
    answers: ["Pompeii", "Rome", "Athens", "Carthage"],
    correct: "Pompeii"
  },
  {
    question: "Who was the first female Prime Minister of the UK?",
    answers: ["Margaret Thatcher", "Elizabeth II", "Theresa May", "Queen Victoria"],
    correct: "Margaret Thatcher"
  },
  {
    question: "Which country built the Great Wall?",
    answers: ["China", "Japan", "India", "Mongolia"],
    correct: "China"
  },
  {
    question: "What ancient civilization lived in Machu Picchu?",
    answers: ["Incas", "Mayas", "Aztecs", "Olmecs"],
    correct: "Incas"
  },
  {
    question: "Which U.S. President was in office during WWII?",
    answers: ["Franklin D. Roosevelt", "Harry Truman", "Dwight Eisenhower", "Woodrow Wilson"],
    correct: "Franklin D. Roosevelt"
  },
  {
    question: "What was the name of Hitler’s book?",
    answers: ["Mein Kampf", "Das Kapital", "The Third Reich", "Nazi Manifesto"],
    correct: "Mein Kampf"
  },
  {
    question: "What year did the Berlin Wall fall?",
    answers: ["1989", "1990", "1987", "1991"],
    correct: "1989"
  },
  {
    question: "Where was the Declaration of Independence signed?",
    answers: ["Philadelphia", "Washington D.C.", "New York", "Boston"],
    correct: "Philadelphia"
  }
];

const mathQuiz = [
  {
    question: "What is 7 + 5?",
    answers: ["12", "10", "14", "13"],
    correct: "12"
  },
  {
    question: "What is the square root of 64?",
    answers: ["8", "6", "7", "9"],
    correct: "8"
  },
  {
    question: "What is 9 x 6?",
    answers: ["54", "63", "48", "56"],
    correct: "54"
  },
  {
    question: "What is 100 divided by 4?",
    answers: ["25", "20", "30", "40"],
    correct: "25"
  },
  {
    question: "What is the value of Pi (approx)?",
    answers: ["3.14", "2.71", "1.61", "4.20"],
    correct: "3.14"
  },
  {
    question: "What is 15% of 200?",
    answers: ["30", "25", "35", "40"],
    correct: "30"
  },
  {
    question: "How many degrees are in a right angle?",
    answers: ["90", "180", "45", "60"],
    correct: "90"
  },
  {
    question: "What is 2 to the power of 5?",
    answers: ["32", "16", "64", "25"],
    correct: "32"
  },
  {
    question: "What is the perimeter of a square with side 5?",
    answers: ["20", "10", "25", "15"],
    correct: "20"
  },
  {
    question: "What is 0.5 x 8?",
    answers: ["4", "2", "6", "5"],
    correct: "4"
  },
  {
    question: "What is the next prime number after 7?",
    answers: ["11", "9", "10", "8"],
    correct: "11"
  },
  {
    question: "How many sides does a hexagon have?",
    answers: ["6", "8", "5", "7"],
    correct: "6"
  },
  {
    question: "What is 11 x 11?",
    answers: ["121", "111", "132", "101"],
    correct: "121"
  },
  {
    question: "What is 81 divided by 9?",
    answers: ["9", "8", "7", "6"],
    correct: "9"
  },
  {
    question: "What is 3³?",
    answers: ["27", "9", "18", "36"],
    correct: "27"
  },
  {
    question: "How many minutes are in 2 hours?",
    answers: ["120", "60", "90", "150"],
    correct: "120"
  },
  {
    question: "What is 45 + 55?",
    answers: ["100", "90", "110", "105"],
    correct: "100"
  },
  {
    question: "What is the area of a rectangle 5x3?",
    answers: ["15", "8", "10", "18"],
    correct: "15"
  },
  {
    question: "Which number is even?",
    answers: ["16", "15", "13", "11"],
    correct: "16"
  },
  {
    question: "What is 1/2 + 1/2?",
    answers: ["1", "0.5", "2", "1.5"],
    correct: "1"
  },
  {
    question: "What is 3.5 + 4.5?",
    answers: ["8", "7.5", "9", "7"],
    correct: "8"
  },
  {
    question: "What is the result of 10 - 4?",
    answers: ["6", "4", "5", "7"],
    correct: "6"
  },
  {
    question: "Which number is a multiple of 4?",
    answers: ["16", "13", "15", "11"],
    correct: "16"
  },
  {
    question: "How many zeros are in one thousand?",
    answers: ["3", "2", "4", "5"],
    correct: "3"
  },
  {
    question: "What is the product of 0 x 99?",
    answers: ["0", "99", "1", "100"],
    correct: "0"
  },
  {
    question: "What is the largest two-digit number?",
    answers: ["99", "100", "98", "89"],
    correct: "99"
  },
  {
    question: "What is 18 - 9?",
    answers: ["9", "8", "10", "7"],
    correct: "9"
  },
  {
    question: "What is the sum of angles in a triangle?",
    answers: ["180°", "90°", "360°", "270°"],
    correct: "180°"
  },
  {
    question: "What comes after 999?",
    answers: ["1000", "1001", "998", "9999"],
    correct: "1000"
  },
  {
    question: "What is 5 x 0?",
    answers: ["0", "5", "1", "10"],
    correct: "0"
  }
];
