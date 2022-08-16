import React, { useState, useContext } from "react";
import { Context } from '../Context';
import { CrewContainer } from "./style";
import ImageCommander from '../../images/crew/image-douglas-hurley.png'
import ImageMissionSpecialist from '../../images/crew/image-mark-shuttleworth.png'
import ImagePilot from '../../images/crew/image-victor-glover.png'
import ImageFlightEngineer from '../../images/crew/image-anousheh-ansari.png'

const Crew = () => {

    const [crewState, setCrewState] = useState(0);
    const [modal, setModal, subtitleEffect, setSubtitleEffect] = useContext(Context);
    setSubtitleEffect(2)

    const crewTeam = [
        {
            office: "commander",
            name: "Douglas Hurley",
            image: ImageCommander,
            description:
                `Douglas Gerald Hurley is an American engineer, former Marine Corps pilot 
            and former NASA astronaut. He launched into space for the third time as
            commander of Crew Dragon Demo-2.`
        },
        {
            office: "mission specialist",
            name: "Mark Shuttleworth",
            image: ImageMissionSpecialist,
            description:
                `Mark Richard Shuttleworth is the founder and CEO of Canonical, the company
            behind the Linux-based Ubuntu operating system. Shuttleworth became the first
            South African to travel to space as a space tourist.`
        },
        {
            office: "pilot",
            name: "Victor Glover",
            image: ImagePilot,
            description:
                `Pilot on the first operational flight of the SpaceX Crew Dragon to the
            International Space Station. Glover is a commander in the U.S. Navy where
            he pilots an F/A-18.He was a crew member of Expedition 64, and served as a
            station systems flight engineer.`
        },
        {
            office: "flight engineer",
            name: "Anousheh Ansari",
            image: ImageFlightEngineer,
            description:
                `Anousheh Ansari is an Iranian American engineer and co-founder of Prodea
            Systems.Ansari was the fourth self-funded space tourist, the first self-funded 
            woman to fly to the ISS, and the first Iranian in space.`
        }
    ]

    const circle = (value) => {

        return (

            <div style={crewState === value ? {
                backgroundColor: "#FFFFFF"
            } : {
                backgroundColor: "#FFFFFF17"
            }} onClick={() => {
                setCrewState(value);
            }}></div>

        )

    }

    return (

        <CrewContainer className='background'>

            <h2><p>02</p>meet your crew</h2>

            <figure>

                <img src={crewTeam[crewState].image} alt="crewPerson"></img>

            </figure>


            <article>

                <h2><p>02</p>meet your crew</h2>

                <div className="container-circles">

                    {circle(0)}
                    {circle(1)}
                    {circle(2)}
                    {circle(3)}

                </div>

                <div className="crew-info">

                    <h3>{crewTeam[crewState].office}</h3>

                    <h1>{crewTeam[crewState].name}</h1>

                    <p>{crewTeam[crewState].description}</p>

                </div>

            </article>

        </CrewContainer>

    )

}

export default Crew;