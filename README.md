# 💘 Valentine Web App

A playful, mobile-first Valentine's Day web app built with React + Vite.

## 📁 File Structure

After downloading all files, organize them like this:

```
valentine-app/
├── public/
│   └── heart.svg                      # The heart.svg file
├── src/
│   ├── components/
│   │   ├── QuestionPage.jsx           # src-components-QuestionPage.jsx
│   │   ├── QuestionPage.css           # src-components-QuestionPage.css
│   │   ├── CelebrationPage.jsx        # src-components-CelebrationPage.jsx
│   │   └── CelebrationPage.css        # src-components-CelebrationPage.css
│   ├── App.jsx                        # src-App.jsx
│   ├── App.css                        # src-App.css
│   ├── main.jsx                       # src-main.jsx
│   └── index.css                      # src-index.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

**IMPORTANT:** Rename the downloaded files:
- `src-main.jsx` → put in `src/main.jsx`
- `src-index.css` → put in `src/index.css`
- `src-App.jsx` → put in `src/App.jsx`
- `src-App.css` → put in `src/App.css`
- `src-components-QuestionPage.jsx` → put in `src/components/QuestionPage.jsx`
- `src-components-QuestionPage.css` → put in `src/components/QuestionPage.css`
- `src-components-CelebrationPage.jsx` → put in `src/components/CelebrationPage.jsx`
- `src-components-CelebrationPage.css` → put in `src/components/CelebrationPage.css`
- `heart.svg` → put in `public/heart.svg`

## ✨ Features

- 🎀 Beautiful pink-themed UI with gradient backgrounds
- 💕 Floating hearts animation
- 📱 Mobile-first responsive design
- 😈 Playful "No" button that moves away when approached
- 🎉 Celebration page with confetti effect
- ⚡ Fast and lightweight

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Create the folder structure as shown above

2. Install dependencies:
```bash
npm install
```

3. Run development server:
```bash
npm run dev
```

4. Open your browser to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` folder, ready for deployment.

## 🎯 How It Works

### The Question Page
- Displays "Would you be my Valentine?" with two buttons
- **Yes Button**: Takes you to the celebration page
- **No Button**: Moves away when you try to click/tap it!

### The Evasive "No" Button
The "No" button uses clever JavaScript to avoid being clicked:

**On Desktop:**
- Uses `onMouseEnter` to detect hover
- Instantly moves to a random position

**On Mobile:**
- Uses `onPointerEnter` and `onTouchStart` to detect finger proximity
- Repositions before the tap completes
- `touch-action: none` prevents accidental scrolling

**Technical Implementation:**
- Calculates viewport bounds to keep button visible
- Uses `position: fixed` with dynamic `left` and `top` values
- Smooth `transition: all 0.3s ease-out` for playful movement
- Prevents overflow outside viewport

### The Celebration Page
- Animated confetti (heart emojis falling)
- Bouncing hearts animation
- Sweet success message

## 🎨 Design Highlights

- **Pink gradient background**: `#ffc3d5` → `#ffb3c6` → `#ffa3b8`
- **Frosted glass cards**: `backdrop-filter: blur(10px)`
- **Smooth animations**: CSS transitions and keyframes
- **Mobile-optimized**: Touch events, responsive breakpoints
- **Accessible**: Large tap targets, readable fonts

## 🌐 Deployment

### GitHub Pages
1. Update `vite.config.js` base path to your repo name
2. Build: `npm run build`
3. Deploy `dist` folder to `gh-pages` branch

### Vercel
1. Connect your GitHub repo
2. Vercel auto-detects Vite
3. Deploy with one click

### Netlify
1. Drag and drop the `dist` folder
2. Or connect via Git for continuous deployment

## 🛠️ Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **CSS3** - Animations and styling
- **JavaScript** - Interactive logic

## 💡 Tips

- The app works entirely client-side (no backend needed)
- All animations are CSS-based for smooth performance
- Hearts use emoji for zero image dependencies
- Works great on iPhone, Android, desktop browsers

---

Made with 💕 for Valentine's Day
