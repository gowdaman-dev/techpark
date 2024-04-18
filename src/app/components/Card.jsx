'use client'
import React from 'react'
import { OrbitControls } from '@react-three/drei'
import { PerspectiveCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { ModelData } from './modeldata';
import { MouseModel } from '../models/Mouse';

function Card({ model }) {
    console.log(model);
    return (
        <div className='w-full h-full flex'>
            <div className='w-1/2 text-white'>
                {
                    ModelData.filter((data) => data.key === model).map((data) => {
                        return <>
                            <h2 className='text-6xl  font-bold py-2 text-violet-400'>{data.title}</h2>
                            {
                                data.content.map((content) => {
                                    return <p className='text-2xl opacity-90 font-light text-justify'>{content}</p>
                                })
                            }
                        </>
                    })
                }
            </div>
            <div className='w-1/2 h-full'>
                <Canvas className=' h-full w-full rounded-lg'>
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
