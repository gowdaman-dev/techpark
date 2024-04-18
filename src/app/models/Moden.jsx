/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 ./public/models/modem.glb -o ./src/app/models/Moden.jsx 
Author: Gustavo.Banck (https://sketchfab.com/Gustavo.Banck)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/action-intelbras-modem-3d8d5ea391bd4f30bb0603eb07f17ca9
Title: Action Intelbras Modem
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function ModemModel(props) {
  const { nodes, materials } = useGLTF('/models/modem.glb')
  return (
    <group {...props} dispose={null} scale={12}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.029}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[-0.06, 4.142, -0.48]}>
            <mesh geometry={nodes.polySurface91_led_azul_0.geometry} material={materials.led_azul} />
            <mesh geometry={nodes.polySurface91_led_apagado_0.geometry} material={materials.led_apagado} />
            <mesh geometry={nodes.polySurface91_Preto_Brilhante_0.geometry} material={materials.Preto_Brilhante} />
            <mesh geometry={nodes.polySurface91_preto_Fosco_0.geometry} material={materials.preto_Fosco} />
            <mesh geometry={nodes.polySurface91_aluminio_0.geometry} material={materials.aluminio} />
            <mesh geometry={nodes.polySurface91_botaozinho_preto_0.geometry} material={materials.botaozinho_preto} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/modem.glb')
