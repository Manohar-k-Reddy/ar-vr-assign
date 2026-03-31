import * as THREE from 'three';

// 1. Setup the Scene, Camera, and Renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5; // Move camera back so we can see the center of the world

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('canvas-container').appendChild(renderer.domElement);

// 2. Create a 3D Object (A Cube)
const geometry = new THREE.BoxGeometry(1, 1, 1);
// MeshNormalMaterial colors the faces based on their angle, making rotation easy to see!
const material = new THREE.MeshNormalMaterial();
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// 3. Helper Function: Convert Degrees to Radians
// WebGL calculates rotation in radians. (e.g., 180 degrees = Math.PI radians)
const degToRad = (degrees) => degrees * (Math.PI / 180);

// 4. Wire the HTML Sliders to the Cube's Transformations

// --- Translation ---
document.getElementById('transX').addEventListener('input', (e) => cube.position.x = parseFloat(e.target.value));
document.getElementById('transY').addEventListener('input', (e) => cube.position.y = parseFloat(e.target.value));
document.getElementById('transZ').addEventListener('input', (e) => cube.position.z = parseFloat(e.target.value));

// --- Rotation ---
document.getElementById('rotX').addEventListener('input', (e) => cube.rotation.x = degToRad(e.target.value));
document.getElementById('rotY').addEventListener('input', (e) => cube.rotation.y = degToRad(e.target.value));
document.getElementById('rotZ').addEventListener('input', (e) => cube.rotation.z = degToRad(e.target.value));

// --- Scaling ---
document.getElementById('scaleAll').addEventListener('input', (e) => {
  const s = parseFloat(e.target.value);
  cube.scale.set(s, s, s); // Scale X, Y, and Z equally
});

// 5. Create the Animation Loop
function animate() {
  requestAnimationFrame(animate); // Tell browser to run this again on the next frame
  renderer.render(scene, camera);  // Draw the scene!
}

// Start the engine
animate();

// Keep the canvas sized correctly if the user resizes their browser window
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
