const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

const box = 20;
const canvasSize = 400;

let snake = [{ x: 160, y: 160 }];
let direction = 'RIGHT';

let food = {
  x: Math.floor(Math.random() * (canvasSize / box)) * box,
  y: Math.floor(Math.random() * (canvasSize / box)) * box,
};

document.addEventListener('keydown', changeDirection);

function changeDirection(e) {
  const key = e.key;
  if (key === 'ArrowUp' && direction !== 'DOWN') direction = 'UP';
  else if (key === 'ArrowDown' && direction !== 'UP') direction = 'DOWN';
  else if (key === 'ArrowLeft' && direction !== 'RIGHT') direction = 'LEFT';
  else if (key === 'ArrowRight' && direction !== 'LEFT') direction = 'RIGHT';
}

function draw() {
  ctx.clearRect(0, 0, canvasSize, canvasSize);

  // Draw food
  ctx.fillStyle = 'red';
  ctx.fillRect(food.x, food.y, box, box);

  // Draw snake
  for (let i = 0; i < snake.length; i++) {
    ctx.fillStyle = i === 0 ? 'lime' : 'green';
    ctx.fillRect(snake[i].x, snake[i].y, box, box);
  }

  let head = { ...snake[0] };

  if (direction === 'UP') head.y -= box;
  if (direction === 'DOWN') head.y += box;
  if (direction === 'LEFT') head.x -= box;
  if (direction === 'RIGHT') head.x += box;

  // Game over: wall hit
  if (head.x < 0 || head.x >= canvasSize || head.y < 0 || head.y >= canvasSize) {
    clearInterval(game);
    alert('Game Over!');
    return;
  }

  // Game over: self hit
  for (let part of snake) {
    if (head.x === part.x && head.y === part.y) {
      clearInterval(game);
      alert('Game Over!');
      return;
    }
  }

  snake.unshift(head);

  if (head.x === food.x && head.y === food.y) {
    food = {
      x: Math.floor(Math.random() * (canvasSize / box)) * box,
      y: Math.floor(Math.random() * (canvasSize / box)) * box,
    };
  } else {
    snake.pop();
  }
}

const game = setInterval(draw, 200);
