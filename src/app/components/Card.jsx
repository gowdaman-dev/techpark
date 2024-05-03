'use client'
import React from 'react'
import { OrbitControls } from '@react-three/drei'
import { PerspectiveCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { ModelData } from './modeldata';
function Card({ model }) {
   
    return (
        <div className='w-full h-full flex flex-col-reverse md:flec-row  '>
            <div className='w-full text-white  overflow-y-auto scrollbar-hide p-6  bg-black/70 rounded-md  '>
                {
                    ModelData.filter((data) => data.key === model).map((data) => {
                        return <>
                            <h2 key={data.key} className='xl:text-6xl md:text-4xl text-3xl   font-bold py-2 text-violet-600'>{data.title}</h2>
                            {
                                data.content.map((content) => {
                                    return <p className='md:text-xl min-h-[100px] overflow-hidden     opacity-90   text-justify'>{content}</p>
                                })
                            }
                        </>
                    })
                }
            </div>
            <div className='h-[400px]  md:h-[700px] '>
                <Canvas className='h-full w-full '>
                    <ambientLight intensity={4} shadow={true} />
                    <directionalLight intensity={.5} shadow={true} position={[10, 10, 5]} />
                    <OrbitControls autoRotate />
                    {
                        ModelData.filter((data) => data.key === model).map((data) => {
                            return data.model
                        })
                    }
                    <meshStandardMaterial />
                    <PerspectiveCamera makeDefault position={[5, 0, 5]} scale={.2} />
                </Canvas>
            </div>
        </div>
    )
}

export default Card
