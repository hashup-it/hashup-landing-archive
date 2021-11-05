import React, { ReactElement, Suspense } from 'react'
import { Canvas, extend } from "@react-three/fiber"
import Model from "./Three/ModelBlack"
import { OrbitControls } from "@react-three/drei"

extend({ OrbitControls })

export enum CameraDistance {
    mainLanding = -23,
    cartridgesListing = -20
}

export const CartridgeScene = (
    {
        cameraDistance,
        cartridgeModel
    }: {
        cameraDistance: CameraDistance,
        cartridgeModel?: ReactElement
    }
) => <Canvas
    camera={{ position: [cameraDistance, 0, 0], fov: 40 }}
    gl={{
        antialias: true,
        powerPreference: 'high-performance'
    }}
>
    <Suspense fallback={null}>
        <directionalLight
            castShadow
            position={[-40, 0, -80]}
            intensity={.4}
            shadowMapWidth={1024}
            shadowMapHeight={1024}
            shadowCameraFar={50}
            shadowCameraLeft={-10}
            shadowCameraRight={10}
            shadowCameraTop={10}
            shadowCameraBottom={-10}
        />
        <pointLight position={[0, 1000, 4000]} intensity={1} />
        <pointLight position={[1000, -20000, 5000]} intensity={.5} />
        <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={-.5}
        />
        {cartridgeModel ?? <Model rotation={[0, -2, Math.PI / 128]} />}
    </Suspense>
</Canvas>
