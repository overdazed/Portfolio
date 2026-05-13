// rafce
import React, {Suspense} from 'react'
import {Canvas, ReactThreeFiber} from "@react-three/fiber";
import {PerspectiveCamera} from "@react-three/drei";
import HackerRoom from "../components/HackerRoom.jsx";
import CanvasLoader from "../components/CanvasLoader.jsx";
// import {Leva, useControls} from "leva";
import {useMediaQuery} from "react-responsive";
import {calculateSizes} from "../constants/index.js";
import Target from "../components/Target.jsx";
import ReactLogo from "../components/ReactLogo.jsx";
import DNA from "../components/DNA.jsx";
import Cube from "../components/Cube.jsx";
import Rings from "../components/Rings.jsx";
import HeroCamera from "../components/HeroCamera.jsx";
import Button from "../components/Button.jsx";

const Hero = () => {
    // const controls = useControls('HackerRoom',
    //     {
    //     positionX: {
    //         value: 2.5,
    //         min: -10,
    //         max: 10
    //     },
    //     positionY: {
    //         value: 2.5,
    //         min: -10,
    //         max: 10
    //     },
    //     positionZ: {
    //         value: 2.5,
    //         min: -10,
    //         max: 10
    //     },
    //     rotationX: {
    //         value: 2.5,
    //         min: -10,
    //         max: 10
    //     },
    //     rotationY: {
    //         value: 2.5,
    //         min: -10,
    //         max: 10
    //     },
    //     rotationZ: {
    //         value: 2.5,
    //         min: -10,
    //         max: 10
    //     },
    //     scale: {
    //         value: 2.5,
    //         min: -10,
    //         max: 10
    //     },
    // })
    // change size on mobile
    // We are using a useMediaQuery hook coming from react-responsive library
    // that allows us to create a couple of these checks, that make it easier for us to make our 3D models responsive on all screen sizes
    const isSmall = useMediaQuery({ maxWidth: 440 });
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

    // We do that through a smartly created, manually calculated function,
    // that returns an object where we changing the scales and the positions and
    // rotations of different elements, depending on these media queries
    const sizes = calculateSizes(isSmall, isMobile, isTablet);

    // regular HTML
    return (
        // take the full height of the currently visible screen
        <section className="min-h-screen w-full flex flex-col relative">
            {/* to counteract the height of the nav bar mt */}
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
                <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
                    {/*Hi, I am Svetlana <span className="waving-hand">👋</span>*/}
                    Hi, I'm Svetlana <span className="waving-hand">👋</span>
                </p>
                <p className="hero_tag text-gray_gradient">
                    {/*Building Products & Brands*/}
                    I turn curiosity into code.
                </p>
            </div>
            <div className="w-full h-full absolute inset-0">
                {/*<Leva />*/}
                {/* HERE IS WHERE THE MAGIC HAPPENS */}
                <Canvas className="w-full h-full">
                    <ambientLight intensity={1.2} />
                    <directionalLight position={[10, 10, 10]} intensity={0.8} />
                    <pointLight position={[5, 5, 5]} intensity={1.2} distance={25} />

                    <Suspense fallback={<CanvasLoader />}>
                    {/*    we position a camera    */}
                    <PerspectiveCamera makeDefault position={[0, 0, 30]}/>

                        {/* When you want to make the main graphic bigger, look to HeroCamera.jsx */}
                    <HeroCamera isMobile={isMobile}>
                        {/*    add model    */}
                        {/* render the model */}
                        <HackerRoom
                            // played with position, scale and rotation
                            // scale={4}
                            // position={[0, 0, 0]}
                            // rotation={[0.2, 6, 0]}
                            // position={[-0.38, -4.5, 0.7]}
                            position={sizes.deskPosition}
                            // rotation={[0, -Math.PI, 0]}
                            //scale={[4.8, 4.8, 4.8]}
                            // scale={isMobile ? 3.5 : 4.2}
                            // scale={isMobile ? 3.5 : 4.2}
                            scale={sizes.deskScale}
                            // rotation={[0.2, -0.4, 0]}
                            rotation={[0.2, -Math.PI / 10, 0]}
                        />
                    </HeroCamera>
                        {/* we render a group with floating elements */}
                        <group>
                            {/*<DNA position={sizes.dnaPosition} scale={1} rotation={[0, 0, 70]}/>*/}
                            <DNA position={sizes.dnaPosition} scale={sizes.dnaScale} rotation={[0, 0, 170]}/>
                            <directionalLight position={[10, 10, 10]} intensity={0.2}/>
                            {/*<Target position={sizes.targetPosition}/>*/}
                            {/*<ReactLogo position={sizes.reactLogoPosition} />*/}
                            {/*<Cube position={sizes.cubePosition}/>*/}
                            {/*<Rings position={sizes.ringPosition}/>*/}

                        </group>
                        {/* add lights */}
                        <ambientLight intensity={1}/>
                        <directionalLight position={[10, 10, 10]} intensity={0.5}/>
                    </Suspense>
                </Canvas>
            </div>
            <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
                <a href="mailto:sv.pant@proton.me" className="w-fit">
                    <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
                </a>
            </div>
        </section>
    )
}
export default Hero
