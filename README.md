# DevOps 3D Portfolio

A visually striking, interactive portfolio website built with Three.js, featuring a DevOps-themed animated background, modern black & white UI, and sections for your skills, experience, certifications, and projects.

## Features
- **Animated DevOps Logo**: Large, animated DevOps infinity loop logo as the 3D background.
- **Colorful Particle Effects**: Dynamic, vibrant particles for a modern look.
- **Responsive Design**: Works beautifully on desktop and mobile.
- **Professional Sections**: About, Experience, Skills, Certifications, Projects, Education, and Social Links (Upwork, GitHub, LinkedIn).
- **DevOps Tool Logos**: Prominently displayed logos for AWS, Docker, Kubernetes, Terraform, Ansible, Jenkins, and more.

## Folder Structure
```
public/
  images/           # All images and logos (DevOps, social, profile)
    aws.png
    docker.png
    kubernetes.png
    terraform.png
    ansible.png
    jenkins.png
    upwork.png
    github.png
    linkedin.png
    devops-logo.png
    profile.jpg
src/
  main.js           # Three.js and animation logic
  style.css         # Modern, high-contrast CSS
  assets.js         # (Optional) Asset imports
index.html          # Main HTML file
README.md           # This file
package.json        # Project dependencies and scripts
```

## Getting Started
1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Run the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.
3. **Build for production:**
   ```bash
   npm run build
   ```
4. **Preview the production build:**
   ```bash
   npm run preview
   ```

## Customization
- **Profile Image:** Place your photo as `public/images/profile.jpg`.
- **DevOps Logo:** Use your own DevOps infinity loop as `public/images/devops-logo.png`.
- **Social Logos:** Place Upwork, GitHub, and LinkedIn logos in `public/images/`.
- **Content:** Edit `index.html` to update your About, Experience, Skills, etc.
- **Styling:** Tweak `src/style.css` for colors, layout, and effects.
- **3D Background:** Edit `src/main.js` to change the animation or add new effects.

## Credits
- Built with [Three.js](https://threejs.org/), [GSAP](https://greensock.com/gsap/), and [Vite](https://vitejs.dev/).
- DevOps infinity loop and tool logos are for demonstration purposes. Replace with your own or official brand assets as needed.

## License
This project is for personal portfolio use. For commercial use, ensure you have rights to all images and assets. 

