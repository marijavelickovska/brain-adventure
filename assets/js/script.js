document.addEventListener("DOMContentLoaded", function() {

    


});

// Separate objects for each topic, each containing 15 questions
const geographyQuiz = [
    {
      question: "What is the capital of Canada?",
      answers: ["Toronto", "Ottawa", "Vancouver", "Montreal"],
      correct: "Ottawa"
    },
    {
      question: "Which river is the longest in the world?",
      answers: ["Amazon", "Yangtze", "Mississippi", "Nile"],
      correct: "Nile"
    },
    {
      question: "Which country has the most natural lakes?",
      answers: ["Russia", "Canada", "USA", "Brazil"],
      correct: "Canada"
    },
    {
      question: "Which desert is the largest in the world?",
      answers: ["Gobi", "Kalahari", "Sahara", "Antarctic Desert"],
      correct: "Antarctic Desert"
    },
    {
      question: "Which is the smallest country in the world?",
      answers: ["Monaco", "Nauru", "Vatican City", "San Marino"],
      correct: "Vatican City"
    },
    {
      question: "Which continent has the most countries?",
      answers: ["Asia", "Africa", "Europe", "South America"],
      correct: "Africa"
    },
    {
      question: "Mount Everest is located in which mountain range?",
      answers: ["Andes", "Alps", "Himalayas", "Rockies"],
      correct: "Himalayas"
    },
    {
      question: "Which ocean is the deepest?",
      answers: ["Atlantic", "Indian", "Southern", "Pacific"],
      correct: "Pacific"
    },
    {
      question: "What is the capital city of Australia?",
      answers: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
      correct: "Canberra"
    },
    {
      question: "Which European country has the most islands?",
      answers: ["Norway", "Sweden", "Greece", "Finland"],
      correct: "Sweden"
    },
    {
      question: "What is the longest mountain range in the world?",
      answers: ["Himalayas", "Andes", "Alps", "Rockies"],
      correct: "Andes"
    },
    {
      question: "Which country does not border the Mediterranean Sea?",
      answers: ["Portugal", "Italy", "Turkey", "Egypt"],
      correct: "Portugal"
    },
    {
      question: "Which U.S. state has the most active volcanoes?",
      answers: ["California", "Hawaii", "Washington", "Alaska"],
      correct: "Alaska"
    },
    {
      question: "What is the capital of Argentina?",
      answers: ["Buenos Aires", "Cordoba", "Rosario", "Mendoza"],
      correct: "Buenos Aires"
    },
    {
      question: "Which African country has the largest population?",
      answers: ["Nigeria", "Egypt", "South Africa", "Ethiopia"],
      correct: "Nigeria"
    }
  ];
  const historyQuiz = [
    {
      question: "Who was the first president of the United States?",
      answers: ["Thomas Jefferson", "George Washington", "Abraham Lincoln", "John Adams"],
      correct: "George Washington"
    },
    {
      question: "In which year did World War II end?",
      answers: ["1940", "1945", "1939", "1950"],
      correct: "1945"
    },
    {
      question: "Which empire was ruled by Julius Caesar?",
      answers: ["Greek", "Egyptian", "Roman", "Ottoman"],
      correct: "Roman"
    },
    {
      question: "The Great Wall is located in which country?",
      answers: ["India", "Japan", "China", "Mongolia"],
      correct: "China"
    },
    {
      question: "Who discovered America in 1492?",
      answers: ["Christopher Columbus", "Vasco da Gama", "James Cook", "Marco Polo"],
      correct: "Christopher Columbus"
    },
    {
      question: "What was the name of the ship that sank in 1912?",
      answers: ["Britannic", "Titanic", "Lusitania", "Queen Mary"],
      correct: "Titanic"
    },
    {
      question: "Which war was fought between the North and South in the USA?",
      answers: ["Revolutionary War", "World War I", "Civil War", "Vietnam War"],
      correct: "Civil War"
    },
    {
      question: "Who was the famous queen of ancient Egypt?",
      answers: ["Cleopatra", "Nefertiti", "Isis", "Hatshepsut"],
      correct: "Cleopatra"
    },
    {
      question: "In which city was the Berlin Wall located?",
      answers: ["Paris", "Berlin", "Moscow", "Warsaw"],
      correct: "Berlin"
    },
    {
      question: "Who led India to independence with non-violent resistance?",
      answers: ["Gandhi", "Nehru", "Bose", "Patel"],
      correct: "Gandhi"
    },
    {
      question: "What year did the French Revolution begin?",
      answers: ["1789", "1812", "1776", "1804"],
      correct: "1789"
    },
    {
      question: "Which civilization built Machu Picchu?",
      answers: ["Aztecs", "Mayans", "Incas", "Olmecs"],
      correct: "Incas"
    },
    {
      question: "Who was the British Prime Minister during WWII?",
      answers: ["Winston Churchill", "Neville Chamberlain", "Tony Blair", "Margaret Thatcher"],
      correct: "Winston Churchill"
    },
    {
      question: "The Cold War was mainly between which two countries?",
      answers: ["USA and China", "USA and USSR", "USA and Germany", "USA and Japan"],
      correct: "USA and USSR"
    },
    {
      question: "What ancient city was buried by a volcanic eruption in 79 AD?",
      answers: ["Pompeii", "Rome", "Athens", "Babylon"],
      correct: "Pompeii"
    }
  ];
  const mathQuiz = [
    {
      question: "What is the square root of 64?",
      answers: ["6", "7", "8", "9"],
      correct: "8"
    },
    {
      question: "What is 15% of 200?",
      answers: ["20", "25", "30", "35"],
      correct: "30"
    },
    {
      question: "What is the value of π (pi) to two decimal places?",
      answers: ["3.12", "3.14", "3.15", "3.16"],
      correct: "3.14"
    },
    {
      question: "What is 9 x 8?",
      answers: ["72", "81", "64", "96"],
      correct: "72"
    },
    {
      question: "What is the result of 3²?",
      answers: ["6", "9", "12", "8"],
      correct: "9"
    },
    {
      question: "What is 100 divided by 4?",
      answers: ["20", "25", "30", "40"],
      correct: "25"
    },
    {
      question: "What is the next prime number after 7?",
      answers: ["8", "9", "10", "11"],
      correct: "11"
    },
    {
      question: "What is the perimeter of a square with side length 6?",
      answers: ["24", "12", "18", "36"],
      correct: "24"
    },
    {
      question: "If a triangle has angles 60° and 60°, what is the third angle?",
      answers: ["60°", "45°", "30°", "90°"],
      correct: "60°"
    },
    {
      question: "What is 5 factorial (5!)?",
      answers: ["120", "60", "100", "25"],
      correct: "120"
    },
    {
        question: "If a rectangle has a length of 10 and a width of 5, what is its area?",
        answers: ["15", "50", "30", "25"],
        correct: "50"
    },
    {
      question: "What is 0.5 as a fraction?",
      answers: ["1/2", "1/3", "1/4", "2/3"],
      correct: "1/2"
    },
    {
      question: "What is 7 + 6 x 2?",
      answers: ["26", "20", "19", "15"],
      correct: "19" 
    },
    {
      question: "What is the smallest even number?",
      answers: ["2", "0", "1", "4"],
      correct: "0"
    },
    {
      question: "How many degrees are in a right angle?",
      answers: ["45", "90", "120", "180"],
      correct: "90"
    }
  ];
  
