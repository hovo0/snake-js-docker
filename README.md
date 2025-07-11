# 🐍 Classic Snake Game (JavaScript + Docker)

This is a simple implementation of the classic **Snake game** built using **HTML5 Canvas and JavaScript**, served using a static file server in Docker.

---

## 🚀 How to Run

Make sure you have **Docker** and **Docker Compose** installed.

### 1. Clone the Repository

```bash
git clone https://github.com/hovo0/snake-game.git
cd snake-game
```

### 2. Run with Docker Compose

```bash
docker-compose up --build
```

Then open your browser and go to:

```
http://localhost:3000
```

🎮 Play the game!

---

## 🎮 Controls

- `Arrow Up` – Move Up
- `Arrow Down` – Move Down
- `Arrow Left` – Move Left
- `Arrow Right` – Move Right

---

## 🛠 Tech Stack

- **HTML5 Canvas**
- **JavaScript**
- **CSS**
- **Docker**
- **Node.js** + [`serve`](https://www.npmjs.com/package/serve) for static file hosting

---

## 📁 Project Structure

```
snake-game/
├── docker-compose.yml       # Docker Compose configuration
├── Dockerfile               # Docker build instructions
├── public/                  # Static files
│   ├── index.html
│   ├── style.css
│   └── main.js
```

---

## 🐳 Docker Notes

This app uses the `serve` package to host static files from the `/public` directory.

The `Dockerfile` installs it globally and serves the game on **port 3000**.

---

## ✅ Features

- Snake grows when eating food 🍎
- Game ends on collision with walls or itself 💀
- Responsive canvas layout
- Easy to run via Docker

---

## 🔧 To Do / Improvements

- ✅ Speed adjustment (done via `setInterval`)
- 🟨 Add score display
- 🟨 Add restart functionality
- 🟨 Mobile support
- 🟨 Add difficulty levels

---

## 📝 License

This project is open source and free to use under the [MIT License](LICENSE).

---

## 🙌 Acknowledgments

Thanks to the classic Snake game that inspired generations of developers! 🎉
