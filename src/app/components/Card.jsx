"use client";
import React from "react";
import { OrbitControls } from "@react-three/drei";
import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { ModelData } from "./modeldata";
function Card({ model }) {
  return (
    <div className="max-w-screen min-h-screen flex flex-col lg:flex-row  ">
      <div className="grid place-items-center w-full">
        <div className="w-full lg:min-h-full h-[50vh] grid place-item-center">
          <Canvas className="min-w-full lg:h-[700px] h-[400px]">
            <ambientLight intensity={4} shadow={true} />
            <directionalLight
              intensity={0.5}
              shadow={true}
              position={[10, 10, 5]}
            />
            <OrbitControls autoRotate />
            {ModelData.filter((data) => data.key === model).map((data) => {
              return data.model;
            })}
            <meshLambertMaterial />
            <PerspectiveCamera
              makeDefault
              position={[5, 0, 5]}
              scale={0.2}
              fov={40}
            />
          </Canvas>
        </div>
      </div>
      <div className="w-full min-h-full text-white  overflow-y-auto scrollbar-hide p-6  bg-black/70">
        {ModelData.filter((data) => data.key === model).map((data) => {
          return (
            <>
              <h2
                key={data.key}
                className="xl:text-6xl md:text-4xl text-3xl   font-bold py-2 text-violet-600"
              >
                {data.title}
              </h2>
              {data.content.map((content) => {
                return (
                  <p className="md:text-xl min-h-[100px] overflow-hidden     opacity-90   text-justify">
                    {content}
                  </p>
                );
              })}
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Card;
