let count = 0;
let flag = "A"
document.querySelectorAll(".start").forEach((e) => {
  e.addEventListener("click", () => {  
    startTime = new Date().getTime();
    newGame();
    count = 0;
    gsap.to(".result-div", {
      opacity:0
    })
  })
});

const display = document.querySelector(".quote");
const typedValueElement = document.querySelector(".input");

function newGame() {
  if (count === 2) {
    gameOver();
    return;
  }
  count++;
  getNewQuote();
}

function getNewQuote() {
  const currentQuote = getQuote();
  words = currentQuote.split(" ");
  wordIndex = 0;
  spanWords = words.map((e) => {
    return `<span>${e}</span>`;
  });
  display.innerHTML = spanWords.join("");
  display.childNodes[0].classList = "highlight";

  typedValueElement.value = "";
  typedValueElement.focus();

  const countBox = document.querySelector(".count");
  typedValueElement.addEventListener("input", (e) => {
    const currentWord = words[wordIndex];
    const inputVal = typedValueElement.value;

    if (inputVal === currentWord && wordIndex === words.length - 1) {
      typedValueElement.value = "";
      newGame();
    } else if (inputVal.endsWith(" ") && inputVal.trim() === currentWord) {
      typedValueElement.value = "";
      wordIndex++;

      for (const words of display.childNodes) {
        words.classList = "";
      }

      display.childNodes[wordIndex].className = "highlight";
    } else if (inputVal !== currentWord && inputVal.trim() !== currentWord) {
      display.childNodes[wordIndex].className = "error";
    }
  });
}

let gameOver = () => {
  gsap.to(".result-div", {
    opacity: 1
  })
  display.innerHTML = "Press Restart to continue...";
  const timeTaken = new Date().getTime() - startTime;
  const start = document.querySelector(".start");
  document.querySelector(".result").innerHTML = `you finished in ${timeTaken / 1000} seconds`;
  start.innerHTML = "Restart";
};

const level = () => {
  document.querySelector(".easy").addEventListener("click", () => {
    document.querySelectorAll(".level").forEach((e) => {
      e.innerHTML = "Easy";
    })
    flag = "A";
  });
  document.querySelector(".medium").addEventListener("click", () => {
    document.querySelectorAll(".level").forEach((e) => {
      e.innerHTML = "Medium";
    })
    flag = "B";
  });
  document.querySelector(".hard").addEventListener("click", () => {
    document.querySelectorAll(".level").forEach((e) => {
      e.innerHTML = "Hard";
    })
    flag = "C";
  });
};
level();

function getQuote() {
  const quotesEasy = [
    "Kindness is a language everyone understands.",
    "Smiles are the universal welcome.",
    "Dream big and work hard to make it real.",
    "Every day is a new chance to be better.",
    "Love is the key to a happy heart.",
    "In unity, we find strength and resilience.",
    "Believe in yourself, you are capable of amazing things.",
    "Friendship makes life more beautiful and meaningful.",
    "Life is an adventure, embrace the journey.",
    "Mistakes are lessons in disguise; learn and grow.",
    "Happiness is a choice, choose it every day.",
    "Family is where love and support are endless.",
    "Peace begins with a smile and understanding.",
    "Hope is the anchor of the soul.",
    "Hard work leads to success and fulfillment.",
    "Life is a gift; cherish every moment.",
    "Kind words can change someone's entire day.",
    "Courage is the first step to greatness.",
    "Positive thoughts lead to a positive life.",
    "Success is the result of determination and effort.",
    "Gratitude turns what we have into enough.",
    "Be yourself; you are unique and wonderful.",
    "You are never alone; the stars are with you.",
    "Time heals; wounds become wisdom with time.",
    "Respect is the foundation of all relationships.",
    "Your journey is as important as your destination.",
    "Forgiveness sets the heart free from burdens.",
    "Laughter is the music of the heart.",
    "Learn from yesterday; live for today.",
    "Listen more, speak less, and understand deeply.",
    "In the dark, stars shine the brightest.",
    "Challenges make us stronger and more resilient.",
    "With patience, all things become possible.",
    "Dreams turn into reality with determination.",
    "Simplicity is the ultimate sophistication.",
    "Love knows no boundaries; it's endless and unconditional.",
    "Kind hearts create a world of happiness.",
    "A small act of kindness can change lives.",
    "Believe in miracles, for they happen every day.",
    "Happiness is a journey, not a destination.",
  ];

  const quotesMedium = [
    "Perseverance conquers all challenges, no matter how daunting.",
    "Wisdom is not found in knowledge alone, but in its application.",
    "In the depths of struggle, we discover our true strength.",
    "Success is the intersection of opportunity and preparation.",
    "Great minds discuss ideas, small minds discuss people.",
    "The past is a guide, not a destination.",
    "Doubt may knock, but faith always answers the door.",
    "Empathy is the bridge that connects hearts and souls.",
    "The path to success is often paved with failures.",
    "In the chaos of life, find your inner calm.",
    "Courage is not the absence of fear but the triumph over it.",
    "Simplicity is the ultimate sophistication, as Da Vinci said.",
    "The best way to predict the future is to create it.",
    "Character is built through adversity and tested in times of challenge.",
    "The roots of education are bitter, but the fruit is sweet.",
    "Life's true treasures are found in the people we love.",
    "Change is inevitable; growth is a choice we make.",
    "Kindness is the language that the deaf can hear and the blind can see.",
    "In every ending, there's a new beginning waiting to unfold.",
    "A moment of patience can prevent a lifetime of regret.",
    "Success is the result of preparation, hard work, and learning.",
    "Find joy in the journey, not just the destination.",
    "The only limit to our realization of tomorrow will be our doubts of today.",
    "Wealth consists not in having great possessions, but in having few wants.",
    "Dreams are the blueprints for reality; dare to dream big.",
    "A ship is always safe at the shore, but that is not what it is built for.",
    "You are never too old to set another goal or dream a new dream.",
    "To improve is to change; to be perfect is to change often.",
    "The road to success is always under construction, so enjoy the ride.",
    "Life is a canvas; you are the artist of your destiny.",
    "Mistakes are proof that you are trying and learning along the way.",
    "Kindness is the best form of wisdom and the highest virtue.",
    "Don't count the days; make the days count."
  ];

  const quotesHard = [
    "In the vast cosmic expanse, we're but stardust observers.",
    "A life well-lived requires enduring the crucible of adversity.",
    "Eloquence resides in the silence of profound contemplation.",
    "Serenity finds refuge in the tranquil recesses of solitude.",
    "Voraciously seeking knowledge, we embark on an eternal odyssey.",
    "The ineffable beauty of existence evades facile explanation.",
    "In the labyrinth of existence, meaning is our Sisyphean quest.",
    "Wisdom emerges from the crucible of experience's relentless forge.",
    "The esoteric symphony of the universe beckons to contemplative minds.",
    "In the tapestry of life, we weave our ephemeral legacies.",
  ];

  if(flag ==="A") {
    return quotesEasy[Math.floor(Math.random() * quotesEasy.length)];
  }
  else if(flag === "B") {
    return quotesMedium[Math.floor(Math.random() * quotesMedium.length)];
  }
  else {
    return quotesHard[Math.floor(Math.random() * quotesHard.length)];
  }
}

gsap.to(".loader", {
  scaleX: 0,
  opacity: 0,
  duration: 0.5,
  delay: 1.5,
});

gsap.to(".loader-2", {
  scaleX: 0,
  opacity: 0,
  duration: 0.5,
  delay: 1.5,
});
