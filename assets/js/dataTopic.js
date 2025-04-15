// Separate objects for each topic, each containing 15 questions

const geographyQuiz = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Rome", "Berlin"],
      correctAnswer: "Paris"
    },
    {
      question: "Which continent is the Sahara Desert located in?",
      options: ["Asia", "Africa", "Australia", "South America"],
      correctAnswer: "Africa"
    },
    {
      question: "Which is the longest river in the world?",
      options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
      correctAnswer: "Nile"
    },
    {
      question: "What is the capital city of Australia?",
      options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
      correctAnswer: "Canberra"
    },
    {
      question: "Which country has the largest population?",
      options: ["India", "USA", "China", "Brazil"],
      correctAnswer: "China"
    },
    {
      question: "Which ocean lies on the east coast of the United States?",
      options: ["Atlantic", "Pacific", "Indian", "Arctic"],
      correctAnswer: "Atlantic"
    },
    {
      question: "Mount Everest is located in which mountain range?",
      options: ["Andes", "Rockies", "Alps", "Himalayas"],
      correctAnswer: "Himalayas"
    },
    {
      question: "Which country is known as the Land of the Rising Sun?",
      options: ["China", "Japan", "Thailand", "Vietnam"],
      correctAnswer: "Japan"
    },
    {
      question: "What is the largest country in the world by area?",
      options: ["USA", "Russia", "Canada", "China"],
      correctAnswer: "Russia"
    },
    {
      question: "Which continent is the smallest by land area?",
      options: ["Europe", "Australia", "Antarctica", "South America"],
      correctAnswer: "Australia"
    },
    {
      question: "The Great Wall is located in which country?",
      options: ["China", "India", "Japan", "Korea"],
      correctAnswer: "China"
    },
    {
      question: "Which U.S. state is known as the Sunshine State?",
      options: ["California", "Florida", "Texas", "Hawaii"],
      correctAnswer: "Florida"
    },
    {
      question: "How many continents are there?",
      options: ["5", "6", "7", "8"],
      correctAnswer: "7"
    },
    {
      question: "Which country has the most islands?",
      options: ["Indonesia", "Philippines", "Sweden", "Canada"],
      correctAnswer: "Sweden"
    },
    {
      question: "Which desert is the largest in the world?",
      options: ["Gobi", "Sahara", "Antarctic", "Kalahari"],
      correctAnswer: "Antarctic"
    },
    {
      question: "What is the capital of Canada?",
      options: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
      correctAnswer: "Ottawa"
    },
    {
      question: "Which river flows through London?",
      options: ["Thames", "Seine", "Danube", "Rhine"],
      correctAnswer: "Thames"
    },
    {
      question: "What is the capital of Egypt?",
      options: ["Cairo", "Alexandria", "Luxor", "Giza"],
      correctAnswer: "Cairo"
    },
    {
      question: "In which country is the city of Istanbul located?",
      options: ["Greece", "Turkey", "Bulgaria", "Italy"],
      correctAnswer: "Turkey"
    },
    {
      question: "Which country is shaped like a boot?",
      options: ["France", "Spain", "Italy", "Portugal"],
      correctAnswer: "Italy"
    },
    {
      question: "Which continent has the most countries?",
      options: ["Asia", "Europe", "Africa", "South America"],
      correctAnswer: "Africa"
    },
    {
      question: "What is the capital of Germany?",
      options: ["Munich", "Frankfurt", "Berlin", "Hamburg"],
      correctAnswer: "Berlin"
    },
    {
      question: "Which two continents does Russia span?",
      options: ["Europe and Asia", "Asia and Africa", "Europe and Africa", "Asia and Australia"],
      correctAnswer: "Europe and Asia"
    },
    {
      question: "What is the name of the sea between Europe and Africa?",
      options: ["Red Sea", "Black Sea", "Mediterranean Sea", "Baltic Sea"],
      correctAnswer: "Mediterranean Sea"
    },
    {
      question: "Which mountain is the tallest in North America?",
      options: ["Mount Logan", "Mount McKinley (Denali)", "Mount Saint Elias", "Pico de Orizaba"],
      correctAnswer: "Mount McKinley (Denali)"
    },
    {
      question: "What is the name of the largest rainforest?",
      options: ["Amazon", "Congo", "Daintree", "Sundarbans"],
      correctAnswer: "Amazon"
    },
    {
      question: "What is the capital of Spain?",
      options: ["Madrid", "Barcelona", "Valencia", "Seville"],
      correctAnswer: "Madrid"
    },
    {
      question: "Which country is home to the Andes Mountains?",
      options: ["Chile", "Argentina", "Peru", "All of the above"],
      correctAnswer: "All of the above"
    },
    {
      question: "Which river flows through Paris?",
      options: ["Seine", "Rhine", "Danube", "Loire"],
      correctAnswer: "Seine"
    },
    {
      question: "Which is the southernmost continent?",
      options: ["Africa", "South America", "Australia", "Antarctica"],
      correctAnswer: "Antarctica"
    }
  ];

const historyQuiz = [
    {
      question: "Who was the first President of the United States?",
      options: ["George Washington", "Abraham Lincoln", "John Adams", "Thomas Jefferson"],
      correctAnswer: "George Washington"
    },
    {
      question: "In which year did World War II end?",
      options: ["1945", "1939", "1918", "1950"],
      correctAnswer: "1945"
    },
    {
      question: "Who was the famous civil rights leader who gave the 'I Have a Dream' speech?",
      options: ["Martin Luther King Jr.", "Malcolm X", "Rosa Parks", "Frederick Douglass"],
      correctAnswer: "Martin Luther King Jr."
    },
    {
      question: "What ancient civilization built the pyramids?",
      options: ["Romans", "Greeks", "Egyptians", "Babylonians"],
      correctAnswer: "Egyptians"
    },
    {
      question: "Who was the leader of Nazi Germany during World War II?",
      options: ["Joseph Stalin", "Winston Churchill", "Adolf Hitler", "Benito Mussolini"],
      correctAnswer: "Adolf Hitler"
    },
    {
      question: "Which ship sank in 1912 after hitting an iceberg?",
      options: ["Titanic", "Lusitania", "Queen Mary", "Britannic"],
      correctAnswer: "Titanic"
    },
    {
      question: "Who discovered America in 1492?",
      options: ["Christopher Columbus", "Amerigo Vespucci", "Marco Polo", "Leif Erikson"],
      correctAnswer: "Christopher Columbus"
    },
    {
      question: "What wall fell in 1989 symbolizing the end of the Cold War?",
      options: ["The Berlin Wall", "The Great Wall of China", "The Iron Curtain", "Hadrian's Wall"],
      correctAnswer: "The Berlin Wall"
    },
    {
      question: "Which empire was ruled by Julius Caesar?",
      options: ["Greek Empire", "Roman Empire", "Persian Empire", "Byzantine Empire"],
      correctAnswer: "Roman Empire"
    },
    {
      question: "Who was Queen of England during the Spanish Armada?",
      options: ["Elizabeth I", "Mary I", "Victoria", "Anne"],
      correctAnswer: "Elizabeth I"
    },
    {
      question: "What was the name of the war between the North and South in the United States?",
      options: ["American Civil War", "Revolutionary War", "War of 1812", "Cold War"],
      correctAnswer: "American Civil War"
    },
    {
      question: "Who painted the Mona Lisa?",
      options: ["Leonardo da Vinci", "Michelangelo", "Raphael", "Donatello"],
      correctAnswer: "Leonardo da Vinci"
    },
    {
      question: "In which country did the Industrial Revolution begin?",
      options: ["Germany", "United States", "France", "United Kingdom"],
      correctAnswer: "United Kingdom"
    },
    {
      question: "Which US President abolished slavery?",
      options: ["Abraham Lincoln", "George Washington", "Thomas Jefferson", "Theodore Roosevelt"],
      correctAnswer: "Abraham Lincoln"
    },
    {
      question: "What year did man first land on the moon?",
      options: ["1969", "1972", "1959", "1980"],
      correctAnswer: "1969"
    },
    {
      question: "Who was the famous nurse during the Crimean War?",
      options: ["Florence Nightingale", "Marie Curie", "Clara Barton", "Mary Seacole"],
      correctAnswer: "Florence Nightingale"
    },
    {
      question: "Which empire was known for its road network and gladiators?",
      options: ["Greek Empire", "Roman Empire", "Mongol Empire", "Ottoman Empire"],
      correctAnswer: "Roman Empire"
    },
    {
      question: "What was the name of the first man-made satellite launched into space?",
      options: ["Sputnik", "Apollo", "Explorer", "Voyager"],
      correctAnswer: "Sputnik"
    },
    {
      question: "Who was the British Prime Minister during most of World War II?",
      options: ["Neville Chamberlain", "Winston Churchill", "Clement Attlee", "Margaret Thatcher"],
      correctAnswer: "Winston Churchill"
    },
    {
      question: "In what year did the Berlin Wall go up?",
      options: ["1961", "1955", "1970", "1980"],
      correctAnswer: "1961"
    },
    {
      question: "What was the name of the policy to prevent the spread of communism after WWII?",
      options: ["Containment", "Domino Theory", "Isolationism", "Marshall Plan"],
      correctAnswer: "Containment"
    },
    {
      question: "Which pharaoh's tomb was discovered in 1922?",
      options: ["Tutankhamun", "Ramses II", "Cleopatra", "Akhenaten"],
      correctAnswer: "Tutankhamun"
    },
    {
      question: "Who was the first man in space?",
      options: ["Yuri Gagarin", "Neil Armstrong", "Buzz Aldrin", "John Glenn"],
      correctAnswer: "Yuri Gagarin"
    },
    {
      question: "What was the Renaissance?",
      options: ["A cultural rebirth", "A war", "A religion", "A disease"],
      correctAnswer: "A cultural rebirth"
    },
    {
      question: "Which country did Napoleon Bonaparte rule?",
      options: ["France", "Germany", "Italy", "Spain"],
      correctAnswer: "France"
    },
    {
      question: "Where did the Black Death originate?",
      options: ["Asia", "Europe", "Africa", "America"],
      correctAnswer: "Asia"
    },
    {
      question: "Who was the founder of Islam?",
      options: ["Muhammad", "Jesus", "Buddha", "Abraham"],
      correctAnswer: "Muhammad"
    },
    {
      question: "Which ancient city was destroyed by a volcanic eruption in 79 AD?",
      options: ["Pompeii", "Athens", "Carthage", "Troy"],
      correctAnswer: "Pompeii"
    },
    {
      question: "What was the Cold War mainly about?",
      options: ["Ideological conflict between USA and USSR", "Oil", "Territory", "Religion"],
      correctAnswer: "Ideological conflict between USA and USSR"
    },
    {
      question: "Who was assassinated in Sarajevo in 1914, starting World War I?",
      options: ["Archduke Franz Ferdinand", "Kaiser Wilhelm", "Winston Churchill", "Tsar Nicholas II"],
      correctAnswer: "Archduke Franz Ferdinand"
    }
  ];
  
const mathQuiz = [
    {
      question: "What is 7 + 8?",
      options: ["14", "15", "16", "13"],
      correctAnswer: "15"
    },
    {
      question: "What is 12 x 5?",
      options: ["60", "50", "70", "55"],
      correctAnswer: "60"
    },
    {
      question: "What is the square root of 81?",
      options: ["9", "8", "7", "6"],
      correctAnswer: "9"
    },
    {
      question: "What is 100 divided by 4?",
      options: ["25", "20", "30", "24"],
      correctAnswer: "25"
    },
    {
      question: "What is the value of Pi (π) approximately?",
      options: ["3.14", "2.17", "1.41", "4.00"],
      correctAnswer: "3.14"
    },
    {
      question: "What is 15% of 200?",
      options: ["30", "25", "35", "40"],
      correctAnswer: "30"
    },
    {
      question: "What is 9 x 9?",
      options: ["81", "72", "99", "91"],
      correctAnswer: "81"
    },
    {
      question: "What is the perimeter of a square with side 6?",
      options: ["24", "18", "12", "36"],
      correctAnswer: "24"
    },
    {
      question: "What is the area of a rectangle with length 8 and width 3?",
      options: ["24", "11", "21", "18"],
      correctAnswer: "24"
    },
    {
      question: "What is 0.5 as a fraction?",
      options: ["1/2", "1/3", "1/4", "2/3"],
      correctAnswer: "1/2"
    },
    {
      question: "What is 3² (3 squared)?",
      options: ["9", "6", "3", "12"],
      correctAnswer: "9"
    },
    {
      question: "How many degrees are in a right angle?",
      options: ["90", "45", "180", "60"],
      correctAnswer: "90"
    },
    {
      question: "What comes next in the sequence: 2, 4, 6, 8, ___?",
      options: ["10", "12", "14", "9"],
      correctAnswer: "10"
    },
    {
      question: "What is the value of 3x if x = 4?",
      options: ["12", "7", "9", "10"],
      correctAnswer: "12"
    },
    {
      question: "What is the sum of angles in a triangle?",
      options: ["180", "90", "360", "270"],
      correctAnswer: "180"
    },
    {
      question: "What is 144 ÷ 12?",
      options: ["12", "10", "14", "11"],
      correctAnswer: "12"
    },
    {
      question: "What is 5³ (5 cubed)?",
      options: ["125", "15", "25", "100"],
      correctAnswer: "125"
    },
    {
      question: "What is the decimal of 1/4?",
      options: ["0.25", "0.4", "0.5", "0.75"],
      correctAnswer: "0.25"
    },
    {
      question: "What is the next prime number after 7?",
      options: ["11", "9", "10", "13"],
      correctAnswer: "11"
    },
    {
      question: "What is 18 x 9?",
      options: ["9", "8", "10", "7"],
      correctAnswer: "9"
    },
    {
      question: "Which number is an even number?",
      options: ["8", "9", "11", "13"],
      correctAnswer: "8"
    },
    {
      question: "How many sides does a hexagon have?",
      options: ["6", "5", "8", "7"],
      correctAnswer: "6"
    },
    {
      question: "What is 20% of 50?",
      options: ["10", "5", "15", "20"],
      correctAnswer: "10"
    },
    {
      question: "What is 11 + 22?",
      options: ["33", "32", "31", "30"],
      correctAnswer: "33"
    },
    {
      question: "If a = 5 and b = 3, what is a + b?",
      options: ["8", "9", "7", "6"],
      correctAnswer: "8"
    },
    {
      question: "What is the smallest prime number?",
      options: ["2", "1", "3", "5"],
      correctAnswer: "2"
    },
    {
      question: "What is 1/2 + 1/2?",
      options: ["1", "0.5", "1.5", "2"],
      correctAnswer: "1"
    },
    {
      question: "What is 10 squared (10²)?",
      options: ["100", "20", "10", "110"],
      correctAnswer: "100"
    },
    {
      question: "What is 60 ÷ 6?",
      options: ["10", "6", "12", "8"],
      correctAnswer: "10"
    },
    {
      question: "What is 4 x 7?",
      options: ["28", "24", "32", "36"],
      correctAnswer: "28"
    }
  ];
  
