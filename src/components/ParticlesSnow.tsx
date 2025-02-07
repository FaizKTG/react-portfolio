import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
    type Container,
    type ISourceOptions
} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";


function SnowParticles() {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);


    const particlesLoaded = async (container?: Container): Promise<void> => {
        console.log(container);
    };


    const options: ISourceOptions = useMemo(
        () => ({
            fullScreen: { enable: false },
            background: {
                color: {
                    value: "transparent",
                }
            },
            fpsLimit: 120,
            particles: {
                number: {
                    value: 500,
                    density: {
                        enable: true,
                    },
                },
                color: {
                    value: "#FFFFFF",
                },
                shape: {
                    type: "circle",
                },
                opacity: {
                    value: {
                        min: 0.1,
                        max: 1,
                    },
                    animation: {
                        enable: true,
                        speed: 1,
                        sync: false,
                    },
                },
                size: {
                    value: {
                        min: 1,
                        max: 3,
                    },
                },
                move: {
                    enable: true,
                    speed: {
                        min: 0.1,
                        max: 1,
                    },
                },
            },
            interactivity: {
                events: {
                    onHover: {
                        enable: true,
                        mode: "bubble",
                    },
                    onClick: {
                        enable: true,
                        mode: "repulse",
                    },
                },
                modes: {
                    grab: {
                        distance: 400,
                        links: {
                            opacity: 1,
                        },
                    },
                    bubble: {
                        distance: 250,
                        size: 0,
                        duration: 2,
                        opacity: 0,
                    },
                    repulse: {
                        distance: 400,
                        duration: 0.4,
                    },
                    push: {
                        quantity: 4,
                    },
                    remove: {
                        quantity: 2,
                    },
                },
            },
            detectRetina: true,
        }),
        [],
    );   

    if (init) {
        return (
            <Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={options}
            />
        );
    }
    return <></>;
};

export default SnowParticles