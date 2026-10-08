任务跟踪器是一个用于跟踪和管理您的任务的项目。在这项任务中，您将构建一个简单的命令行界面（CLI）来跟踪您需要做什么、您已经做了什么以及您目前正在做的事情。这个项目将帮助您练习编程技能，包括使用文件系统、处理用户输入和构建一个简单的CLI应用程序。

# 要求

应用程序应从命令行运行，接受用户操作和输入作为参数，并将任务存储在JSON文件中。用户应该能够：

1. 添加、更新和删除任务
2. 将任务标记为进行中或已完成
3. 列出所有任务
4. 列出所有已完成的任务
5. 列出所有未完成的任务
6. 列出所有正在进行的任务
7. 以下是指导实施的一些限制：
8. 您可以使用任何编程语言来构建这个项目。
9. 在命令行中使用位置参数来接受用户输入。
10. 使用JSON文件将任务存储在当前目录中。
11. 如果JSON文件不存在，则应创建该文件。
12. 使用编程语言的原生文件系统模块与JSON文件进行交互。
13. 不要使用任何外部库或框架来构建这个项目。
14. 确保优雅地处理错误和边缘案例。
    例子
    命令列表及其用法如下：
    抨击

```JavaScript
# Adding a new task
task-cli add "Buy groceries"
# Output: Task added successfully (ID: 1)
# Updating and deleting tasks
task-cli update 1 "Buy groceries and cook dinner"
task-cli delete 1
# Marking a task as in progress or done
task-cli mark-in-progress 1
task-cli mark-done 1
# Listing all tasks
task-cli list
# Listing tasks by status
task-cli list done
task-cli list todo
task-cli list in-progress
```

任务属性
每个任务都应具有以下属性：
id：任务的唯一标识符

description：任务的简短描述
status：任务状态（todo、in-progress、done）

createdAt：创建任务的日期和时间

updatedAt：任务上次更新的日期和时间

在添加新任务时，确保将这些属性添加到JSON文件中，并在更新任务时更新它们。

# 入门指南

以下是帮助您开始使用任务跟踪器CLI项目的几个步骤：

设置您的开发环境
选择您熟悉的编程语言（例如Python、JavaScript等）。
确保您安装了代码编辑器或IDE（例如，VSCode、PyCharm）。
项目初始化
为您的任务跟踪器CLI创建一个新的项目目录。
初始化版本控制系统（例如，Git）来管理您的项目。
实现功能
首先创建一个基本的CLI结构来处理用户输入。
逐一实施每个功能，确保在进入下一个功能之前进行彻底测试，例如，首先实现添加任务功能，然后列出下一个，然后更新，标记为进行中，等等。
测试和调试
单独测试每个功能，以确保它们按预期工作。查看JSON文件，以验证任务是否存储正确。
调试开发过程中出现的任何问题。
完成项目
确保所有功能都已实施和测试。
清理您的代码，并在必要时添加注释。
编写一个关于如何使用任务跟踪器CLI的良好自述文件。
在这个项目结束时，您将开发出一个实用的工具，可以帮助您或其他人高效地管理任务。该项目为更先进的编程项目和现实世界应用奠定了坚实的基础。
编码愉快！
