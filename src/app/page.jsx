"use client";
import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";
import { AvatarModel } from "./components/3d model/Avatar";
import { Suspense } from "react";
import { Environment } from "@react-three/drei";
import { Orbitron } from "next/font/google";
export const cyberText = Orbitron({ subsets: ["latin"] });
export default function Home() {
  return (
    <>
      <div className="flex w-screen h-screen">
        <div className="w-[60%] h-full flex items-center justify-center px-20 flex flex-col text-left">
          <h1 className={`${cyberText.className} text-5xl font-semibold`}>
            Explore the Evolution of Computing: A Hands-On Journey
          </h1>
          <h4 className="w-full font-light text-xl py-2">
            Interact with vintage computers, experience groundbreaking
            inventions, and code your own creations.
          </h4>
        </div>
        <div className="w-[50%] h-full flex items-center justify-center">
          <Canvas className="w-[50%] h-full">
            <Suspense fallback={null}>
              <AvatarModel />
            </Suspense>
            <perspectiveCamera position={[0, 0, 0]} />
            <Environment files={"/hero.exr"} />
          </Canvas>
        </div>
      </div>
    </>
  );
}
