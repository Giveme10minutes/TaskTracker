const fs = require("fs");
const path = require("path");

const filePath = path.join(process.cwd(), "tasks.json");

const argv = process.argv.slice(2);
// console.log(`command: ${argv[0]}`);
// console.log(`argv: ${argv[1]}`);

// 加载任务
function loadTasks() {
  try {
    if (fs.existsSync(filePath)) {
      const rawText = fs.readFileSync(filePath, "utf-8");
      return JSON.parse(rawText);
    } else {
      return [];
    }
  } catch (error) {
    console.log(`加载任务时发生错误${error}`);
    return [];
  }
}

function saveTasks(tasks) {
  try {
    const json = JSON.stringify(tasks, null, 2);
    fs.writeFileSync(filePath, json, "utf-8");
  } catch (error) {
    console.log(`保存任务失败：${error.message}`);
  }
}
