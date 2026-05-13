import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'


const DNA = (props) => {
    const group = useRef()
    const { nodes, materials, animations } = useGLTF('/models/dna_animation.glb')
    const { actions } = useAnimations(animations, group)

    useEffect(() => {
        if (actions && actions['KeyAction']) {
            actions['KeyAction'].play() // Replace 'YourAnimationName' with the actual name of your animation
            actions['KeyAction'].timeScale = 0.1 // Adjust to a lower value (e.g., 0.5 for half speed)
        }

    }, [actions])

    return (
        // <group ref={group} {...props} dispose={null}>
        <group ref={group} {...props} dispose={null}>
            <group name="Sketchfab_Scene">
                <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
                    <group name="Root">
                        <group name="Cylinder">
                            <mesh
                                name="Cylinder_0"
                                castShadow
                                receiveShadow
                                geometry={nodes.Cylinder_0.geometry}
                                material={materials.material}
                                morphTargetDictionary={nodes.Cylinder_0.morphTargetDictionary}
                                morphTargetInfluences={nodes.Cylinder_0.morphTargetInfluences}
                            />
                        </group>
                    </group>
                </group>
            </group>
        </group>
    )
}

useGLTF.preload('/models/dna_animation.glb')

export default DNA