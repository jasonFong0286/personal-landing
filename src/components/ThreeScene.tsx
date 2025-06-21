import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeScene = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const frameId = useRef<number | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Get container dimensions
    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0a0a0a);

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      getFOV(),
      width / height,
      0.1,
      1000
    );
    camera.position.z = 8;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    rendererRef.current = renderer;
    mountRef.current.appendChild(renderer.domElement);

    // Lighting
    scene.add(new THREE.AmbientLight(0x404040, 0.4));

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    // Group 404
    const group404 = new THREE.Group();
    const digitGeometry = new THREE.BoxGeometry(0.8, 1.2, 0.2);
    const digitMaterial = new THREE.MeshPhongMaterial({ color: 0x6366f1, shininess: 100 });

    const digit4_1 = new THREE.Mesh(digitGeometry, digitMaterial);
    digit4_1.position.x = -2;
    const digit0 = new THREE.Mesh(digitGeometry, digitMaterial);
    digit0.position.x = 0;
    const digit4_2 = new THREE.Mesh(digitGeometry, digitMaterial);
    digit4_2.position.x = 2;

    group404.add(digit4_1, digit0, digit4_2);
    scene.add(group404);

    // Particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 1000;
    const posArray = new Float32Array(particlesCount * 3);
    for (let i = 0; i < posArray.length; i++) {
      posArray[i] = (Math.random() - 0.5) * 20;
    }
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particlesMaterial = new THREE.PointsMaterial({ size: 0.005, color: 0x8b5cf6 });
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Torus rings
    const torusGeometry = new THREE.TorusGeometry(3, 0.1, 16, 100);
    const torusMaterial = new THREE.MeshPhongMaterial({ color: 0xa855f7, transparent: true, opacity: 0.6 });
    const torus1 = new THREE.Mesh(torusGeometry, torusMaterial);
    torus1.rotation.x = Math.PI / 4;
    scene.add(torus1);

    const torus2 = new THREE.Mesh(torusGeometry, torusMaterial);
    torus2.rotation.y = Math.PI / 4;
    scene.add(torus2);

    // Mouse interaction
    let mouseX = 0, mouseY = 0;
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / width) * 2 - 1;
      mouseY = -(e.clientY / height) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const animate = () => {
      frameId.current = requestAnimationFrame(animate);

      // Animate 404
      group404.rotation.y += 0.01;
      group404.rotation.x += 0.005;
      group404.position.y = Math.sin(Date.now() * 0.001) * 0.3;

      // Torus spin
      torus1.rotation.z += 0.005;
      torus2.rotation.x += 0.003;

      // Particles float
      particlesMesh.rotation.y += 0.002;

      // Camera parallax
      camera.position.x += (mouseX * 0.5 - camera.position.x) * 0.05;
      camera.position.y += (mouseY * 0.5 - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };
    animate();

    // Resize handling
    const handleResize = () => {
      if (!mountRef.current) return;
      const newWidth = mountRef.current.clientWidth;
      const newHeight = mountRef.current.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.fov = getFOV();
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(mountRef.current);
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      if (frameId.current) cancelAnimationFrame(frameId.current);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      resizeObserver.disconnect();
      if (renderer.domElement && mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 w-full h-full" />;
};

// Helper: dynamic FOV
function getFOV() {
  return window.innerHeight > window.innerWidth ? 75 : 60;
}

export default ThreeScene;