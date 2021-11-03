/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: cootec (https://sketchfab.com/cootec)
license: COPYRIGHT TO cootec
source: https://sketchfab.com/3d-models/zoty-8a46be4c50a643859c14b77c19ad8076
title: złoty
*/

import React, { useRef } from "react"
import { useGLTF } from "@react-three/drei"

export default function Model({ ...props }) {
    const group = useRef()
    const { nodes, materials } = useGLTF("/assets/models/gold/scene.gltf")
    return (
        <group ref={group} {...props} dispose={null}>
            <group rotation={[-Math.PI / 2, -Math.PI / 9, 0]}>
                <group rotation={[Math.PI / 2, Math.PI / 3, -Math.PI / 100]} scale={0.01}>
                    <group position={[-41.46, 163.65, -2.86]} scale={[100, 100, 100]}>
                        <mesh
                            geometry={nodes.cartridge001__0.geometry}
                            material={materials["Scene_-_Root"]}
                        />
                    </group>
                </group>
            </group>
        </group>
    )
}

useGLTF.preload("/assets/models/gold/scene.gltf")
