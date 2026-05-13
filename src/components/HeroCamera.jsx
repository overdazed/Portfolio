// rafce
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import {easing} from "maath";

const HeroCamera = ({ children, isMobile}) => {

    const groupRef = useRef();

    useFrame((state, delta) => {
        // slowly ease camera position
        // npm install maath
        easing.damp3(state.camera.position, [0, 0, 30], 0.25, delta);

        if(!isMobile) {
            easing.dampE(groupRef.current.rotation, [-state.pointer.y / 10, -state.pointer.x / 5, 0], 0.25, delta);

        }
    })

    return (
        // When you want to make the main graphic bigger
        <group ref={groupRef} scale={isMobile ? 1 : 1.1}>{children}</group>
    )
}
export default HeroCamera
