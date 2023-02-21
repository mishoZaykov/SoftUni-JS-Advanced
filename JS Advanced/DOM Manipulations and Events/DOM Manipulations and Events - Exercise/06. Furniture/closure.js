function solve() {
  const [input, output] = Array.from(document.querySelectorAll('textarea'));
  const [generateBtn, buyBtn] = Array.from(document.querySelectorAll('button'));
  const tbody = document.querySelector('tbody');

  generateBtn.addEventListener('click', generate);

  function generate() {
    const data = JSON.parse(input.value);

    for (let item of data) {
      const row = createRow(item);
      tbody.appendChild(row);
    }
  }

  function createRow(item) {
    const row = document.createElement('tr');

    const c1 = document.createElement('td');
    c1.scope = 'col';
    const img = document.createElement('img');
    img.src = item.img;
    c1.appendChild(img);

    row.appendChild(c1);
    row.appendChild(createCol(item.name));
    row.appendChild(createCol(item.price));
    row.appendChild(createCol(item.decFactor));

    const c2 = document.createElement('td');
    c2.scope = 'col';
    const check = document.createElement('input');
    check.type = 'checkbox';
    c2.appendChild(check);

    row.appendChild(c2);

    return row;
  }

  function createCol(content){
    const col = document.createElement('td');
    col.scope = 'col';
    const p = document.createElement('p');
    p.textContent = content;
    col.appendChild(p);
    return col;
  }

}