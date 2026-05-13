// import React from 'react'
import {useGLTF} from "@react-three/drei";
import {useRef} from "react";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";

const Target = (props) => {
    const targetRef = useRef();
    // specify a scene
    // https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf
    // const { scene } = useGLTF("./models/scene.gltf");

    // online hosted path for some models
    const { scene } = useGLTF("https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf");

    // call hook
    // You can use gsap
    // npm install @gsap/react gsap
    // Animation library, separate from three.js,
    // but combining it together makes a very powerful three.js and animations developer
    useGSAP(() => {
        gsap.to(targetRef.current.position, {
            y: targetRef.current.position.y + 0.5,
            duration: 1.5,
            repeat: -1,
            yoyo: true,
        })
    });

    return (
        <mesh {...props} ref={targetRef} rotation={[0, Math.PI / 5, 0]} scale={1.5}>
            <primitive object={scene} />
        </mesh>
    )
}
export default Target
