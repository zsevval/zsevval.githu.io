const fruits = ['apple', 'banana', 'cherry', 'avacado'];

const container = document.querySelector('.fruits');
const score = document.getElementById('score');

let count = 0;

function getRandomFruit() {
  return fruits[Math.floor(Math.random() * fruits.length)];
}

function createFruit() {
  const fruit = document.createElement('div');
  fruit.classList.add('fruit');
  fruit.setAttribute('data-fruit', getRandomFruit());

  const img = document.createElement('img');
  img.src = `img/${fruit.getAttribute('data-fruit')}.png`;
  img.alt = fruit.getAttribute('data-fruit');

  fruit.appendChild(img);
  container.appendChild(fruit);

  fruit.addEventListener('click', () => {
    fruit.remove();
    count++;
    score.textContent = count;
    if (count == 20) {
      alert('Congratulations! You Won the Game!');
      count = 0;
    }
  });
}

setInterval(() => {
  if (count <= 20) {
    createFruit();
  }
}, 1000);
