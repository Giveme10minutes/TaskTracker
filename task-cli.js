const fs = require("fs");
const path = require("path");

const filePath = path.join(process.cwd(), "tasks.json");

const argv = process.argv.slice(2);

// CLI调用
switch (argv[0]) {
  case "add":
    if (argv[1] == null) {
      process.exit(1);
    }
    addTask(argv[1]);
    break;
  default:
    console.log("exit 1");
    process.exit(1);
}

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

// 保存任务
function saveTasks(tasks) {
  try {
    const json = JSON.stringify(tasks, null, 2);
    fs.writeFileSync(filePath, json, "utf-8");
  } catch (error) {
    console.log(`保存任务失败：${error.message}`);
  }
}

function nextId(tasks) {
  if (tasks.length == 0) {
    return 1;
  }

  let maxId = 0;
  for (const task of tasks) {
    if (task.id > maxId) {
      maxId = task.id;
    }
  }
  return maxId + 1;
}

function addTask(description) {
  // 加载任务
  const tasks = loadTasks();

  // 创建对象
  const nowDate = new Date().toISOString();
  const task = {
    id: nextId(tasks),
    description: description,
    status: "todo",
    createdAt: nowDate,
    updatedAt: nowDate,
  };

  try {
    tasks.push(task);
    saveTasks(tasks);
    console.log(`Task added successfully (ID: ${task.id})`);
  } catch (error) {
    console.log(`Error happend when create task: (${error})`);
  }
}
