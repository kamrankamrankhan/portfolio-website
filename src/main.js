import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { gsap } from 'gsap';

// Scene setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('canvas.webgl'),
    antialias: true,
    alpha: true
});

renderer.setClearColor(0x000000, 1);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// Colorful particles
const particlesGeometry = new THREE.BufferGeometry();
const particlesCount = 4000;
const posArray = new Float32Array(particlesCount * 3);
const colorArray = new Float32Array(particlesCount * 3);
for (let i = 0; i < particlesCount * 3; i++) {
    posArray[i] = (Math.random() - 0.5) * 12;
    colorArray[i] = Math.random();
}
particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colorArray, 3));
const particlesMaterial = new THREE.PointsMaterial({
    size: 0.01,
    vertexColors: true,
    transparent: true,
    opacity: 0.7
});
const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
scene.add(particlesMesh);

// DevOps logo (large, animated plane)
const textureLoader = new THREE.TextureLoader();
const logoTexture = textureLoader.load('/images/devops-logo.png');
const logoGeometry = new THREE.PlaneGeometry(8, 4.4);
const logoMaterial = new THREE.MeshBasicMaterial({ map: logoTexture, transparent: true, side: THREE.DoubleSide });
const logo = new THREE.Mesh(logoGeometry, logoMaterial);
scene.add(logo);

// Camera position
camera.position.z = 10;

// Controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.enableZoom = false;
controls.enablePan = false;

// Mouse tracking
let targetX = 0, targetY = 0;
document.addEventListener('mousemove', (event) => {
    targetX = (event.clientX / window.innerWidth - 0.5) * 8;
    targetY = -(event.clientY / window.innerHeight - 0.5) * 4;
    gsap.to(logo.rotation, {
        x: targetY * 0.1,
        y: targetX * 0.1 + Math.PI,
        duration: 2
    });
});

// Animation
let t = 0;
const animate = () => {
    requestAnimationFrame(animate);
    t += 0.01;
    logo.rotation.y += 0.008;
    logo.rotation.x = Math.sin(t) * 0.08;
    logo.position.y = Math.sin(t) * 0.2;
    logo.scale.set(1 + Math.sin(t) * 0.03, 1 + Math.sin(t) * 0.03, 1);
    particlesMesh.rotation.y += 0.0007;
    controls.update();
    renderer.render(scene, camera);
};

// Handle resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// Initial animation
gsap.from(logo.scale, {
    x: 0,
    y: 0,
    z: 0,
    duration: 2,
    ease: 'elastic.out(1, 0.3)'
});

animate(); 