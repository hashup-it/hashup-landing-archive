import React, { Suspense } from 'react'
import { Canvas, extend } from '@react-three/fiber'
import Model from './Three/Scene'
import { OrbitControls } from '@react-three/drei'

extend({ OrbitControls })

export const CameraDistances = {
    mainLanding: -6,
    cartridgesListing: -3.75
}

export const CartridgeScene = (
    {
        cameraDistance
    }: {
        cameraDistance: number
    }
) => {
    return (
        <Canvas
            camera={{ position: [cameraDistance, 0, 0], fov: 40 }}
            gl={{
                antialias: true,
                powerPreference: 'high-performance',
                precision: 'highp'
            }}
        >
            <Suspense fallback={null}>
                <ambientLight intensity={.4} />
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
                <pointLight position={[-200, 10, -200]} intensity={15} />
                <pointLight position={[400, 10, 400]} intensity={.5} />
                <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    autoRotate
                    autoRotateSpeed={-2}
                />
                <Model />
            </Suspense>
        </Canvas>
    )
}
