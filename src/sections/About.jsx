// rafce
import Globe from "react-globe.gl";
import Button from "../components/Button";
import {useState} from "react";

const About = () => {
    // save it to the state, so we indicate that it has been copied
    // useState
    const [hasCopied, setHasCopied] = useState(false);

    const handleCopy = () => {
    //     copy to clipboard our email
        navigator.clipboard.writeText("sv.pant@proton.me");

        setHasCopied(true);

        // after some amount of time, reset setHasCopied to false, so we could recopy if we want to
        setTimeout(() => {
            setHasCopied(false);
        }, 2000);
    }
    return (
        // c-space to give some space
        // margin y of 20
        <section className="c-space my-20">
            {/* grid on extra large devices: 3 columns & 6 rows */}
            <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
                {/* create one of those columns */}
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid1_4.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain"/>
                        <div>
                            <p className="grid-headtext">Hi, I'm Svetlana.</p>
                            {/* <p className="grid-subtext">With 12 years of experience, I have honed my skills in front-end and back-end development, with a focus on animated 3D websites.</p> */}
                            <p className="grid-subtext">I build full-stack web applications and focus on creating clean, functional websites. I’m currently studying bioinformatics to understand how software can be used to analyze biological data.</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        {/* framer motion, tailwind css, next.js, react.js, three.js typescript */}
                        <img src="/assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />
                        <div>
                            <p className="grid-headtext">Tech Stack</p>
                            {/* <p className="grid-subtext">I specialize in JavaScript/TypeScript with a focus on React and Next.js ecosystems.</p> */}
                            <p className="grid-subtext">I work with JavaScript and TypeScript, focusing on React for building modern web applications. I also have experience with the MERN stack, Python, and Three.js.
I continuously learn and apply new technologies through hands-on projects.</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 xl:row-span-4">
                    <div className="grid-container">
                        <div className="rounded-3xl w-full sm-h-[326px] h-fit flex justify-center items-center">
                        {/*    use a package that uses three.js behind the scenes */}
                        {/*    npm install react-globe.gl */}
                            <Globe
                                height={326}
                                width={326}
                                backgroundColor="rgba(0, 0, 0, 0)"
                                backgroundImageOpacity={0.5}
                                showAtmosphere
                                showGraticules
                                globeImageUrl="//cdn.jsdelivr.net/npm/three-globe/example/img/earth-night.jpg"
                                bumpImageUrl="//cdn.jsdelivr.net/npm/three-globe/example/img/earth-topology.png"
                                labelsData={[{
                                    lat: 51, lng: 10, text: "I'm here!", color: "white", size: 20
                                }]}
                            />
                        </div>
                        <div>
                            <p className="grid-headtext">
                                I work remotely across most time zones, so feel free to contact me.
                            </p>
                            <p className="grid-subtext">
                                I'm based in Germany, with remote work options available.
                            </p>
                            <a href="mailto:sv.pant@proton.me">
                                <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-2 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />
                        <div>
                            <p className="grid-headtext">My Passion for Coding</p>
                            <p className="grid-subtext">
                                I love solving problems and building things through code.
                                Coding isn't just my profession - it is my passion.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-1 xl:row-span-2">
                    <div className="grid-container">
                        <img src="assets/grid4.png" alt="grid-4" className="w-full md:h-[126px]sm:h-[276px] h-fit object-cover sm:object-top" />

                        <div className="space-y-2">
                            <p className="grid-subtext text-center">
                                Contact Me
                            </p>
                            <div className="copy-container" onClick={handleCopy}>
                                {/* If has copied is true, then render the assets */}
                                {/* check mark*/}
                                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
                                    sv.pant@proton.me
                                </p>

                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
export default About
