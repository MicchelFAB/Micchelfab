const fs = require('fs');

// Array of inspirational phrases
const phrases = [
	"💡 Simplicity is the soul of efficiency. 🌟",
	"🎯 Code never lies, comments sometimes do. 💬",
	"🌐 Dream big, start small, and keep shipping. 🚢",
	"🌐 Make it work, make it right, make it fast. 🚀",
	"💡 Master the basics, and the rest will follow. 🛤️",
	"🌟 First, solve the problem. Then, write the code. 💻",
	"📚 If you control your code, you control your destiny. ✨",
	"🎯 Every big project starts with a single line of code. 📝",
	"💡 A great developer never stops learning and improving. 🌱",
	"🌟 Don't fear failure. Every bug is a lesson in disguise. 🐞",
	"💡 The best error message is the one that never shows up. 🔧",
	"📚 Good code is its own documentation. Write with clarity. 📝",
	"💡 Stay curious, keep exploring, and don’t stop debugging! 🛠️",
	"📚 Read the manual, but write the story. Your code matters. 📖",
	"🎯 The most rewarding bugs are the ones you fix on your own. 🐛",
	"🔧 Write code that you’ll be proud to read six months later. 🕒",
	"💡 Code is like humor. When you have to explain it, it’s bad. 😅",
	"🔧 Make your code readable; future you will thank you for it. 🙏",
	"🎯 The most reliable way to predict the future is to build it. 💻",
	"🔍 Before software can be reusable, it first has to be usable. 🛠️",
	"🔍 Every ‘undefined behavior’ is a puzzle waiting to be solved. 🧩",
	"✨ Complexity is easy; simplicity is hard. Strive for simplicity. 💡",
	"🌟 You don’t have to know everything; just know where to find it. 🔗",
	"💡 The best tools a programmer has are patience and perseverance. ⏳",
	"✨ Every line of code you write is a step closer to creating magic. 🪄",
	"🎯 Every “Hello, World!” is a beginning of something extraordinary. 🌎",
	"🚀 Keep coding, keep learning, and always strive for excellence! 👨‍💻✨",
	"🌐 Your first draft won’t be perfect. Code is meant to be rewritten. 🔄",
	"🎯 Challenges are the programmer’s playground. Dive in and have fun! 🛝",
	"📚 There’s no such thing as a bug-free program—just creative features. 😜",
	"🌐 The best way to improve is to challenge yourself with real problems. 💪",
	"🔍 A good programmer looks both ways before crossing a one-way street. 🛤️",
	"💡 Code is poetry, and every developer is a poet in their unique style. ✍️",
	"🔧 Code without purpose is like a ship without a sail. Focus on the goal. 🎯",
	"✨ Programming isn't about what you know; it's about what you can figure out. 🧩",
	"📚 Learning to write programs stretches your mind and helps you think better. 🧠",
	"🚀 The best way to predict the future of technology is to build it yourself. 🛠️",
	"📚 Sometimes, the best solution is to start fresh. Don’t be afraid to refactor. 🔄",
	"📚 Debugging is twice as hard as writing the code, so write your code carefully. 🤔",
	"🚀 Coding is not a sprint; it’s a marathon of creativity and problem-solving. 🏃‍♂️",
	"🚀 Great coders are not born; they are made by failing, learning, and improving. 🔄",
	"🚀 The only way to learn a new programming language is by writing programs in it. 💻",
	"🌟 Progress is impossible without change, and coding is all about creating change. 💻",
	"💡 A programmer's job is to think about the unthinkable and prepare for the impossible. 🤯",
	"🚀 Efficiency is not just about speed; it’s about doing the right thing at the right time. ⏱️",
	"🔧 Debugging is like being the detective in a crime movie where you are also the murderer. 🕵️‍♂️",
	"🚀 Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live. 😅",
  ];
  

// Function to get a random phrase
function getRandomPhrase() {
  return phrases[Math.floor(Math.random() * phrases.length)];
}

// Read the README file
const readmePath = 'README.md';
let readmeContent = fs.readFileSync(readmePath, 'utf8');

// Replace the placeholder with a new phrase
const newPhrase = getRandomPhrase();
const updatedContent = readmeContent.replace(/<p id="inspirational-phrase">.*<\/p>/, `<p id="inspirational-phrase">${newPhrase}</p>`);

// Write the updated content back to the README file
fs.writeFileSync(readmePath, updatedContent);