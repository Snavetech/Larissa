"use strict";

// ============================================================================
// PERSONALIZE HERE
// Every editable word, photo path, quiz answer, and final note lives in this
// object. The current copy is a first draft from Evans for a "just because"
// surprise. Replace the three prompts below with real Larissa details, then
// weave them into the captions, quiz, or final message if you want.
// ============================================================================
const CONTENT = {
  recipient: "Larissa",
  sender: "Evans",
  occasion: "just because",
  personalDetailsToReplace: {
    insideJoke: "REPLACE: an inside joke only you two understand",
    favoriteThing: "REPLACE: something Larissa always loves",
    favoriteMemory: "REPLACE: a specific day you both still talk about",
  },
  photos: [
    {
      src: "photos/Image 1.jpeg",
      alt: "{recipient} on graduation day wearing a Class of 2026 stole among friends",
    },
    {
      src: "photos/Image 2.jpeg",
      alt: "{recipient} smiling outdoors beside large orange letters",
    },
    {
      src: "photos/Image 3.jpeg",
      alt: "{recipient} smiling and making a peace sign indoors",
    },
    {
      src: "photos/Image 4.jpeg",
      alt: "{recipient} smiling outdoors in her white and navy outfit",
    },
    {
      src: "photos/Image 5.jpeg",
      alt: "{recipient} smiling indoors while holding a booklet",
    },
    {
      src: "photos/Image 6.jpeg",
      alt: "{recipient} and {sender} smiling together outdoors",
    },
    {
      src: "photos/Image 7.jpeg",
      alt: "Close-up of {recipient} smiling and making a peace sign, {sender}'s favourite picture of her",
    },
  ],
  meta: {
    title: "{recipient}'s Little Surprise Quest",
    description: "A playful {occasion} surprise for {recipient}, made by {sender}.",
  },
  ui: {
    questLabel: "{recipient}'s surprise quest",
    readyLevel: "Ready when you are",
    levelTemplate: "Level {current} of {total}",
    progressLabel: "Surprise quest progress",
    soundOff: "Sound off",
    soundOn: "Sound on",
    soundOffLabel: "Turn sound effects off",
    soundOnLabel: "Turn sound effects on",
    initialsSeparator: " + ",
    startSticker: "START",
    startButton: "Start the quest",
    continueButton: "Next level",
    pathNumberTemplate: "Path {number}",
    pathHint: "Tap to peek inside",
    pathResult: "Excellent choice",
    collectCounterTemplate: "{current} / {total}",
    collectTargetTemplate: "Collect memory {number}",
    collectedPhotosLabel: "Collected photos",
    answerLetters: ["A", "B", "C"],
    answerTemplate: "Answer {letter}: {answer}",
    galleryCardTemplate: "Memory {number}",
    galleryCountTemplate: "Memory {current} of {total}",
    galleryAnnouncementTemplate: "Memory {current} of {total}. {title}. {caption}",
    previousMemory: "Show the previous memory",
    nextMemory: "Show the next memory",
    openFinal: "Open the final surprise",
    swipeNote: "Tip: you can swipe the card too.",
    playAgain: "Play again",
  },
  start: {
    kicker: "A tiny quest from {sender}",
    title: "Hi {recipient}, there's something for you",
    subtitle: "Six little levels, a handful of memories, and one very important message at the end.",
    note: "Sound is optional. Curiosity is highly recommended.",
  },
  gift: {
    kicker: "Level 1: First things first",
    title: "A small thing, wrapped with a lot of care",
    instruction: "Tap the gift to see what is hiding inside.",
    tapHint: "Tap to unwrap",
    openedHint: "Unwrapped",
    reveal: "Plot twist: the gift is a whole adventure.",
  },
  paths: {
    kicker: "Level 2: Pick a route",
    title: "Choose your kind of memory",
    instruction: "There is no wrong path. They all lead to a {recipient} moment worth keeping.",
    choices: [
      {
        title: "The Milestone Route",
        shape: "sun",
        color: "#ffd76d",
        photoIndex: 0,
        caption: "Class of 2026, a well-earned milestone, and the quiet focus of someone already thinking about what comes next.",
      },
      {
        title: "The Sunshine Route",
        shape: "loop",
        color: "#f7a8bf",
        photoIndex: 1,
        caption: "That smile, that pose, and the effortless way you make a bright day look even brighter.",
      },
      {
        title: "The Peace-Sign Route",
        shape: "star",
        color: "#8fded5",
        photoIndex: 2,
        caption: "A peace sign, a big smile, and the kind of energy that makes every photo feel alive.",
      },
    ],
  },
  collection: {
    kicker: "Level 3: Catch the good stuff",
    title: "Collect five bright moments",
    instruction: "Tap every floating token. Each one is carrying a photo.",
    completeTitle: "Full set collected",
    completeCopy: "Five snapshots of hard work, confidence, and a smile that keeps showing up brightly.",
    items: [
      {
        photoIndex: 0,
        caption: "A milestone earned, not handed over.",
      },
      {
        photoIndex: 1,
        caption: "Joy, but make it effortless.",
      },
      {
        photoIndex: 2,
        caption: "Peace-sign confidence, naturally.",
      },
      {
        photoIndex: 3,
        caption: "The smile that never misses.",
      },
      {
        photoIndex: 4,
        caption: "Quiet confidence, caught on camera.",
      },
    ],
  },
  quiz: {
    kicker: "Level 4: The memory lock",
    title: "Only a {recipient} expert gets through",
    instruction: "Choose the best answer. The lock is dramatic, but it does allow retries.",
    question: "Which {recipient} superpower deserves its own trophy?",
    answers: [
      "Being Industrious and Hardworking",
      "Cooking fresh meals daily",
      "Chewing drugs instead of swallowing",
    ],
    correctAnswer: 0,
    wrongMessages: [
      "A bold guess. The tiny lock is unconvinced. Try again.",
      "Very plausible, but the lock just cleared its throat dramatically.",
      "Not this one. You have unlimited friendship-powered retries.",
    ],
    correctMessage: "Unlocked. Of course you knew it: the real superpower is being Industrious and Hardworking.",
  },
  gallery: {
    kicker: "Level 5: The good-times archive",
    title: "A few moments worth replaying",
    instruction: "Flip through seven cards. I saved the two most personal ones for last.",
    cards: [
      {
        photoIndex: 0,
        title: "The milestone",
        caption: "Class of 2026. A proud moment that carries all the effort, discipline, and determination it took to get there.",
      },
      {
        photoIndex: 1,
        title: "The sunshine pose",
        caption: "You somehow matched the brightness of the whole day and still made it look completely effortless.",
      },
      {
        photoIndex: 2,
        title: "The peace-sign moment",
        caption: "A little playful, completely confident, and unmistakably you.",
      },
      {
        photoIndex: 3,
        title: "The full smile",
        caption: "One of those smiles that makes the whole picture feel warmer.",
      },
      {
        photoIndex: 4,
        title: "Quiet confidence",
        caption: "No grand pose needed. You simply show up as yourself, and that is already enough.",
      },
      {
        photoIndex: 5,
        title: "Us",
        caption: "One picture, two friends, and a memory I am genuinely glad we share. This one always makes me smile.",
      },
      {
        photoIndex: 6,
        title: "My favourite picture of you",
        caption: "I saved this one for last on purpose. The smile, the peace sign, and the completely-you energy make it my favourite.",
      },
    ],
  },
  final: {
    kicker: "Level 6: The real reason",
    title: "{recipient}, you make life brighter",
    message:
      "This tiny quest is really just a long way of saying: I am very glad to call you my friend. You are industrious and hardworking, but what I admire just as much is the joy, confidence, and warmth you carry with you.\n\nI kept our picture and my favourite picture of you for the end on purpose. One reminds me how grateful I am for our friendship; the other feels bright, genuine, and completely you.\n\nThank you for the honest moments, the ridiculous moments, and the friendship that makes ordinary days worth remembering. This one is just because you deserve to be celebrated on completely normal days too.",
    signoff: "With all the friendship, {sender}",
    small: "Quest complete. Friendship status: legendary.",
  },
};
// ============================= END PERSONALIZE HERE ==========================

const SCENE_LEVELS = {
  start: 0,
  gift: 1,
  paths: 2,
  collect: 3,
  quiz: 4,
  gallery: 5,
  final: 6,
};

const COLLECTION_POSITIONS = [
  { left: 15, top: 22, delay: "0s", color: "#fff8ee" },
  { left: 77, top: 20, delay: "-0.6s", color: "#dcef72" },
  { left: 49, top: 43, delay: "-1.2s", color: "#ffd76d" },
  { left: 19, top: 73, delay: "-1.7s", color: "#f7a8bf" },
  { left: 78, top: 74, delay: "-2.1s", color: "#cdb5ed" },
];

const state = {
  currentScene: "start",
  transitioning: false,
  giftOpened: false,
  chosenPath: null,
  collected: new Set(),
  quizSolved: false,
  wrongAttempts: 0,
  galleryIndex: 0,
  soundEnabled: false,
  audioContext: null,
};

const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
let sceneTimer = null;
let popoverTimer = null;
let collectionCompleteTimer = null;
let confettiTimer = null;

const byId = (id) => document.getElementById(id);
const setText = (id, value) => {
  const element = byId(id);
  if (element) element.textContent = value;
};

function format(template, values) {
  return template.replace(/\{(\w+)\}/g, (match, key) =>
    Object.prototype.hasOwnProperty.call(values, key) ? values[key] : match,
  );
}

function personalize(template) {
  return format(template, {
    recipient: CONTENT.recipient,
    sender: CONTENT.sender,
    occasion: CONTENT.occasion,
  });
}

function initialFor(name) {
  return name.trim().charAt(0).toUpperCase();
}

function photoFor(entry) {
  return CONTENT.photos[entry.photoIndex];
}

function setStaticContent() {
  document.title = personalize(CONTENT.meta.title);
  const description = document.querySelector('meta[name="description"]');
  if (description) description.setAttribute("content", personalize(CONTENT.meta.description));
  document.documentElement.dataset.occasion = CONTENT.occasion;

  const copy = {
    "quest-label": CONTENT.ui.questLabel,
    "start-kicker": CONTENT.start.kicker,
    "start-title": CONTENT.start.title,
    "start-subtitle": CONTENT.start.subtitle,
    "start-button-label": CONTENT.ui.startButton,
    "start-note": CONTENT.start.note,
    "gift-kicker": CONTENT.gift.kicker,
    "gift-title": CONTENT.gift.title,
    "gift-instruction": CONTENT.gift.instruction,
    "gift-hint": CONTENT.gift.tapHint,
    "gift-reveal-copy": CONTENT.gift.reveal,
    "gift-continue-label": CONTENT.ui.continueButton,
    "paths-kicker": CONTENT.paths.kicker,
    "paths-title": CONTENT.paths.title,
    "paths-instruction": CONTENT.paths.instruction,
    "path-result-label": CONTENT.ui.pathResult,
    "path-continue-label": CONTENT.ui.continueButton,
    "collect-kicker": CONTENT.collection.kicker,
    "collect-title": CONTENT.collection.title,
    "collect-instruction": CONTENT.collection.instruction,
    "collection-complete-title": CONTENT.collection.completeTitle,
    "collection-complete-copy": CONTENT.collection.completeCopy,
    "collect-continue-label": CONTENT.ui.continueButton,
    "quiz-kicker": CONTENT.quiz.kicker,
    "quiz-title": CONTENT.quiz.title,
    "quiz-instruction": CONTENT.quiz.instruction,
    "quiz-question": CONTENT.quiz.question,
    "quiz-continue-label": CONTENT.ui.continueButton,
    "gallery-kicker": CONTENT.gallery.kicker,
    "gallery-title": CONTENT.gallery.title,
    "gallery-instruction": CONTENT.gallery.instruction,
    "swipe-note": CONTENT.ui.swipeNote,
    "final-kicker": CONTENT.final.kicker,
    "final-title": CONTENT.final.title,
    "final-message": CONTENT.final.message,
    "final-signoff": CONTENT.final.signoff,
    "final-small": CONTENT.final.small,
    "play-again-label": CONTENT.ui.playAgain,
  };

  Object.entries(copy).forEach(([id, value]) => setText(id, personalize(value)));

  const recipientInitial = initialFor(CONTENT.recipient);
  const senderInitial = initialFor(CONTENT.sender);
  setText("start-initials", `${senderInitial}${CONTENT.ui.initialsSeparator}${recipientInitial}`);
  setText("start-burst-initial", recipientInitial);
  setText("start-sticker-progress", CONTENT.ui.startSticker);
  setText("final-initial", recipientInitial);

  byId("progress-track").setAttribute("aria-label", CONTENT.ui.progressLabel);
  byId("gift-button").setAttribute("aria-label", CONTENT.gift.instruction);
  byId("collected-reel").setAttribute("aria-label", CONTENT.ui.collectedPhotosLabel);
  byId("gallery-previous").setAttribute("aria-label", CONTENT.ui.previousMemory);
  updateSoundButton();
}

function buildPathOptions() {
  const container = byId("path-options");
  container.replaceChildren();

  CONTENT.paths.choices.forEach((choice, index) => {
    const button = document.createElement("button");
    button.className = "path-card";
    button.type = "button";
    button.style.setProperty("--path-color", choice.color);
    button.dataset.pathIndex = String(index);

    const shape = document.createElement("span");
    shape.className = `path-card__shape path-card__shape--${choice.shape}`;
    shape.setAttribute("aria-hidden", "true");

    const number = document.createElement("span");
    number.className = "path-card__number";
    number.textContent = format(CONTENT.ui.pathNumberTemplate, { number: index + 1 });

    const title = document.createElement("span");
    title.className = "path-card__title";
    title.textContent = personalize(choice.title);

    const hint = document.createElement("span");
    hint.className = "path-card__hint";
    hint.textContent = CONTENT.ui.pathHint;

    button.append(shape, number, title, hint);
    button.addEventListener("click", () => choosePath(index));
    container.append(button);
  });
}

function choosePath(index) {
  if (state.chosenPath !== null) return;

  state.chosenPath = index;
  const choice = CONTENT.paths.choices[index];
  const choicePhoto = photoFor(choice);
  const options = [...document.querySelectorAll(".path-card")];
  const reveal = byId("path-reveal");

  options.forEach((option, optionIndex) => {
    option.disabled = true;
    option.classList.toggle("is-chosen", optionIndex === index);
  });
  byId("path-options").classList.add("has-choice");

  const photo = byId("path-photo");
  photo.src = choicePhoto.src;
  photo.alt = personalize(choicePhoto.alt);
  setText("path-name", personalize(choice.title));
  setText("path-caption", personalize(choice.caption));
  reveal.hidden = false;
  playSound("reveal");
  byId("path-continue").focus({ preventScroll: false });
}

function buildCollection() {
  state.collected = new Set();
  const targets = byId("collect-targets");
  const reel = byId("collected-reel");
  targets.replaceChildren();
  reel.replaceChildren();

  CONTENT.collection.items.forEach((item, index) => {
    const position = COLLECTION_POSITIONS[index] || COLLECTION_POSITIONS[index % COLLECTION_POSITIONS.length];
    const button = document.createElement("button");
    button.className = "collect-target";
    button.type = "button";
    button.style.setProperty("--left", `${position.left}%`);
    button.style.setProperty("--top", `${position.top}%`);
    button.style.setProperty("--delay", position.delay);
    button.style.setProperty("--target-color", position.color);
    button.setAttribute(
      "aria-label",
      format(CONTENT.ui.collectTargetTemplate, { number: index + 1 }),
    );
    button.addEventListener("click", () => collectItem(index, button));
    targets.append(button);
  });

  byId("collection-popover").hidden = true;
  byId("collection-popover").classList.remove("is-visible");
  byId("collection-complete").hidden = true;
  byId("collect-continue").hidden = true;
  updateCollectionCounter();
}

function collectItem(index, button) {
  if (state.collected.has(index)) return;

  state.collected.add(index);
  button.disabled = true;
  button.classList.add("is-caught");
  updateCollectionCounter();
  revealCollectedPhoto(index);
  addReelPhoto(index);
  playSound("collect");

  if (state.collected.size === CONTENT.collection.items.length) {
    window.clearTimeout(collectionCompleteTimer);
    collectionCompleteTimer = window.setTimeout(
      showCollectionComplete,
      motionPreference.matches ? 100 : 760,
    );
  }
}

function updateCollectionCounter() {
  setText(
    "collect-counter",
    format(CONTENT.ui.collectCounterTemplate, {
      current: state.collected.size,
      total: CONTENT.collection.items.length,
    }),
  );
}

function revealCollectedPhoto(index) {
  const item = CONTENT.collection.items[index];
  const itemPhoto = photoFor(item);
  const popover = byId("collection-popover");
  const photo = byId("collection-popover-photo");

  photo.src = itemPhoto.src;
  photo.alt = personalize(itemPhoto.alt);
  setText("collection-popover-caption", personalize(item.caption));
  popover.hidden = false;
  popover.classList.remove("is-visible");
  void popover.offsetWidth;
  popover.classList.add("is-visible");

  window.clearTimeout(popoverTimer);
  popoverTimer = window.setTimeout(() => {
    popover.classList.remove("is-visible");
    popover.hidden = true;
  }, motionPreference.matches ? 120 : 720);
}

function addReelPhoto(index) {
  const item = CONTENT.collection.items[index];
  const itemPhoto = photoFor(item);
  const figure = document.createElement("figure");
  const image = document.createElement("img");

  figure.className = "reel-photo";
  image.src = itemPhoto.src;
  image.alt = personalize(itemPhoto.alt);
  image.title = personalize(item.caption);
  figure.append(image);
  byId("collected-reel").append(figure);
}

function showCollectionComplete() {
  window.clearTimeout(popoverTimer);
  byId("collection-popover").classList.remove("is-visible");
  byId("collection-popover").hidden = true;
  byId("collection-complete").hidden = false;
  byId("collect-continue").hidden = false;
  playSound("success");
  byId("collect-continue").focus();
}

function buildQuiz() {
  const list = byId("answer-list");
  list.replaceChildren();

  CONTENT.quiz.answers.forEach((answer, index) => {
    const letter = CONTENT.ui.answerLetters[index] || String(index + 1);
    const button = document.createElement("button");
    const letterBadge = document.createElement("span");
    const answerText = document.createElement("span");
    const personalizedAnswer = personalize(answer);

    button.className = "answer-button";
    button.type = "button";
    button.setAttribute(
      "aria-label",
      format(CONTENT.ui.answerTemplate, { letter, answer: personalizedAnswer }),
    );
    letterBadge.className = "answer-button__letter";
    letterBadge.textContent = letter;
    answerText.textContent = personalizedAnswer;
    button.append(letterBadge, answerText);
    button.addEventListener("click", () => checkAnswer(index, button));
    list.append(button);
  });
}

function checkAnswer(index, button) {
  if (state.quizSolved) return;

  const card = byId("quiz-card");
  const buttons = [...document.querySelectorAll(".answer-button")];
  card.classList.remove("is-wrong");
  void card.offsetWidth;

  if (index === CONTENT.quiz.correctAnswer) {
    state.quizSolved = true;
    button.classList.add("is-correct");
    card.classList.add("is-correct");
    buttons.forEach((answerButton) => {
      answerButton.disabled = true;
    });
    setText("quiz-feedback", personalize(CONTENT.quiz.correctMessage));
    byId("quiz-continue").hidden = false;
    playSound("success");
    byId("quiz-continue").focus();
    return;
  }

  const message = CONTENT.quiz.wrongMessages[state.wrongAttempts % CONTENT.quiz.wrongMessages.length];
  state.wrongAttempts += 1;
  button.classList.add("is-wrong");
  card.classList.add("is-wrong");
  setText("quiz-feedback", personalize(message));
  playSound("wrong");

  window.setTimeout(() => {
    button.classList.remove("is-wrong");
    card.classList.remove("is-wrong");
  }, motionPreference.matches ? 30 : 430);
}

function resetQuiz() {
  state.quizSolved = false;
  state.wrongAttempts = 0;
  byId("quiz-card").classList.remove("is-wrong", "is-correct");
  setText("quiz-feedback", "");
  byId("quiz-continue").hidden = true;
  document.querySelectorAll(".answer-button").forEach((button) => {
    button.disabled = false;
    button.classList.remove("is-wrong", "is-correct");
  });
}

function buildGalleryDots() {
  const dots = byId("gallery-dots");
  dots.replaceChildren();
  CONTENT.gallery.cards.forEach(() => {
    const dot = document.createElement("span");
    dot.className = "gallery-dot";
    dots.append(dot);
  });
}

function announceGalleryCard() {
  const card = CONTENT.gallery.cards[state.galleryIndex];
  setText(
    "gallery-announcement",
    format(CONTENT.ui.galleryAnnouncementTemplate, {
      current: state.galleryIndex + 1,
      total: CONTENT.gallery.cards.length,
      title: personalize(card.title),
      caption: personalize(card.caption),
    }),
  );
}

function renderGallery(direction = "") {
  const card = CONTENT.gallery.cards[state.galleryIndex];
  const cardPhoto = photoFor(card);
  const total = CONTENT.gallery.cards.length;
  const memoryCard = byId("memory-card");
  const photo = byId("gallery-photo");
  const previous = byId("gallery-previous");
  const next = byId("gallery-next");

  photo.src = cardPhoto.src;
  photo.alt = personalize(cardPhoto.alt);
  setText(
    "gallery-card-number",
    format(CONTENT.ui.galleryCardTemplate, { number: String(state.galleryIndex + 1).padStart(2, "0") }),
  );
  setText("gallery-card-title", personalize(card.title));
  setText("gallery-card-caption", personalize(card.caption));
  setText(
    "gallery-count",
    format(CONTENT.ui.galleryCountTemplate, {
      current: state.galleryIndex + 1,
      total,
    }),
  );
  announceGalleryCard();

  previous.disabled = state.galleryIndex === 0;
  const onLastCard = state.galleryIndex === total - 1;
  next.setAttribute("aria-label", onLastCard ? CONTENT.ui.openFinal : CONTENT.ui.nextMemory);
  next.title = onLastCard ? CONTENT.ui.openFinal : CONTENT.ui.nextMemory;
  next.classList.toggle("is-final", onLastCard);

  document.querySelectorAll(".gallery-dot").forEach((dot, index) => {
    dot.classList.toggle("is-active", index === state.galleryIndex);
  });

  memoryCard.classList.remove("is-next", "is-previous");
  if (direction) {
    void memoryCard.offsetWidth;
    memoryCard.classList.add(direction === "next" ? "is-next" : "is-previous");
  }
}

function showNextGalleryCard() {
  if (state.galleryIndex >= CONTENT.gallery.cards.length - 1) {
    goToScene("final");
    return;
  }
  state.galleryIndex += 1;
  renderGallery("next");
  playSound("tap");
}

function showPreviousGalleryCard() {
  if (state.galleryIndex === 0) return;
  state.galleryIndex -= 1;
  renderGallery("previous");
  playSound("tap");
}

function updateHud(sceneName) {
  const level = SCENE_LEVELS[sceneName];
  const total = SCENE_LEVELS.final;
  const levelText =
    level === 0
      ? CONTENT.ui.readyLevel
      : format(CONTENT.ui.levelTemplate, { current: level, total });

  setText("level-label", levelText);
  byId("progress-fill").style.width = `${(level / total) * 100}%`;
  byId("progress-track").setAttribute("aria-valuenow", String(level));
  byId("progress-track").setAttribute("aria-valuetext", levelText);
}

function goToScene(sceneName) {
  if (state.transitioning || sceneName === state.currentScene) return;

  window.clearTimeout(sceneTimer);
  state.transitioning = true;
  const current = document.querySelector(`[data-scene="${state.currentScene}"]`);
  const next = document.querySelector(`[data-scene="${sceneName}"]`);
  const transitionDelay = motionPreference.matches ? 15 : 200;

  current.classList.add("is-leaving");
  sceneTimer = window.setTimeout(() => {
    current.classList.remove("is-active", "is-leaving");
    current.hidden = true;
    next.hidden = false;
    void next.offsetWidth;
    next.classList.add("is-active");

    state.currentScene = sceneName;
    state.transitioning = false;
    updateHud(sceneName);

    window.scrollTo({ top: 0, behavior: motionPreference.matches ? "auto" : "smooth" });
    const heading = next.querySelector("h1, h2");
    heading?.focus({ preventScroll: true });

    if (sceneName === "gallery") {
      setText("gallery-announcement", "");
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          if (state.currentScene === "gallery") announceGalleryCard();
        });
      });
    }

    if (sceneName === "final") {
      launchConfetti();
      playSound("final");
    }
  }, transitionDelay);
}

function openGift() {
  if (state.giftOpened) return;
  state.giftOpened = true;
  const gift = byId("gift-button");
  gift.disabled = true;
  gift.classList.add("is-open");
  setText("gift-hint", CONTENT.gift.openedHint);
  byId("gift-reveal").hidden = false;
  playSound("reveal");
  byId("gift-continue").focus();
}

function updateSoundButton() {
  const button = byId("sound-toggle");
  button.setAttribute("aria-pressed", String(state.soundEnabled));
  button.setAttribute(
    "aria-label",
    state.soundEnabled ? CONTENT.ui.soundOffLabel : CONTENT.ui.soundOnLabel,
  );
  setText("sound-label", state.soundEnabled ? CONTENT.ui.soundOn : CONTENT.ui.soundOff);
}

function toggleSound() {
  state.soundEnabled = !state.soundEnabled;
  updateSoundButton();
  if (state.soundEnabled) {
    getAudioContext();
    playSound("toggle");
  }
}

function getAudioContext() {
  if (state.audioContext) {
    if (state.audioContext.state === "suspended") state.audioContext.resume();
    return state.audioContext;
  }

  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) return null;
  state.audioContext = new AudioContextClass();
  return state.audioContext;
}

function playSound(kind) {
  if (!state.soundEnabled) return;
  const context = getAudioContext();
  if (!context) return;

  const patterns = {
    toggle: [
      [440, 0, 0.07, "sine", 0.035],
      [660, 0.07, 0.1, "sine", 0.03],
    ],
    tap: [[520, 0, 0.06, "sine", 0.025]],
    collect: [
      [620, 0, 0.07, "triangle", 0.035],
      [820, 0.06, 0.1, "triangle", 0.03],
    ],
    reveal: [
      [392, 0, 0.09, "sine", 0.035],
      [523, 0.08, 0.11, "sine", 0.035],
      [659, 0.18, 0.14, "sine", 0.03],
    ],
    wrong: [
      [240, 0, 0.09, "square", 0.018],
      [190, 0.09, 0.13, "square", 0.014],
    ],
    success: [
      [523, 0, 0.1, "triangle", 0.035],
      [659, 0.09, 0.1, "triangle", 0.035],
      [784, 0.18, 0.16, "triangle", 0.03],
    ],
    final: [
      [523, 0, 0.14, "sine", 0.035],
      [659, 0.12, 0.14, "sine", 0.035],
      [784, 0.24, 0.14, "sine", 0.035],
      [1047, 0.38, 0.28, "sine", 0.025],
    ],
  };

  const notes = patterns[kind] || patterns.tap;
  const now = context.currentTime;
  notes.forEach(([frequency, delay, duration, wave, volume]) => {
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    const start = now + delay;
    const end = start + duration;

    oscillator.type = wave;
    oscillator.frequency.setValueAtTime(frequency, start);
    gain.gain.setValueAtTime(0.0001, start);
    gain.gain.exponentialRampToValueAtTime(volume, start + 0.015);
    gain.gain.exponentialRampToValueAtTime(0.0001, end);
    oscillator.connect(gain);
    gain.connect(context.destination);
    oscillator.start(start);
    oscillator.stop(end + 0.02);
  });
}

function launchConfetti() {
  clearConfetti();
  if (motionPreference.matches) return;

  const layer = byId("confetti-layer");
  const colors = ["#f47c6b", "#8fded5", "#dcef72", "#ffd76d", "#cdb5ed", "#f7a8bf"];
  const fragment = document.createDocumentFragment();

  for (let index = 0; index < 64; index += 1) {
    const piece = document.createElement("span");
    const size = 7 + Math.random() * 10;
    piece.className = "confetti-piece";
    piece.style.setProperty("--x", `${Math.random() * 100}%`);
    piece.style.setProperty("--size", `${size}px`);
    piece.style.setProperty("--color", colors[index % colors.length]);
    piece.style.setProperty("--delay", `${Math.random() * 1.2}s`);
    piece.style.setProperty("--duration", `${3.4 + Math.random() * 2.2}s`);
    piece.style.setProperty("--drift", `${-90 + Math.random() * 180}px`);
    piece.style.setProperty("--spin", `${360 + Math.random() * 900}deg`);
    if (index % 4 === 0) piece.style.borderRadius = "50%";
    fragment.append(piece);
  }

  layer.append(fragment);
  confettiTimer = window.setTimeout(clearConfetti, 6800);
}

function clearConfetti() {
  window.clearTimeout(confettiTimer);
  byId("confetti-layer").replaceChildren();
}

function resetGame() {
  if (state.transitioning) return;

  window.clearTimeout(sceneTimer);
  window.clearTimeout(popoverTimer);
  window.clearTimeout(collectionCompleteTimer);
  clearConfetti();

  state.giftOpened = false;
  const gift = byId("gift-button");
  gift.disabled = false;
  gift.classList.remove("is-open");
  setText("gift-hint", CONTENT.gift.tapHint);
  byId("gift-reveal").hidden = true;

  state.chosenPath = null;
  byId("path-options").classList.remove("has-choice");
  document.querySelectorAll(".path-card").forEach((card) => {
    card.disabled = false;
    card.classList.remove("is-chosen");
  });
  byId("path-reveal").hidden = true;

  buildCollection();
  resetQuiz();
  state.galleryIndex = 0;
  renderGallery();
  goToScene("start");
}

function bindEvents() {
  byId("sound-toggle").addEventListener("click", toggleSound);
  byId("start-button").addEventListener("click", () => {
    playSound("tap");
    goToScene("gift");
  });
  byId("gift-button").addEventListener("click", openGift);
  byId("gift-continue").addEventListener("click", () => {
    playSound("tap");
    goToScene("paths");
  });
  byId("path-continue").addEventListener("click", () => {
    playSound("tap");
    goToScene("collect");
  });
  byId("collect-continue").addEventListener("click", () => {
    playSound("tap");
    goToScene("quiz");
  });
  byId("quiz-continue").addEventListener("click", () => {
    playSound("tap");
    goToScene("gallery");
  });
  byId("gallery-previous").addEventListener("click", showPreviousGalleryCard);
  byId("gallery-next").addEventListener("click", showNextGalleryCard);
  byId("play-again").addEventListener("click", resetGame);

  let touchStartX = null;
  const galleryStage = byId("gallery-stage");
  galleryStage.addEventListener(
    "touchstart",
    (event) => {
      touchStartX = event.changedTouches[0].clientX;
    },
    { passive: true },
  );
  galleryStage.addEventListener(
    "touchend",
    (event) => {
      if (touchStartX === null) return;
      const distance = event.changedTouches[0].clientX - touchStartX;
      touchStartX = null;
      if (Math.abs(distance) < 48) return;
      if (distance < 0) showNextGalleryCard();
      else showPreviousGalleryCard();
    },
    { passive: true },
  );

  document.addEventListener("keydown", (event) => {
    if (state.currentScene !== "gallery") return;
    if (event.key === "ArrowRight") showNextGalleryCard();
    if (event.key === "ArrowLeft") showPreviousGalleryCard();
  });
}

function initialize() {
  setStaticContent();
  buildPathOptions();
  buildCollection();
  buildQuiz();
  buildGalleryDots();
  renderGallery();
  bindEvents();
  updateHud("start");
}

initialize();
