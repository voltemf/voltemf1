# 🎨 Modern Portfolio Website

A responsive, interactive portfolio website featuring a 3D engine model background, smooth animations, and modern design elements.

## ✨ Features

- **🎯 Modern Design**: Clean, professional layout with the elegant Kepler font
- **🌟 3D Background**: Interactive Sketchfab 3D engine exploded view model
- **📱 Responsive**: Optimized for desktop and mobile devices
- **🎬 Cinematic Loading**: 7-second loading screen with bear mascot animation
- **🐻 Interactive Bear**: Clickable mascot with contact modal
- **💎 Glass-morphism**: Beautiful translucent project cards
- **⚡ Smooth Animations**: Motion/React powered transitions
- **📄 Multi-section**: About, Experience, Portfolio, and Projects sections

## 🛠️ Tech Stack

- **React** - Frontend framework
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Modern utility-first styling
- **Motion/React** - Smooth animations and transitions
- **Sketchfab** - 3D model integration
- **Figma Make** - Built with Figma's web app builder

## 🎨 Design System

- **Primary Colors**: Midnight blue (#191970) with transparent overlays
- **Typography**: Kepler Std serif font family
- **Layout**: Two-column responsive grid
- **Effects**: Glass-morphism, subtle shadows, smooth hover states

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/portfolio-website.git
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 📁 Project Structure

```
├── App.tsx                 # Main application component
├── components/             # Reusable React components
│   ├── sections/          # Page sections (About, Experience, etc.)
│   ├── BearModal.tsx      # Interactive bear modal
│   ├── LoadingScreen.tsx  # Cinematic loading animation
│   └── ui/                # shadcn/ui components
├── config/
│   └── content.ts         # Centralized content management
└── styles/
    └── globals.css        # Tailwind v4 global styles
```

## 🎯 Key Components

### Loading Screen
- 7-second cinematic loading experience
- Bear mascot with subtle animations
- Smooth fade transition to main content

### 3D Background System
- **Layer 1**: Midnight blue base background
- **Layer 2**: Sketchfab 3D engine model (with fade-in animation)
- **Layer 3**: Dark blue atmospheric overlay
- **Layer 4**: Text content and UI elements
- **Layer 5**: Interactive bear mascot

### Content Sections
- **About**: Personal introduction and overview
- **Experience**: Professional background and roles
- **Portfolio**: Featured projects with glass-morphism cards
- **Projects**: Additional work and contributions

## 🎨 Customization

All content is managed through `/config/content.ts` for easy customization without touching component code:

- Personal information and bio
- Project details and descriptions
- Social media links
- 3D background model settings

## 📧 Contact

**Voltairenoel Encarnacion**  
Email: voltemf@gmail.com

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ using Figma Make