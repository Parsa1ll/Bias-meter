# Bias Labs – Analytics Dashboard

Bias Labs is an AI-powered media analysis platform that provides deep insights into bias patterns, sentiment, and trends across news and articles. This repository contains the Analytics page, a rich and interactive dashboard built with modern web technologies to visualize bias metrics over time.

This project was built collaboratively by me and v0.

---

## 🚀 Features

### 📊 Bias Analytics Dashboard
- Interactive analytics page for understanding media bias
- Six core bias indicators analyzed per article:
  - Political Bias
  - Emotional Tone
  - Factual Accuracy
  - Sensationalism
  - Source Quality
  - Context Balance

### 📈 Bias Evolution Chart
- Multi-line time series chart showing how bias metrics evolve over time
- Hover interactions with reference lines and detailed tooltips
- Fully responsive and animated data visualization

### 🔥 Trending Narratives
- Highlights top trending media narratives
- Displays article counts and trend strength
- Visually distinct gradient cards for each narrative

### 🎨 Modern UI / UX
- Glassmorphism design with animated gradients
- Smooth hover, transition, and entrance animations
- Responsive layout across devices
- Clean, component-based architecture

---

## 🛠 Tech Stack

- Framework: Next.js (App Router, Client Components)
- Language: TypeScript
- UI Components: shadcn/ui
- Icons: lucide-react
- Charts: recharts
- Styling: Tailwind CSS
- State Management: React Hooks

---

## 📁 Project Structure

```
app/
└── analytics/
└── page.tsx # Analytics dashboard page
components/
├── ui/ # Shared UI components
└── footer.tsx
```

---

## 📊 Data

The analytics dashboard currently uses mocked data for:
- Bias evolution over time
- Bias aspect indicators
- Trending narratives

This enables rapid UI development and can be easily replaced with real AI-powered analysis data.

---

## ▶️ Running the Project

```bash
npm install
npm run dev
```

Built by me and v0.
