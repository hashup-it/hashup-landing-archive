/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/assets/models/black/cartridge czarny.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[-0.41, 1.64, -0.03]} rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.cartridge_1.geometry} material={materials['cartridge mat']} />
        <mesh geometry={nodes.cartridge_2.geometry} material={materials['cartridge szklo']} />
      </group>
    </group>
  )
}

useGLTF.preload('/assets/models/black/cartridge czarny.gltf')