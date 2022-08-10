import React, { useState } from "react";
import { TechnologyContainer } from "./style";
import ImageLaunchVehicle from '../../images/technology/image-launch-vehicle-landscape.jpg';
import ImageSpaceport from '../../images/technology/image-spaceport-landscape.jpg';
import ImageSpaceCapsule from '../../images/technology/image-space-capsule-landscape.jpg';

const Technology = () => {

    const [techState, setTechState] = useState(0);

    const technologyTypes = [
        {
            technology: "launch vehicle",
            image: ImageLaunchVehicle,
            description:
                `A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a \
                payload from Earth's surface to space, usually to Earth orbit or beyond. Our \
                WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, \ 
                it's quite an awe-inspiring sight on the launch pad!`
        },
        {
            technology: "spaceport",
            image: ImageSpaceport,
            description:
                `A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, \ 
                by analogy to the seaport for ships or airport for aircraft. Based in the \
                famous Cape Canaveral, our spaceport is ideally situated to take advantage \
                of the Earth’s rotation for launch.`
        },
        {
            technology: "space capsule",
            image: ImageSpaceCapsule,
            description:
                `A space capsule is an often-crewed spacecraft that uses a blunt-body reentry \
                capsule to reenter the Earth's atmosphere without wings. Our capsule is where \
                you'll spend your time during the flight. It includes a space gym, cinema, \
                and plenty of other activities to keep you entertained.`
        }
    ]

    return (

        <TechnologyContainer>

            <section>

                <h2><p>03</p>space launch 101</h2>

                <img src={technologyTypes[techState].image}></img>

            </section>

            <article>

                <h3>the terminology</h3>

                <h1>{technologyTypes[techState].technology}</h1>

                <p>{technologyTypes[techState].description}</p>

            </article>

        </TechnologyContainer>

    )

}

export default Technology;