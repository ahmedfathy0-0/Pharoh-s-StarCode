const planetData = [
  {
    id: 1,
    text: "Mercury",
    para: "Mercury—the smallest planet in our solar system and closest to the Sun—is only slightly larger than Earth's Moon. Mercury is the fastest planet, zipping around the Sun every 88 Earth days.",
    lengthOfYear: "88 Earth days",
    distanceFromSun: "0.39 AU",
    numberOfMoon: "0",
    RelationshipToEarth:
      "Mercury has no moons and lacks the geological activity seen on Earth, making its surface appear ancient.",
    videoUrl: "https://www.youtube.com/embed/0KBjnNuhRHs?si=q80GlJTg2HRrCg6A", // Replace with actual video URL
    mcqs: [
      {
        question: "What is Mercury known for?",
        options: [
          "Being the largest planet",
          "Being the closest planet to the Sun",
          "Having many moons",
          "None of the above",
        ],
        correctAnswer: "Being the closest planet to the Sun",
      },
      {
        question: "How long does it take Mercury to orbit the Sun?",
        options: [
          "88 Earth days",
          "365 Earth days",
          "225 Earth days",
          "687 Earth days",
        ],
        correctAnswer: "88 Earth days",
      },
    ],
  },
  {
    id: 2,
    text: "Venus",
    para: "Venus spins slowly in the opposite direction of most planets, resulting in the Sun rising in the west. Its thick atmosphere creates a runaway greenhouse effect, making it the hottest planet in our solar system, with surface temperatures hot enough to melt lead.",
    lengthOfYear: "225 Earth days",
    distanceFromSun: "0.72 AU",
    numberOfMoon: "0",
    RelationshipToEarth:
      "Venus is Earth’s 'sister planet' because they are similar in size. However, Venus has no moons and a very thick atmosphere that makes it extremely hot.",
    videoUrl: "https://www.youtube.com/embed/z8HB8jlWai8?si=HYJR_UKLrLU_n_12", // Replace with actual video URL
    mcqs: [
      {
        question: "What is Venus known for?",
        options: [
          "Being the hottest planet",
          "Having rings",
          "Being the smallest planet",
          "None of the above",
        ],
        correctAnswer: "Being the hottest planet",
      },
      {
        question: "How long does it take Venus to orbit the Sun?",
        options: [
          "225 Earth days",
          "365 Earth days",
          "687 Earth days",
          "88 Earth days",
        ],
        correctAnswer: "225 Earth days",
      },
    ],
  },
  {
    id: 3,
    text: "Earth",
    para: "Earth—our vibrant home planet—is the only place we know of that supports life. It's unique in the solar system for having liquid water on its surface, enabling a rich variety of ecosystems.",
    lengthOfYear:
      "365.25 Earth days , allowing for the beautiful cycle of seasons.",
    distanceFromSun: "1.00 AU",
    numberOfMoon: "1",
    videoUrl: "https://www.youtube.com/embed/8DQeFmWUyd8?si=ZvbjW7IgiM5-iysA", // Replace with actual video URL
    mcqs: [
      {
        question: "What makes Earth unique?",
        options: [
          "It has no moons",
          "It's the only planet known to support life",
          "It has the most moons",
          "It's the largest planet",
        ],
        correctAnswer: "It's the only planet known to support life",
      },
      {
        question: "What is Earth's atmosphere primarily composed of?",
        options: ["Carbon Dioxide", "Nitrogen", "Oxygen", "Hydrogen"],
        correctAnswer: "Nitrogen",
      },
    ],
  },
  {
    id: 4,
    text: "Mars",
    para: "Mars, known as the 'Red Planet,' is famous for its reddish appearance due to iron oxide (rust) on its surface. It's home to the tallest volcano and the deepest, longest canyon in the solar system.",
    lengthOfYear: "687 Earth days",
    distanceFromSun: "1.52 AU",
    numberOfMoon: "2",
    RelationshipToEarth:
      "Mars has similar day lengths to Earth but is colder and less hospitable. It shows signs of ancient water, making it a key target for future exploration.",
    videoUrl: "https://www.youtube.com/embed/dAZKu_ojb14?si=kBFHBToIBTmP8mML", // Replace with actual video URL
    mcqs: [
      {
        question: "How many moons does Mars have?",
        options: ["1", "2", "3", "0"],
        correctAnswer: "2",
      },
      {
        question: "What is Mars often called?",
        options: [
          "The Red Planet",
          "The Blue Planet",
          "The Green Planet",
          "The Yellow Planet",
        ],
        correctAnswer: "The Red Planet",
      },
    ],
  },
  {
    id: 5,
    text: "Jupiter",
    para: "Jupiter is the largest planet in our solar system, known for its Great Red Spot—a massive storm bigger than Earth. Its thick atmosphere and strong magnetic field create stunning auroras.",
    lengthOfYear: "12 Earth years",
    distanceFromSun: "5.20 AU",
    numberOfMoon: "79",
    RelationshipToEarth:
      "Jupiter's Great Red Spot is a permanent storm, unlike Earth's ever-changing weather. This centuries-old storm highlights the fascinating differences in their atmospheres.",
    videoUrl: "https://www.youtube.com/embed/JDi4IdtvDVE?si=mF-17q7qU5SNeYKz",
    mcqs: [
      {
        question: "What is the largest planet in our solar system?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        correctAnswer: "Jupiter",
      },
      {
        question: "What is the Great Red Spot?",
        options: ["A mountain", "A storm", "A moon", "A ring"],
        correctAnswer: "A storm",
      },
    ],
  },
  {
    id: 6,
    text: "Saturn",
    para: "Adorned with a dazzling, complex system of icy rings, Saturn is unique in our solar system. The other giant planets have rings, but none are as spectacular as Saturn's.",
    lengthOfYear: "29.5 Earth years",
    distanceFromSun: "9.58 AU",
    numberOfMoon: "83",
    RelationshipToEarth:
      "Unlike Earth, a rocky planet, Saturn is a gas giant with no solid surface.",
    videoUrl: "https://www.youtube.com/embed/_et1sMxVrpY?si=cSe36SU9ftQvhup0", // Replace with actual video URL
    mcqs: [
      {
        question: "What is Saturn famous for?",
        options: ["Its size", "Its moons", "Its rings", "None of the above"],
        correctAnswer: "Its rings",
      },
      {
        question: "How does Saturn differ from Earth in terms of composition?",
        options: [
          " Saturn is a rocky planet",
          "Saturn is a gas giant with no solid surface",
          "Saturn has liquid water on its surface",
          "With Great Red Spot ",
        ],
        correctAnswer: "Saturn is a gas giant with no solid surface",
      },
    ],
  },
  {
    id: 7,
    text: "Uranus",
    para: " the seventh planet from the Sun, is an ice giant with a striking blue hue from methane. Its unique tilt, nearly 90 degrees, makes it appear to spin on its side, resulting in unusual seasonal changes.",
    lengthOfYear: "84 Earth years",
    distanceFromSun: "19.22 AU",
    numberOfMoon: "27",
    RelationshipToEarth:
      "Uranus is an ice giant with no solid surface and a frigid atmosphere, making it uninhabitable. Unlike Earth,it remains largely unexplored.",
    videoUrl: "https://www.youtube.com/embed/6dcfxVydbQY?si=VOXiTmuReJSZgW-r", // Replace with actual video URL
    mcqs: [
      {
        question: "How does Uranus rotate?",
        options: [
          "On its side",
          "Normally",
          "Upside down",
          "It doesn't rotate",
        ],
        correctAnswer: "On its side",
      },
      {
        question: "What is Uranus's main atmosphere component?",
        options: ["Helium", "Hydrogen", "Oxygen", "Methane"],
        correctAnswer: "Hydrogen",
      },
    ],
  },
  {
    id: 8,
    text: "Neptune",
    para: "Neptune—the eighth and most distant major planet orbiting our Sun—is dark, cold and whipped by supersonic winds. It was the first planet located through mathematical calculations, rather than by telescope.",
    lengthOfYear: "165 Earth years",
    distanceFromSun: "30.05 AU",
    numberOfMoon: "14",
    RelationshipToEarth:
      "Neptune stands in stark contrast to Earth, with its frigid temperatures and lack of a solid surface, rendering it uninhabitable. ",
    videoUrl: "https://www.youtube.com/embed/NStn7zZKXfE?si=1rFmlmM4xNlc6SmG", // Replace with actual video URL
    mcqs: [
      {
        question: "What is Neptune known for?",
        options: [
          "Being the coldest planet",
          "Having a great storm",
          "Being the largest planet",
          "None of the above",
        ],
        correctAnswer: "Being the coldest planet",
      },
      {
        question: "What is Neptune's main atmosphere component?",
        options: ["Helium", "Hydrogen", "Oxygen", "Methane"],
        correctAnswer: "Methane",
      },
    ],
  },
];

export default planetData;
