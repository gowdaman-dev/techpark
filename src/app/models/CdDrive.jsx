/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 ./public/models/cddrive.glb -o ./src/app/models/CdDrive.jsx 
Author: jaggelidakis (https://sketchfab.com/jaggelidakis)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/cd-drive-bd7c52a733a142a3839a42fa8f590d72
Title: CD Drive
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function CdDriveModel(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models/cddrive.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null} scale={50}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="66ef3c7f952b41c189c82dcf41a9917afbx" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="pCube1" position={[0, 1.486, 0]} scale={[5.387, 1.32, 7.352]}>
                  <group name="transform2" />
                </group>
                <group name="pCylinder1" position={[0, 1.009, 6.11]} scale={1.449}>
                  <group name="transform1" />
                </group>
                <group name="pCube2">
                  <group name="transform4" />
                </group>
                <group name="pCylinder2" position={[0, 2.13, 0]} scale={[1.1, 0.029, 1.1]}>
                  <group name="transform3" />
                </group>
                <group name="pCube3">
                  <group name="polySurface2" position={[0, 0, 0.011]}>
                    <mesh name="polySurface2_lambert2_0" geometry={nodes.polySurface2_lambert2_0.geometry} material={materials.lambert2} />
                  </group>
                  <group name="polySurface1">
                    <mesh name="polySurface1_lambert1_0" geometry={nodes.polySurface1_lambert1_0.geometry} material={materials.lambert1} />
                    <mesh name="polySurface1_lambert3_0" geometry={nodes.polySurface1_lambert3_0.geometry} material={materials.lambert3} />
                    <mesh name="polySurface1_lambert2_0" geometry={nodes.polySurface1_lambert2_0.geometry} material={materials.lambert2} />
                  </group>
                  <group name="transform5" />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/cddrive.glb')
