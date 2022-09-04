import React, { useState, useContext } from "react";
import { Context } from '../Context.jsx';
import { TechnologyContainer } from "./style";
import ImageLaunchVehicleLandscape from '../../images/technology/image-launch-vehicle-landscape.jpg';
import ImageSpaceportLandscape from '../../images/technology/image-spaceport-landscape.jpg';
import ImageSpaceCapsuleLandscape from '../../images/technology/image-space-capsule-landscape.jpg';
import ImageLaunchVehiclePortrait from '../../images/technology/image-launch-vehicle-portrait.jpg';
import ImageSpaceportPortrait from '../../images/technology/image-spaceport-portrait.jpg';
import ImageSpaceCapsulePortrait from '../../images/technology/image-space-capsule-portrait.jpg';

const Technology = () => {

    const [techState, setTechState] = useState(0);
    const [modal, setModal, subtitleEffect, setSubtitleEffect] = useContext(Context);
    setSubtitleEffect(3)

    const technologyTypes = [
        {
            technology: "launch vehicle",
            imageLandscape: ImageLaunchVehicleLandscape,
            imagePortrait: ImageLaunchVehiclePortrait,
            description:
                `A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a
                payload from Earth's surface to space, usually to Earth orbit or beyond. Our
                WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall,
                it's quite an awe-inspiring sight on the launch pad!`
        },
        {
            technology: "spaceport",
            imageLandscape: ImageSpaceportLandscape,
            imagePortrait: ImageSpaceportPortrait,
            description:
                `A spaceport or cosmodrome is a site for launching (or receiving) spacecraft,
                by analogy to the seaport for ships or airport for aircraft. Based in the
                famous Cape Canaveral, our spaceport is ideally situated to take advantage
                of the Earth’s rotation for launch.`
        },
        {
            technology: "space capsule",
            imageLandscape: ImageSpaceCapsuleLandscape,
            imagePortrait: ImageSpaceCapsulePortrait,
            description:
                `A space capsule is an often-crewed spacecraft that uses a blunt-body reentry
                capsule to reenter the Earth's atmosphere without wings. Our capsule is where
                you'll spend your time during the flight. It includes a space gym, cinema,
                and plenty of other activities to keep you entertained.`
        }
    ]

    const circle = (value:number) => {

        return (

            <div onClick={() => { setTechState(value) }}
                style={techState === value ? {
                    color: "#0B0D17",
                    backgroundColor: "white"
                } : {
                    color: "white",
                    border: "2px solid #FFFFFF25"
                }}
            >{value + 1}</div>

        )

    }

    return (

        <TechnologyContainer className='background'>

            <h2><p>03</p>space launch 101</h2>

            <section>

                <img src={technologyTypes[techState].imageLandscape} className="image-landscape" alt="tech"></img>
                <img src={technologyTypes[techState].imagePortrait} className="image-portrait" alt="tech"></img>

                <div className="container-circles">

                    {circle(0)}
                    {circle(1)}
                    {circle(2)}

                </div>

                <article>

                    <h3>the terminology_</h3>
                    <h1>{technologyTypes[techState].technology}</h1>
                    <p>{technologyTypes[techState].description}</p>

                </article>

            </section>

        </TechnologyContainer>

    )

}

export default Technology;