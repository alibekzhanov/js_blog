// Элементы DOM
const authContainer = document.getElementById('auth-container');
const blogContainer = document.getElementById('blog-container');
const loginBtn = document.getElementById('login-btn');
const usernameInput = document.getElementById('username');
const welcomeMessage = document.getElementById('welcome-message');
const postContent = document.getElementById('post-content');
const postBtn = document.getElementById('post-btn');
const postsContainer = document.getElementById('posts');

let username = '';
let posts = [];

// Авторизация пользователя
loginBtn.addEventListener('click', () => {
  const inputName = usernameInput.value.trim();
  if (inputName) {
    username = inputName;
    authContainer.classList.add('hidden');
    blogContainer.classList.remove('hidden');
    welcomeMessage.textContent = `Welcome, ${username}!`;
  } else {
    alert('Please write down your Name');
  }
});

// Создание нового поста
postBtn.addEventListener('click', () => {
  const content = postContent.value.trim();

  if (content) {
    const newPost = {
      author: username,
      content: content,
      timestamp: new Date().toLocaleString()
    };

    posts.unshift(newPost); // Добавляем в начало массива
    postContent.value = ''; // Очищаем поле ввода
    renderPosts();
  } else {
    alert('Please, write something');
  }
});

// Рендеринг постов
function renderPosts() {
  postsContainer.innerHTML = '';

  posts.forEach((post) => {
    const postElement = document.createElement('div');
    postElement.classList.add('post');
    postElement.innerHTML = `
      <div class="post-author">👤 ${post.author} • ${post.timestamp}</div>
      <div class="post-content">${post.content}</div>
    `;
    postsContainer.appendChild(postElement);
  });
}
