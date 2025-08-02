import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

interface Scene3DProps {
  mousePosition: { x: number; y: number };
}

const Scene3D: React.FC<Scene3DProps> = ({ mousePosition }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene>();
  const rendererRef = useRef<THREE.WebGLRenderer>();
  const cameraRef = useRef<THREE.PerspectiveCamera>();
  const particlesRef = useRef<THREE.Points>();

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    // Store references
    sceneRef.current = scene;
    rendererRef.current = renderer;
    cameraRef.current = camera;

    // Create simple particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 300;
    const positionsArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      positionsArray[i] = (Math.random() - 0.5) * 15;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positionsArray, 3));
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.03,
      color: '#ffffff',
      transparent: true,
      opacity: 0.6,
    });

    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);
    particlesRef.current = particles;

    // Position camera
    camera.position.z = 5;

    // Simple animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Slow rotation of particles
      if (particlesRef.current) {
        particlesRef.current.rotation.y += 0.001;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (cameraRef.current && rendererRef.current) {
        cameraRef.current.aspect = window.innerWidth / window.innerHeight;
        cameraRef.current.updateProjectionMatrix();
        rendererRef.current.setSize(window.innerWidth, window.innerHeight);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  // Subtle camera movement based on mouse
  useEffect(() => {
    if (cameraRef.current) {
      const targetX = (mousePosition.x - 0.5) * 0.5;
      const targetY = (mousePosition.y - 0.5) * 0.5;
      
      cameraRef.current.position.x += (targetX - cameraRef.current.position.x) * 0.02;
      cameraRef.current.position.y += (-targetY - cameraRef.current.position.y) * 0.02;
      
      cameraRef.current.lookAt(0, 0, 0);
    }
  }, [mousePosition]);

  return <div ref={mountRef} className="fixed inset-0 -z-10" />;
};

export default Scene3D;