const fs = require("fs");
const path = require("path");

const filePath = path.join(process.cwd(), "task.json");

const argv = process.argv.slice(2);
console.log(`command: ${argv[0]}`);
console.log(`argv: ${argv[1]}`);

// 加载任务
function loadTasks() {
  try {
    if (fs.existsSync(filePath)) {
      taskFile = fs.readFileSync(path, "utf-8");
      return JSON.parse(taskFile);
    } else {
      return [];
    }
  } catch (error) {
    console.log(`加载任务时发生错误${error}`);
  }
}

function saveTasks(tasks) {
  try {
    taskFile = JSON.stringify(tasks, null, 2);
    fs.writeFileSync(path, taskFile);
  } catch (error) {}
}

const task = loadTasks();
console.log("读取Tasks中", loadTasks);
console.log("保存Task中", saveTasks);
