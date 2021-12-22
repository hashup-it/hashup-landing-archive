import React, { ReactElement, Suspense } from 'react'
import { Canvas, extend, useLoader, useThree } from '@react-three/fiber'
import Model from './Three/ModelGold'
import { OrbitControls } from '@react-three/drei'
import { Bloom, EffectComposer, SSAO } from '@react-three/postprocessing'

// @ts-ignore
import { BlendFunction } from 'postprocessing'

import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader'

const THREE = require('three')

extend({ OrbitControls })

const useEquirectangularHDR = (url: string) => {
    const { gl } = useThree()
    const pmremGenerator = new THREE.PMREMGenerator(gl)
    pmremGenerator.compileEquirectangularShader()

    // @ts-ignore
    const hdrEquirect = useLoader(RGBELoader, url)

    const hdrCubeRenderTarget = pmremGenerator.fromEquirectangular(hdrEquirect)
    hdrEquirect.dispose()
    pmremGenerator.dispose()

    return hdrCubeRenderTarget.texture
}

export enum CameraDistance {
    mainLanding = -28,
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
        <EffectComposer>
            <Bloom
                intensity={1.0}
                luminanceThreshold={0.9}
                luminanceSmoothing={0.7}
            />
            <SSAO
                blendFunction={BlendFunction.MULTIPLY}
                samples={30}
                rings={4}
                distanceThreshold={1.0}
                distanceFalloff={0.0}
                rangeThreshold={0.5}
                rangeFalloff={0.1}
                luminanceInfluence={0.9}
                radius={20}
                scale={0.5}
                bias={0.5}
            />
        </EffectComposer>
        <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={-.5}
        />
        {cartridgeModel ?? <Model rotation={[0, -2, Math.PI / 128]} />}
    </Suspense>
</Canvas>
