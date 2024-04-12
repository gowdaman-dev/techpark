'use client'
import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";
import Image from "next/image";
import { AvatarModel } from "./components/3d model/Avatar";
import { Suspense } from "react";
export default function Home() {
  return (
    <>
      <div className="flex w-screen h-screen">
        <div className="w-[50%] h-full bg-red-400 flex items-center justify-center ">
          <h1>

          </h1>
        </div>
        <div className="w-[50%] h-full flex items-center justify-center">
          <Canvas className="w-[50%] h-full">
            <ambientLight intensity={8} />
            <Suspense fallback={null}>
              <AvatarModel />
            </Suspense>
            <perspectiveCamera position={[0, 0, -10]} />
          </Canvas>
        </div>
      </div>
    </>
  );
}
