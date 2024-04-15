"use client";
import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";
import { AvatarModel } from "./components/3d model/Avatar";
import { Suspense, useRef } from "react";
import { Environment, OrbitControls, Text, useHelper } from "@react-three/drei";
import { Orbitron, Righteous } from "next/font/google";
import { DirectionalLight, DirectionalLightHelper } from "three";
export const cyberText = Righteous({ subsets: ["latin"], weight: ['400'] });
export default function Home() {
  const dirLight = useRef(null);
  return (
    <>
      <div className="flex w-screen h-screen bg-gradient-to-r from-rose-100 to-teal-100 text-gray-900">
        {/* <div className="w-full relative z-10 h-full flex items-center justify-center px-20 flex flex-col text-left">
          <h1 className={`${cyberText.className} text-cyber md:text-5xl font-semibold text-5xl  `}>
            Explore the Evolution of Computing: A Hands-On Journey
          </h1>
          <h4 className=" font-light text-xl py-2">
            Interact with vintage computers, experience groundbreaking
            inventions, and code your own creations.
          </h4>
        </div> */}
        <div className="w-full top-0 left-0 absolute z-0 h-full flex items-center justify-center">
          <Canvas className="w-full h-full top-0 left-0 ">
            <Suspense fallback={null}>
              <AvatarModel />
              <group>
                <Text color={"white"} textAlign="center" fontSize={.5} position={[0, 0, 2]}>tech savvy museum</Text>
              </group>
            </Suspense>
            <perspectiveCamera position={[0, 0, 0]} />
            <Environment files={'/hero.exr'} />
            <OrbitControls />
            <directionalLight color={"#005F00"} intensity={1} ref={dirLight} />
          </Canvas>
        </div>
      </div>
    </>
  );
}
