# 🎬 AI Text-to-Video Generator

An elegant, fast, and responsive web application that converts textual descriptions into high-quality cinematic videos. Inspired by advanced tools like OpenAI Sora and Runway, this project leverages cutting-edge open-source AI video models via API integration.

## 🚀 Features

- **Text-to-Video Generation:** Transform any imaginative prompt into a realistic or stylized video.
- **Cinematic Output:** Utilizes state-of-the-art models (like Hunyuan Video / Luma AI).
- **Responsive Design:** Dark-themed, modern UI optimized for both desktop and mobile screens.
- **Instant Deployment:** Ready to be hosted on Vercel or Netlify with zero configuration.

## 🛠️ Tech Stack

- **Frontend:** HTML5, CSS3 (Modern Dark Theme), JavaScript (ES6+)
- **AI Core Engine:** Fal.ai / Replicate API Gateway
- **Hosting & Deployment:** GitHub & Vercel

## 📦 Project Structure

```text
├── index.html          # Main user interface
├── app.js              # API integration and logic handler
└── README.md           # Project documentation
```

## ⚙️ Setup & Installation

Follow these simple steps to get the project running locally on your computer:

### 1. Clone the Repository
```bash
git clone https://github.com
cd YOUR_REPO_NAME
```

### 2. Get Your AI API Key
1. Go to [Fal.ai](https://fal.ai) or [Replicate.com](https://replicate.com) and create a free account.
2. Navigate to your dashboard and copy your unique **API Key**.

### 3. Configure the Code
Open `app.js` and replace the placeholder text with your actual API key:
```javascript
"Authorization": "Key YOUR_FAL_AI_API_KEY" // Paste your key here
```

### 4. Run Locally
Simply open the `index.html` file in any modern web browser, or use a local development server like **Live Server** in VS Code.

## 🌐 Deployment (Live on Internet)

To make this website public so anyone can use it:
1. Push your updated code back to your GitHub repository.
2. Go to [Vercel](https://vercel.com) and log in using your GitHub account.
3. Click **Add New** -> **Project**, then import this repository.
4. Click **Deploy**. Vercel will generate a live URL for your app instantly!

## ⚠️ Security Note
*For production-level builds, it is highly recommended to move the API key to a server-side environment (like a Node.js/Next.js backend) to protect it from being exposed in the user's browser tools.*

---
Made with ❤️ by [umesh babu](https://github.com)
