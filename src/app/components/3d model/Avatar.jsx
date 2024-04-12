'use client'
import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export function AvatarModel(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/cyberwarrior.glb')
  const { actions } = useAnimations(animations, group)
  useEffect(() => {
      actions[0].play()
  })
  return (
    <group ref={group} {...props} dispose={null} scale={6} position={[0, -5, 5]}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name="aa5ba110845f4d1d8900ebac0f426592fbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.025}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Object_4">
                  <primitive object={nodes._rootJoint} />
                  <skinnedMesh
                    name="Object_7"
                    geometry={nodes.Object_7.geometry}
                    material={materials.Material_25}
                    skeleton={nodes.Object_7.skeleton}
                  />
                  <group name="Object_6" rotation={[-Math.PI / 2, 0, 0]} scale={2.54} />
                  <group name="polySurface252" rotation={[-Math.PI / 2, 0, 0]} scale={2.54} />
                  <group
                    name="rdmobj00_004"
                    position={[61.463, 28.342, -76.974]}
                    rotation={[1.709, -0.162, -2.779]}
                    scale={5.831}>
                    <mesh
                      name="rdmobj00_004_Bloody_Knife_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.rdmobj00_004_Bloody_Knife_0.geometry}
                      material={materials.Bloody_Knife}
                    />
                    <group
                      name="Plane002"
                      position={[0.255, -0.099, 4.732]}
                      rotation={[-2.163, -1.221, -0.707]}
                      scale={0.016}>
                      <mesh
                        name="Plane002_Material_#27_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Plane002_Material_#27_0'].geometry}
                        material={materials.Material_27}
                      />
                    </group>
                    <group
                      name="Plane001"
                      position={[0.279, -0.106, 4.871]}
                      rotation={[-1.445, 0.178, -0.228]}
                      scale={0.016}>
                      <mesh
                        name="Plane001_Material_#26_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Plane001_Material_#26_0'].geometry}
                        material={materials.Material_26}
                      />
                    </group>
                    <group
                      name="Plane003"
                      position={[0.397, -0.46, 4.894]}
                      rotation={[-1.445, 0.178, -0.228]}
                      scale={0.016}>
                      <mesh
                        name="Plane003_Material_#26_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Plane003_Material_#26_0'].geometry}
                        material={materials.Material_26}
                      />
                    </group>
                    <group
                      name="Plane004"
                      position={[0.612, -0.018, 4.659]}
                      rotation={[-2.163, -1.221, -0.707]}
                      scale={0.016}>
                      <mesh
                        name="Plane004_Material_#27_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Plane004_Material_#27_0'].geometry}
                        material={materials.Material_27}
                      />
                    </group>
                  </group>
                  <group
                    name="DrawCall_0126"
                    position={[-21.722, 38.277, -133.322]}
                    rotation={[0.103, -0.17, -2.024]}>
                    <mesh
                      name="DrawCall_0126_02_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['DrawCall_0126_02_-_Default_0'].geometry}
                      material={materials['02_-_Default']}
                    />
                  </group>
                  <group
                    name="PhysCamera001"
                    position={[-336.822, 46.171, 295.788]}
                    rotation={[0.099, -0.905, 0.078]}
                  />
                  <group
                    name="PhysCamera001Target"
                    position={[-37.923, 69.363, 62.263]}
                    rotation={[-0.014, -0.916, -0.011]}
                  />
                  <group name="Particle_View_001" rotation={[-Math.PI / 2, 0, 0]} />
                  <group name="Birth_001" rotation={[-Math.PI / 2, 0, 0]} />
                  <group name="Position_Icon_001" rotation={[-Math.PI / 2, 0, 0]} />
                  <group name="Shape_002" rotation={[-Math.PI / 2, 0, 0]} />
                  <group name="Render_002" rotation={[-Math.PI / 2, 0, 0]} />
                  <group name="Display_003" rotation={[-Math.PI / 2, 0, 0]} />
                  <group name="Event_003" rotation={[-Math.PI / 2, 0, 0]} />
                  <group name="Position_Object_001" rotation={[-Math.PI / 2, 0, 0]} />
                  <group name="Force_001" rotation={[-Math.PI / 2, 0, 0]} />
                  <group name="Event_004" rotation={[-Math.PI / 2, 0, 0]} />
                  <group name="Display_004" rotation={[-Math.PI / 2, 0, 0]} />
                  <group name="SwordTrail_node001" rotation={[-Math.PI / 2, 0, 0]} />
                  <group name="SwordTrail_node002" rotation={[-Math.PI / 2, 0, 0]}>
                    <mesh
                      name="SwordTrail_node002_11_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['SwordTrail_node002_11_-_Default_0'].geometry}
                      material={materials['11_-_Default']}
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/cyberwarrior.glb')