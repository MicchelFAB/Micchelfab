const phrases = [
  "🚀 Keep coding, keep learning, and always strive for excellence! 👨‍💻✨",
  "💡 Code is like humor. When you have to explain it, it’s bad. 😅",
  "🔧 Debugging is like being the detective in a crime movie where you are also the murderer. 🕵️‍♂️",
  "🌟 First, solve the problem. Then, write the code. 💻",
  "📚 Learning to write programs stretches your mind and helps you think better. 🧠",
  "🎯 Code never lies, comments sometimes do. 💬",
  "🚀 The only way to learn a new programming language is by writing programs in it. 💻",
  "💡 Simplicity is the soul of efficiency. 🌟",
  "🔍 Before software can be reusable, it first has to be usable. 🛠️",
  "🌐 Make it work, make it right, make it fast. 🚀"
];

function getRandomPhrase() {
  const randomIndex = Math.floor(Math.random() * phrases.length);
  return phrases[randomIndex];
}

module.exports = { getRandomPhrase };
