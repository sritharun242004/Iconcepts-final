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

    let y = -4.5;

    // ── Base: 3 flat disc-like cylinders (straight sides) ─
    const baseTiers: [number, number, number][] = [
      [1.50, 1.55, 0.40],   // top-r, bot-r, height
      [1.30, 1.35, 0.35],
      [1.10, 1.15, 0.30],
    ];
    for (const [rT, rB, h] of baseTiers) {
      add(new THREE.CylinderGeometry(rT, rB, h, 64), gold, y + h / 2);
      y += h;
    }

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

    // ── Small flat discs above pedestal ───────────────────
    const upperTiers: [number, number, number][] = [
      [0.72, 0.78, 0.12],
      [0.56, 0.62, 0.10],
      [0.40, 0.46, 0.08],
    ];
    for (const [rT, rB, h] of upperTiers) {
      add(new THREE.CylinderGeometry(rT, rB, h, 48), gold, y + h / 2);
      y += h;
    }

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
    controls.autoRotateSpeed = 2.0;
    // Lock vertical — only allow left/right rotation
    controls.minPolarAngle = Math.PI / 2;
    controls.maxPolarAngle = Math.PI / 2;

    // ── Animation ─────────────────────────────────────────
    let raf: number;
    const animate = () => {
      raf = requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };

    // ── Font & letters ────────────────────────────────────
    const fontLoader = new FontLoader();
    fontLoader.load("/fonts/helvetiker_bold.typeface.json", (font) => {
      // Letters bottom-to-top: I, S, R, P
      // Staggered X offsets + Y rotation + Z tilt for cascading look
      const letters = [
        { char: "I", dy: poleBaseY + 0.55,  dx: 0,     rotY: 0,     rotZ: 0 },
        { char: "S", dy: poleBaseY + 1.45,  dx: 0.25,  rotY: 0.30,  rotZ: -0.08 },
        { char: "R", dy: poleBaseY + 2.35,  dx: -0.20, rotY: -0.22, rotZ: 0.06 },
        { char: "P", dy: poleBaseY + 3.25,  dx: 0.15,  rotY: 0.25,  rotZ: -0.05 },
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
