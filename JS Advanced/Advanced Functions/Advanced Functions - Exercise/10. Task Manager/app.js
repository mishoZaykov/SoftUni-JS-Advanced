function solve() {
    const task = document.getElementById('task');
    const description = document.getElementById('description');
    const dueDate = document.getElementById('date');
    
    const[addTaskSection, openSection, progressSection, finishedSection] = Array.from(document.querySelectorAll('section')).map((e) => e.children[1]);
    

    document.getElementById('add').addEventListener('click', addTask);

    function addTask(event) {
        event.preventDefault();
        const article = createElement('article');
        article.appendChild(createElement('h3', task.value));
        article.appendChild(createElement('p', `Description: ${description.value}`));
        article.appendChild(createElement('p', `Due Date: ${dueDate.value}`));

        const div = createElement('div', '', 'flex');
        
        const startButton = createElement('button', 'Start', 'green');
        div.appendChild(startButton);

        const deleteButton = createElement('button', 'Delete', 'red');
        div.appendChild(deleteButton);

        const finishButton = createElement('button', 'Finish', 'orange');

        article.appendChild(div);
        openSection.appendChild(article);

        task.value = '';
        description.value = '';
        dueDate.value = '';

        startButton.addEventListener('click', onStart);
        deleteButton.addEventListener('click', onDelete);
        finishButton.addEventListener('click', onFinish);

        function onDelete() {
            article.remove();
        }

        function onStart() {
            startButton.remove();
            div.appendChild(finishButton);
            progressSection.appendChild(article);
        }

        function onFinish() {
            div.remove();
            finishedSection.appendChild(article);
        }
    }

    function createElement(type, content, className) {
        const element = document.createElement(type);
        element.textContent = content;
        if(className){
            element.className = className;
        }
        return element;
    }
    
}