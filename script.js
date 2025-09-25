const circle = document.getElementById("circle");
const colorPairs = [
  ["#3ABEFF", "#121212"], // Electric Blue + Dark Background
  ["#FADADD", "#8E44AD"], // Pastel Pink + Elegant Purple
  ["#2EE59D", "#1F1F1F"], // Mint Green + Deep Gray
  ["#FF6A6A", "#FFF5B7"], // Sunset Orange + Pastel Yellow
  ["#B69FFF", "#374151"], // Lavender + Charcoal Gray
  ["#00BFA6", "#F9FAFB"], // Teal Accent + Cool White
  ["#D6C8FF", "#111827"], // Pastel Purple + Jet Black
  ["#E67E22", "#E5E7EB"], // Warm Orange + Light Gray
  ["#A3D5FF", "#9CA3AF"], // Pastel Blue + Cool Gray
  ["#A259FF", "#C8FACC"], // Neon Purple + Pastel Green
];

function changeColor() {
  const [color1, color2] =
    colorPairs[Math.floor(Math.random() * colorPairs.length)];
  circle.style.background = `linear-gradient(45deg,${color1}, ${color2})`;
  circle.style.boxShadow = `0 0 60px ${color1}`;
}

circle.addEventListener("click ", changeColor);
changeColor();
