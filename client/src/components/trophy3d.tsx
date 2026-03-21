import { useEffect, useRef } from "react";
import * as THREE from "three";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

export function Trophy3D({ className }: { className?: string }) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const W = mount.clientWidth || 340;
    const H = mount.clientHeight || 520;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(W, H);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.5;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(34, W / H, 0.1, 100);
    camera.position.set(0, 0, 12.5);
    camera.lookAt(0, 0, 0);

    // ── Materials ─────────────────────────────────────────
    const gold = new THREE.MeshStandardMaterial({
      color: 0xc9a227,
      metalness: 0.90,
      roughness: 0.18,
    });
    const darkGold = new THREE.MeshStandardMaterial({
      color: 0x8a6d12,
      metalness: 0.85,
      roughness: 0.32,
    });
    const blackMat = new THREE.MeshStandardMaterial({
      color: 0x111111,
      roughness: 0.80,
      metalness: 0.05,
    });
    const plaqueMat = new THREE.MeshStandardMaterial({
      color: 0xb8901a,
      metalness: 0.88,
      roughness: 0.18,
    });

    const group = new THREE.Group();
    group.scale.set(0.75, 1.0, 0.75); // slim proportions
    scene.add(group);

    const add = (geo: THREE.BufferGeometry, mat: THREE.Material, y: number) => {
      const m = new THREE.Mesh(geo, mat);
      m.position.y = y;
      m.castShadow = true;
      group.add(m);
      return m;
    };

    let y = -5.0;

    // ── Base: spool shape (wide → narrow → wide) ────────
    // Bottom drum — wide
    add(new THREE.CylinderGeometry(1.50, 1.50, 0.25, 64), gold, y + 0.125);
    y += 0.25;
    add(new THREE.CylinderGeometry(1.53, 1.53, 0.05, 64), darkGold, y + 0.025);
    y += 0.05;

    // Middle band — narrow (the waist)
    add(new THREE.CylinderGeometry(1.15, 1.15, 0.55, 64), gold, y + 0.275);
    y += 0.55;
    add(new THREE.CylinderGeometry(1.18, 1.18, 0.05, 64), darkGold, y + 0.025);
    y += 0.05;

    // Top band — wide again (matches bottom)
    add(new THREE.CylinderGeometry(1.48, 1.48, 0.22, 64), gold, y + 0.11);
    y += 0.22;
    add(new THREE.CylinderGeometry(1.51, 1.51, 0.05, 64), darkGold, y + 0.025);
    y += 0.05;

    // ── Black pedestal ───────────────────────────────────
    const pedH = 1.10;
    const pedY = y + pedH / 2;
    add(new THREE.BoxGeometry(1.90, pedH, 1.90), blackMat, pedY);

    // Gold trim at top & bottom of pedestal
    add(new THREE.BoxGeometry(2.00, 0.08, 2.00), gold, y + 0.04);
    add(new THREE.BoxGeometry(2.00, 0.08, 2.00), gold, y + pedH - 0.04);

    // Plaque border — front
    const borderF = new THREE.Mesh(new THREE.BoxGeometry(1.50, 0.65, 0.06), darkGold);
    borderF.position.set(0, pedY, 0.97);
    group.add(borderF);

    // Plaque face — front
    const plaqueF = new THREE.Mesh(new THREE.BoxGeometry(1.36, 0.52, 0.07), plaqueMat);
    plaqueF.position.set(0, pedY, 1.00);
    group.add(plaqueF);

    // Plaque border — back
    const borderB = new THREE.Mesh(new THREE.BoxGeometry(1.50, 0.65, 0.06), darkGold);
    borderB.position.set(0, pedY, -0.97);
    group.add(borderB);

    // Plaque face — back
    const plaqueB = new THREE.Mesh(new THREE.BoxGeometry(1.36, 0.52, 0.07), plaqueMat);
    plaqueB.position.set(0, pedY, -1.00);
    group.add(plaqueB);

    y += pedH;

    // ── Small stepped discs above pedestal ────────────────
    add(new THREE.CylinderGeometry(0.85, 0.85, 0.14, 48), gold, y + 0.07);
    y += 0.14;
    add(new THREE.CylinderGeometry(0.88, 0.88, 0.04, 48), darkGold, y + 0.02);
    y += 0.04;

    add(new THREE.CylinderGeometry(0.68, 0.68, 0.12, 48), gold, y + 0.06);
    y += 0.12;
    add(new THREE.CylinderGeometry(0.71, 0.71, 0.04, 48), darkGold, y + 0.02);
    y += 0.04;

    add(new THREE.CylinderGeometry(0.50, 0.50, 0.10, 48), gold, y + 0.05);
    y += 0.10;
    add(new THREE.CylinderGeometry(0.53, 0.53, 0.04, 48), darkGold, y + 0.02);
    y += 0.04;

    // ── Connecting knob ──────────────────────────────────
    add(new THREE.CylinderGeometry(0.15, 0.22, 0.14, 32), gold, y + 0.07);
    y += 0.14;

    // ── Pole (stops at the base of letters) ─────────────
    const poleH = 0.50;
    add(new THREE.CylinderGeometry(0.05, 0.065, poleH, 24), gold, y + poleH / 2);
    const poleBaseY = y;

    // ── Environment map ──────────────────────────────────
    try {
      const pmrem = new THREE.PMREMGenerator(renderer);
      const sz = 64;
      const buf = new Uint8Array(sz * sz * 4);
      for (let i = 0; i < sz * sz; i++) {
        const t = Math.floor(i / sz) / sz;
        buf[i * 4]     = Math.floor(220 * (0.65 + 0.35 * (1 - t)));
        buf[i * 4 + 1] = Math.floor(170 * (0.55 + 0.45 * (1 - t)));
        buf[i * 4 + 2] = Math.floor(60  * (0.30 + 0.70 * (1 - t)));
        buf[i * 4 + 3] = 255;
      }
      const et = new THREE.DataTexture(buf, sz, sz, THREE.RGBAFormat);
      et.needsUpdate = true;
      scene.environment = pmrem.fromEquirectangular(et).texture;
    } catch (_) { /* fallback */ }

    // ── Lights ────────────────────────────────────────────
    scene.add(new THREE.AmbientLight(0xfff0dd, 0.30));

    const key = new THREE.DirectionalLight(0xffe8a0, 3.5);
    key.position.set(5, 14, 8);
    key.castShadow = true;
    scene.add(key);

    const rim = new THREE.DirectionalLight(0xffd060, 2.0);
    rim.position.set(-7, 5, -9);
    scene.add(rim);

    const fill = new THREE.PointLight(0xfff0d0, 1.5, 35);
    fill.position.set(-5, 2, 6);
    scene.add(fill);

    const topLight = new THREE.DirectionalLight(0xffffff, 1.2);
    topLight.position.set(0, 18, 3);
    scene.add(topLight);

    // ── OrbitControls (trackpad/mouse interaction) ──────
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.8;
    // Lock vertical — only allow left/right rotation
    controls.minPolarAngle = Math.PI / 2;
    controls.maxPolarAngle = Math.PI / 2;

    // ── Sparkle texture ────────────────────────────────────
    const sparkleCanvas = document.createElement("canvas");
    sparkleCanvas.width = 64;
    sparkleCanvas.height = 64;
    const ctx = sparkleCanvas.getContext("2d")!;
    const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    grad.addColorStop(0, "rgba(255, 255, 200, 1)");
    grad.addColorStop(0.1, "rgba(255, 230, 120, 1)");
    grad.addColorStop(0.3, "rgba(255, 180, 50, 0.8)");
    grad.addColorStop(0.6, "rgba(255, 120, 20, 0.3)");
    grad.addColorStop(1, "rgba(255, 60, 0, 0)");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 64, 64);
    const sparkleTexture = new THREE.CanvasTexture(sparkleCanvas);

    // ── Rising spiral flame (starts bright at bottom, fades at top) ──
    const FLAME_COUNT = 500;
    const flameGeo = new THREE.BufferGeometry();
    const flamePos = new Float32Array(FLAME_COUNT * 3);
    const flameCol = new Float32Array(FLAME_COUNT * 3);
    const flameSizes = new Float32Array(FLAME_COUNT);
    const flameAlphas = new Float32Array(FLAME_COUNT);
    const flameSpd = new Float32Array(FLAME_COUNT);
    const flameOff = new Float32Array(FLAME_COUNT);

    for (let i = 0; i < FLAME_COUNT; i++) {
      flameOff[i] = Math.random() * Math.PI * 2;
      flameSpd[i] = 0.15 + Math.random() * 0.45;
      flameSizes[i] = 0.04 + Math.random() * 0.10;
      flameAlphas[i] = 1.0;
    }
    flameGeo.setAttribute("position", new THREE.BufferAttribute(flamePos, 3));
    flameGeo.setAttribute("color", new THREE.BufferAttribute(flameCol, 3));

    const flameMat = new THREE.PointsMaterial({
      size: 0.12,
      map: sparkleTexture,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      sizeAttenuation: true,
    });
    const flameParticles = new THREE.Points(flameGeo, flameMat);
    scene.add(flameParticles);


    // Trophy vertical range
    const trophyBottom = -5.0;
    const trophyTop = poleBaseY + 4.5;
    const trophyHeight = trophyTop - trophyBottom;

    // ── Animation ─────────────────────────────────────────
    let raf: number;
    let clock = 0;
    const animate = () => {
      raf = requestAnimationFrame(animate);
      clock += 0.016;

      // ── Rising spiral flame — bright at bottom, fades at top ──
      const fArr = flameGeo.attributes.position.array as Float32Array;
      const fCol = flameGeo.attributes.color.array as Float32Array;
      for (let i = 0; i < FLAME_COUNT; i++) {
        // Each particle rises from bottom to top, then resets
        const t = ((clock * flameSpd[i] * 0.12 + flameOff[i] * 0.5) % 1);
        const yPos = trophyBottom + t * trophyHeight;
        const normalY = t; // 0 = bottom, 1 = top

        // Spiral radius — tight at bottom, expands as it rises, then tightens at very top
        const radius = 0.4 + normalY * 1.2 + Math.sin(normalY * Math.PI * 2) * 0.3;
        const spiralTurns = 5;
        const angle = flameOff[i] + clock * flameSpd[i] * 0.6 + normalY * Math.PI * 2 * spiralTurns;

        fArr[i * 3]     = Math.cos(angle) * radius;
        fArr[i * 3 + 1] = yPos;
        fArr[i * 3 + 2] = Math.sin(angle) * radius;

        // Color: bright gold/white at bottom → warm orange → fades to dark at top
        const fade = 1.0 - normalY * normalY; // quadratic fade
        const brightness = Math.max(0, fade);
        fCol[i * 3]     = brightness * (1.0);                    // R stays bright
        fCol[i * 3 + 1] = brightness * (0.7 - normalY * 0.4);   // G reduces
        fCol[i * 3 + 2] = brightness * (0.2 - normalY * 0.2);   // B fades fast
      }
      flameGeo.attributes.position.needsUpdate = true;
      flameGeo.attributes.color.needsUpdate = true;
      flameParticles.position.copy(group.position);


      controls.update();
      renderer.render(scene, camera);
    };

    // ── Font & letters ────────────────────────────────────
    const fontLoader = new FontLoader();
    fontLoader.load("/fonts/helvetiker_bold.typeface.json", (font) => {
      const letters = [
        { char: "I", dy: poleBaseY + 0.48,  dx: 0.00,  rotY: 0.00,   rotZ: 0.00 },
        { char: "S", dy: poleBaseY + 1.46,  dx: 0.02,  rotY: 0.14,   rotZ: 0.22 },
        { char: "R", dy: poleBaseY + 2.38,  dx: 0.10,  rotY: 0.06,   rotZ: -0.14 },
        { char: "P", dy: poleBaseY + 3.46,  dx: 0.00,  rotY: 0.12,   rotZ: 0.26 },
      ];

      letters.forEach(({ char, dy, dx, rotY, rotZ }) => {
        const geo = new TextGeometry(char, {
          font,
          size: 0.92,
          depth: 0.26,
          curveSegments: 12,
          bevelEnabled: true,
          bevelThickness: 0.05,
          bevelSize: 0.03,
          bevelSegments: 6,
        });

        geo.computeBoundingBox();
        const bb = geo.boundingBox!;
        geo.translate(
          -(bb.max.x + bb.min.x) / 2,
          -(bb.max.y + bb.min.y) / 2,
          -(bb.max.z + bb.min.z) / 2,
        );

        const mesh = new THREE.Mesh(geo, gold);
        mesh.position.set(dx, dy, 0);
        mesh.rotation.y = rotY;
        mesh.rotation.z = rotZ;
        mesh.castShadow = true;
        group.add(mesh);
      });

      // Plaque text — front & back
      [
        { text: "PRSI STATE", dy: pedY + 0.10 },
        { text: "AWARDS 2025", dy: pedY - 0.14 },
      ].forEach(({ text, dy }) => {
        // Front
        const geoF = new TextGeometry(text, {
          font, size: 0.12, depth: 0.02, curveSegments: 6, bevelEnabled: false,
        });
        geoF.computeBoundingBox();
        const bbF = geoF.boundingBox!;
        geoF.translate(-(bbF.max.x + bbF.min.x) / 2, 0, 0);
        const meshF = new THREE.Mesh(geoF, blackMat);
        meshF.position.set(0, dy, 1.04);
        group.add(meshF);

        // Back (rotated 180°)
        const geoB = new TextGeometry(text, {
          font, size: 0.12, depth: 0.02, curveSegments: 6, bevelEnabled: false,
        });
        geoB.computeBoundingBox();
        const bbB = geoB.boundingBox!;
        geoB.translate(-(bbB.max.x + bbB.min.x) / 2, 0, 0);
        const meshB = new THREE.Mesh(geoB, blackMat);
        meshB.position.set(0, dy, -1.04);
        meshB.rotation.y = Math.PI;
        group.add(meshB);
      });

      // Centre trophy vertically
      const box3 = new THREE.Box3().setFromObject(group);
      const center = box3.getCenter(new THREE.Vector3());
      group.position.y -= center.y;

      animate();
    });

    const onResize = () => {
      const nW = mount.clientWidth;
      const nH = mount.clientHeight;
      camera.aspect = nW / nH;
      camera.updateProjectionMatrix();
      renderer.setSize(nW, nH);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      controls.dispose();
      renderer.dispose();
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className={className} />;
}
