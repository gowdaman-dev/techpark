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
            <div className='w-1/2'>
                {
                    ModelData.filter((data) => data.key === model).map((data) => {
                        return <>
                            <h2 className='text-4xl font-bold py-2'>{data.title}</h2>
                            {
                                data.content
                            }
                        </>
                    })
                }
            </div>
            <div className='w-1/2 h-full'>
                <Canvas className='bg-blue-200 h-full w-full rounded-lg'>
                    <ambientLight intensity={4} shadow={true} />
                    <directionalLight intensity={.5} shadow={true} position={[10, 10, 10]} />
                    <OrbitControls enableZoom={false} />
                    {
                        ModelData.filter((data) => data.key === model).map((data) => {
                            return data.model
                        })
                    }
                    <meshStandardMaterial />
                    <PerspectiveCamera makeDefault position={[10, 10, 10]} scale={.5} />
                </Canvas>
            </div>
        </div>
    )
}

export default Card
