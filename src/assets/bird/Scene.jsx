/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 scene.gltf 
Author: Nofil.Khan (https://sketchfab.com/Nofil.Khan)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/flat-bird-icon-origami-06c202236ace4952bd150b5803311530
Title: Flat Bird icon Origami
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/bird/scene.gltf')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={0.008}>
          <group name="d32e5a20492341f98ef10badeb6fd294fbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="MainController" position={[0, -16.093, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={[100, 58.084, 100]}>
                  <group name="Armature" position={[0.058, -0.149, -0.015]} rotation={[1.248, -1.206, 0.838]} scale={[1.034, 1.614, 1.135]}>
                    <group name="Object_11">
                      <primitive object={nodes._rootJoint} />
                      <group name="Object_13" position={[0, -16.093, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                      <skinnedMesh name="Object_14" geometry={nodes.Object_14.geometry} material={materials.M_Wings} skeleton={nodes.Object_14.skeleton} />
                    </group>
                  </group>
                  <group name="Empty" position={[0.066, -0.075, 0.04]} rotation={[-0.562, 0.148, -0.51]} scale={[0.389, 0.48, 0.403]}>
                    <group name="Armature001" position={[-0.044, 0.114, 0.038]} rotation={[-1.684, 1.175, 2.175]} scale={-3.02}>
                      <group name="Object_28">
                        <primitive object={nodes._rootJoint_2} />
                        <group name="Object_30" position={[3.461, -13.291, 10.139]} rotation={[-1.372, 0.038, -2.91]} scale={[-100, 100, 100]} />
                        <skinnedMesh name="Object_31" geometry={nodes.Object_31.geometry} material={materials.M_Wings} skeleton={nodes.Object_31.skeleton} />
                      </group>
                    </group>
                  </group>
                  <group name="Armature002" position={[0.689, -0.198, -0.165]} rotation={[-0.547, -0.581, -0.091]} scale={[1.017, 1.603, 1.166]}>
                    <group name="Object_44">
                      <primitive object={nodes._rootJoint_1} />
                      <group name="Object_46" position={[0, -16.093, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                      <skinnedMesh name="Object_47" geometry={nodes.Object_47.geometry} material={materials.M_Body} skeleton={nodes.Object_47.skeleton} />
                    </group>
                  </group>
                </group>
                <group name="Camera" position={[-50.683, 40.004, 883.84]} rotation={[0, 1.529, -0.091]} scale={100}>
                  <group name="Object_5" />
                </group>
                <group name="BodytobeBaked" position={[0, -16.093, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                <group name="WingTarget" position={[0, -16.093, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                <group name="WingTarget001" position={[3.461, -13.291, 10.139]} rotation={[1.769, -0.038, 2.91]} scale={-100} />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')