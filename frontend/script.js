// Function to fetch tasks from the API
async function fetchTasks() {
    const response = await fetch("https://fhwqz81ged.execute-api.us-east-1.amazonaws.com/dev/get/select");
    
    const data = await response.json();

    if (response.ok) {
        displayTasks(data.body);
    } else {
        console.error('Failed to fetch tasks:', data.message);
    }
}

// Function to display tasks on the web page
function displayTasks(tasks) {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';
    
    const stringToJsonTasks = JSON.parse(tasks);
    stringToJsonTasks.forEach(task => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<div class="task-info">
                                <h3><strong>Name: </strong>${task.taskName}</h3>
                                <p><strong>Description: </strong>${task.taskDescription}</p> 
                                <p><strong>Time: </strong>${task.taskDateTime}</p>
                                </div>`;

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.classList.add('delete-btn');
            deleteButton.addEventListener('click', () => deleteTask(task.taskId));

            listItem.appendChild(deleteButton);
            taskList.appendChild(listItem);
        });
}


// Function to add a new task
async function addTask() {
    const taskName = document.getElementById('task-name').value;
    const taskDescription = document.getElementById('task-description').value;
    const taskDateTime = document.getElementById('task-date').value;

    if (!taskName || !taskDescription || !taskDateTime) {
        alert('Please fill in all fields');
        return;
    }

    const requestBodyForTask = {
        task_name: taskName,
        task_description: taskDescription,
        date_time: taskDateTime
    };

    
    const response = await fetch("https://eip2jg4vz4.execute-api.us-east-1.amazonaws.com/dev/post/select", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ body: JSON.stringify(requestBodyForTask) })
    });

    if (response.ok) {
        fetchTasks(); 
        alert("Task added successfully!");
        document.getElementById('task-name').value = '';
        document.getElementById('task-description').value = '';
        document.getElementById('task-date').value = '';
    } else {
        const data = await response.json();
        console.error('Failed to add task:', data.message);
    }
}

// Function to delete a task
async function deleteTask(taskId) {

    const dataRequestBody = {
        pathParameters: {
            taskId: taskId.toString()
        }
        
    };

    const response = await fetch("https://zmzi73fv10.execute-api.us-east-1.amazonaws.com/dev/delete/select", {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ body: JSON.stringify(dataRequestBody) })
    });

    if (response.ok) {
        fetchTasks(); 
        alert("Task deleted successufully!");
    } else {
        const data = await response.json();
        console.error('Failed to delete task:', data.message);
    }
}

// Fetch tasks when the page loads
window.addEventListener('load', fetchTasks);
