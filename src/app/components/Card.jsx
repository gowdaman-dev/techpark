'use client'
import React from 'react'
import { OrbitControls } from '@react-three/drei'
import { PerspectiveCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { ModelData } from './modeldata';
function Card({ model }) {
    console.log(model);
    return (
        <div className='w-full h-full flex flex-col-reverse md:flec-row  '>
            <div className='w-full text-white  overflow-y-auto'>
                {
                    ModelData.filter((data) => data.key === model).map((data) => {
                        return <>
                            <h2 key={data.key} className='xl:text-6xl md:text-4xl text-3xl   font-bold py-2 text-violet-400'>{data.title}</h2>
                            {
                                data.content.map((content) => {
                                    return <p className='md:text-lg min-h-[100px] overflow-hidden  opacity-90   text-justify'>{content}</p>
                                })
                            }
                        </>
                    })
                }
            </div>
            <div className='h-[600px]  md:h-[700px] '>
                <Canvas className=''>
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
