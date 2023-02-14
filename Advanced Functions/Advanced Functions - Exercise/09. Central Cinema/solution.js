function solve() {
    let [name, hall, ticketPrice] = document.querySelectorAll('#container input');

    let onScreen = document.querySelector('#container button');
    let clear = document.querySelector('#archive button');

    let ulMoviesOnScreen = document.querySelector('#movies ul');
    let ulArchive = document.querySelector('#archive ul');

    onScreen.addEventListener('click', onClick);

    function onClick(event){
        event.preventDefault();

        if(name.value === '' || hall.value === '' || ticketPrice.value === '' || !Number(ticketPrice.value) || ticketPrice.value === '0'){
            return;
        }

        let liElement = document.createElement('li');

        let spanElement = document.createElement('span')
        spanElement.textContent = name.value;
        liElement.appendChild(spanElement);

        let strongElement = document.createElement('strong');
        strongElement.textContent = `Hall: ${hall.value}`;
        liElement.appendChild(strongElement);

        ulMoviesOnScreen.appendChild(liElement);

        let divElement = document.createElement('div');

        let strongPriceElement = document.createElement('strong');
        strongPriceElement.textContent = Number(ticketPrice.value).toFixed(2);
        divElement.appendChild(strongPriceElement);

        let inputElement = document.createElement('input');
        inputElement.placeholder ='Tickets sold';
        divElement.appendChild(inputElement);

        let archiveButton = document.createElement('button');
        archiveButton.textContent = 'Archive';
        divElement.appendChild(archiveButton);

        liElement.appendChild(divElement);

        name.value = '';
        hall.value = '';
        ticketPrice.value = '';

        archiveButton.addEventListener('click', onClick);

    function onClick(event) {
        event.preventDefault();

        if(!Number(inputElement.value) || inputElement === '0'){
            return;
        }

        let totalAmount = Number(inputElement.value) * Number(strongPriceElement.textContent); 

        let liArchiveElement = document.createElement('li');

        let spanArchiveElement = document.createElement('span');
        spanArchiveElement.textContent = event.currentTarget.parentElement.parentElement.firstChild.textContent;
        liArchiveElement.appendChild(spanArchiveElement);
        
        let strongArchiveElement = document.createElement('strong');
        strongArchiveElement.textContent = `Total amount:${totalAmount}`;
        liArchiveElement.appendChild(strongArchiveElement);

        let buttonDeleteElement = document.createElement('button');
        buttonDeleteElement.textContent = 'Delete';
        liArchiveElement.appendChild(buttonDeleteElement);

        ulArchive.appendChild(liArchiveElement);

        event.currentTarget.parentElement.parentElement.remove()

        buttonDeleteElement.addEventListener('click', e => {
            e.preventDefault();

            e.currentTarget.parentElement.remove();
        })

        clear.addEventListener('click', e =>{
            e.preventDefault();

            e.currentTarget.parentElement.remove()
        })
    }
    }

    
}