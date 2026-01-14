import { format } from "date-fns";
import { emojis } from "./emoji"; // .ts 확장자 생략 가능 (by tsconfig.json의 resolve.extensions 설정)

document.addEventListener("DOMContentLoaded", function () {
  const today = new Date();
  const formattedDate = format(today, "MMMM d, yyyy");
  document.getElementById("dateDisplay")!.textContent = formattedDate;

  showRandomEmoji();
});

export function showRandomEmoji() {
  const randomIndex = Math.floor(Math.random() * emojis.length);
  const selectedEmoji = emojis[randomIndex];

  document.getElementById("emojiDisplay")!.textContent = selectedEmoji.icon;
  document.getElementById("emojiName")!.textContent = selectedEmoji.name;
}
