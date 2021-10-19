import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Model from './Three/Suzanne'
import { OrbitControls } from '@react-three/drei'

const FallbackScene = () => {
    return (
        <p>Loading THC</p>
    )
}

export const CartridgeScene = () => {
    return (
        <Canvas
            camera={{ position: [-6, 0, 0], fov: 40 }}
        >
            <Suspense fallback={<FallbackScene/>}>
                <ambientLight intensity={.4}/>
                <directionalLight
                    castShadow
                    position={[-8, 16, -8]}
                    intensity={0}
                    shadowMapWidth={1024}
                    shadowMapHeight={1024}
                    shadowCameraFar={50}
                    shadowCameraLeft={-10}
                    shadowCameraRight={10}
                    shadowCameraTop={10}
                    shadowCameraBottom={-10}
                />
                <pointLight position={[0, 50, 0]} intensity={2}/>
                <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                />
                <Model/>
            </Suspense>
        </Canvas>
    )
}
