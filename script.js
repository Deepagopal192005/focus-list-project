const taskList = document.querySelector("#task-list");
const tasks = [...taskList.querySelectorAll('input[type="checkbox"]')];
const progressFill = document.querySelector("#progress-fill");
const progressBar = document.querySelector("#progress-bar");
const progressMessage = document.querySelector("#progress-message");
const progressPercent = document.querySelector("#progress-percent");
const dateElement = document.querySelector("#today-date");

function updateProgress() {
  const completed = tasks.filter((task) => task.checked).length;
  const total = tasks.length;
  const percent = Math.round((completed / total) * 100);

  tasks.forEach((input) => {
    input.closest(".task").classList.toggle("completed", input.checked);
    input.nextElementSibling.querySelector("span").textContent = input.checked ? "✓" : "+";
  });

  progressFill.style.width = `${percent}%`;
  progressBar.setAttribute("aria-valuenow", completed);
  progressMessage.textContent = `${completed} OF ${total} TASK${total === 1 ? "" : "S"} COMPLETE`;
  progressPercent.textContent = `${percent}%`;
}

tasks.forEach((task) => task.addEventListener("change", updateProgress));

const now = new Date();
dateElement.textContent = now.toLocaleDateString(undefined, {
  month: "short",
  day: "2-digit",
  year: "numeric"
}).toUpperCase();

updateProgress();
