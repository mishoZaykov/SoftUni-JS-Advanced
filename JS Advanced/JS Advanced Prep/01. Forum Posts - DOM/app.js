window.addEventListener("load", solve);

function solve() {
  const title = document.getElementById('post-title');
  const category = document.getElementById('post-category');
  const content = document.getElementById('post-content');
  const publishButton = document.getElementById('publish-btn');
  const reviewList = document.getElementById('review-list');
  const publishList = document.getElementById('published-list');
  const clearButton = document.getElementById('clear-btn');

  const reviewPost = document.createElement('li');
  reviewPost.setAttribute('class', 'rpost');
  const editButton = document.createElement('button');
  editButton.classList.add('action-btn');
  editButton.classList.add('edit');
  editButton.textContent = 'Edit';
  const approveButton = document.createElement('button');
  approveButton.classList.add('action-btn');
  approveButton.classList.add('approve');
  approveButton.textContent = 'Approve';

  publishButton.addEventListener('click', (e)=>{
    
    if(
      title.value == '' ||
      category.value == '' ||
      content.value == '' 
    ){
      return;
    }

    const article = document.createElement('article');
    const h4 = document.createElement('h4');
    h4.textContent = title.value;

    const categoryP = document.createElement('p');
    categoryP.textContent = `Category: ${category.value}`;

    const contentP = document.createElement('p');
    contentP.textContent = `Content: ${content.value}`;

    article.appendChild(h4);
    article.appendChild(categoryP);
    article.appendChild(contentP);

    reviewPost.appendChild(article);
    reviewPost.appendChild(editButton);
    reviewPost.appendChild(approveButton);

    reviewList.appendChild(reviewPost);

    let editTitle = title.value;
    let editCategory = category.value;
    let editContent = content.value;

    title.value = '';
    category.value = '';
    content.value = '';

    editButton.addEventListener('click', (e)=>{
      title.value = editTitle;
      category.value = editCategory;
      content.value = editContent;

      reviewPost.remove();
      article.remove();
    });

    approveButton.addEventListener('click', (e)=>{
      publishList.appendChild(reviewPost);

      reviewList.innerHTML ='';
      editButton.remove();
      approveButton.remove();
    });

    clearButton.addEventListener('click', (e)=>{
      publishList.innerHTML = ''
    });
  });
}
