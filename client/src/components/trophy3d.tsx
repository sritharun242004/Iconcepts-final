import { useEffect, useRef } from "react";
import * as THREE from "three";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";

export function Trophy3D({ className }: { className?: string }) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const W = mount.clientWidth || 340;
    const H = mount.clientHeight || 520;

    // Renderer — transparent background
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
    camera.position.set(0, 0, 15);
    camera.lookAt(0, 0, 0);

    // ── Materials ──────────────────────────────────────────────
    const gold = new THREE.MeshStandardMaterial({
      color: 0xd4a820,
      metalness: 0.92,
      roughness: 0.15,
    });
    const darkGold = new THREE.MeshStandardMaterial({
      color: 0x9a6f08,
      metalness: 0.88,
      roughness: 0.30,
    });
    const blackMat = new THREE.MeshStandardMaterial({
      color: 0x111111,
      roughness: 0.80,
      metalness: 0.05,
    });
    const plaqueMat = new THREE.MeshStandardMaterial({
      color: 0xc89010,
      metalness: 0.90,
      roughness: 0.15,
    });

    // ── Scene group ────────────────────────────────────────────
    const group = new THREE.Group();
    scene.add(group);

    const add = (geo: THREE.BufferGeometry, mat: THREE.Material, y: number) => {
      const m = new THREE.Mesh(geo, mat);
      m.position.y = y;
      m.castShadow = true;
      group.add(m);
      return m;
    };

    let y = -4.2;

    // ── Base tiers (3 cylinders + groove rings) ────────────────
    const tiers: [number, number, number][] = [
      [1.72, 1.95, 0.55],
      [1.48, 1.72, 0.48],
      [1.22, 1.48, 0.42],
    ];
    for (const [rTop, rBot, h] of tiers) {
      add(new THREE.CylinderGeometry(rTop, rBot, h, 64), gold, y + h / 2);
      // groove ring at tier top edge
      add(new THREE.TorusGeometry(rTop, 0.055, 16, 64), darkGold, y + h);
      // thin highlight ring just below groove
      add(new THREE.TorusGeometry(rTop + 0.04, 0.03, 12, 64), gold, y + h - 0.09);
      y += h;
    }

    // ── Black square pedestal ──────────────────────────────────
    const pedH = 1.25;
    const pedY = y + pedH / 2;
    add(new THREE.BoxGeometry(2.2, pedH, 2.2), blackMat, pedY);

    // Gold trim strips on pedestal
    add(new THREE.BoxGeometry(2.35, 0.10, 2.35), gold, y + 0.05);
    add(new THREE.BoxGeometry(2.35, 0.10, 2.35), gold, y + pedH - 0.05);

    // Plaque border (slightly proud of surface)
    const border = new THREE.Mesh(new THREE.BoxGeometry(1.72, 0.75, 0.06), darkGold);
    border.position.set(0, pedY, 1.12);
    group.add(border);

    // Gold plaque face
    const plaque = new THREE.Mesh(new THREE.BoxGeometry(1.58, 0.62, 0.07), plaqueMat);
    plaque.position.set(0, pedY, 1.15);
    group.add(plaque);

    y += pedH;

    // ── Small connecting cylinder atop pedestal ────────────────
    add(new THREE.CylinderGeometry(0.18, 0.22, 0.22, 32), gold, y + 0.11);
    y += 0.22;

    // ── Vertical pole ──────────────────────────────────────────
    const poleH = 5.0;
    add(new THREE.CylinderGeometry(0.055, 0.07, poleH, 24), gold, y + poleH / 2);

    const poleBaseY = y; // y where letters start

    // ── Environment map (warm amber) ──────────────────────────
    try {
      const pmrem = new THREE.PMREMGenerator(renderer);
      const sz = 64;
      const buf = new Uint8Array(sz * sz * 4);
      for (let i = 0; i < sz * sz; i++) {
        const t = Math.floor(i / sz) / sz;
        buf[i * 4]     = Math.floor(230 * (0.65 + 0.35 * (1 - t)));
        buf[i * 4 + 1] = Math.floor(185 * (0.55 + 0.45 * (1 - t)));
        buf[i * 4 + 2] = Math.floor(80  * (0.30 + 0.70 * (1 - t)));
        buf[i * 4 + 3] = 255;
      }
      const et = new THREE.DataTexture(buf, sz, sz, THREE.RGBAFormat);
      et.needsUpdate = true;
      scene.environment = pmrem.fromEquirectangular(et).texture;
    } catch (_) { /* lights-only fallback */ }

    // ── Lights ─────────────────────────────────────────────────
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

    // ── Load font & build letters ──────────────────────────────
    let raf: number;
    const animate = () => {
      raf = requestAnimationFrame(animate);
      group.rotation.y += 0.004;
      renderer.render(scene, camera);
    };

    const fontLoader = new FontLoader();
    fontLoader.load("/fonts/helvetiker_bold.typeface.json", (font) => {
      // Letters from bottom to top: I, S, R, P
      const letterDefs = [
        { char: "I", dy: poleBaseY + 0.55 },
        { char: "S", dy: poleBaseY + 1.60 },
        { char: "R", dy: poleBaseY + 2.68 },
        { char: "P", dy: poleBaseY + 3.76 },
      ];

      letterDefs.forEach(({ char, dy }) => {
        const geo = new TextGeometry(char, {
          font,
          size: 0.90,
          depth: 0.24,
          curveSegments: 12,
          bevelEnabled: true,
          bevelThickness: 0.05,
          bevelSize: 0.03,
          bevelSegments: 6,
        });

        geo.computeBoundingBox();
        const bbox = geo.boundingBox!;
        const cx = (bbox.max.x + bbox.min.x) / 2;
        const cy = (bbox.max.y + bbox.min.y) / 2;
        const cz = (bbox.max.z + bbox.min.z) / 2;
        geo.translate(-cx, -cy, -cz); // center on origin

        const mesh = new THREE.Mesh(geo, gold);
        mesh.position.set(0, dy, 0);
        group.add(mesh);
      });

      // Plaque text lines
      const plaqueLines = [
        { text: "PRSI STATE", dy: pedY + 0.12 },
        { text: "AWARDS 2025", dy: pedY - 0.16 },
      ];

      plaqueLines.forEach(({ text, dy }) => {
        const geo = new TextGeometry(text, {
          font,
          size: 0.14,
          depth: 0.025,
          curveSegments: 6,
          bevelEnabled: false,
        });

        geo.computeBoundingBox();
        const bbox = geo.boundingBox!;
        const cx = (bbox.max.x + bbox.min.x) / 2;
        geo.translate(-cx, 0, 0);

        const mesh = new THREE.Mesh(geo, blackMat);
        mesh.position.set(0, dy, 1.19);
        group.add(mesh);
      });

      // Centre the full trophy vertically
      const box3 = new THREE.Box3().setFromObject(group);
      const center = box3.getCenter(new THREE.Vector3());
      group.position.y -= center.y;

      animate();
    });

    // Resize handler
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
      renderer.dispose();
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className={className} />;
}
