function create(words) {
   const content = document.getElementById('content');

   for (const word of words) {
      const div = document.createElement('div');
      const p = document.createElement('p');
      p.textContent = word;
      p.style.display = 'none';
      div.appendChild(p);
      content.appendChild(div);
      div.addEventListener('click', onClick);
   }

   function onClick(event){
      event.currentTarget.children[0].style.display = '';
   }
}
