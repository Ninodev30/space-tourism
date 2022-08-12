import React, { useState } from "react";
import { DestinationContainer } from "./style";
import ImageMoon from '../../images/destination/image-moon.png';
import ImageMars from '../../images/destination/image-mars.png';
import ImageEuropa from '../../images/destination/image-europa.png';
import ImageTitan from '../../images/destination/image-titan.png';

const Destination = () => {

    const [showPlanet, setShowPlanet] = useState(0);

    const planets = [
        {
            name: "moon",
            distance: "384,400 km",
            travel: "3 days",
            image: ImageMoon,
            description: 
            `See our planet as you’ve never seen it before. A perfect relaxing 
            trip away to help regain perspective and come back refreshed. While 
            you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.`
        },
        {
            name: "mars",
            distance: "225mil. km",
            travel: "9 months",
            image: ImageMars,
            description:
            `Don’t forget to pack your hiking boots. You’ll need them to tackle 
            Olympus Mons, the tallest planetary mountain in our solar system. 
            It’s two and a half times the size of Everest!`
        },
        {
            name: "europa",
            distance: "628mil. km",
            travel: "3 years",
            image: ImageEuropa,
            description:
            `The smallest of the four Galilean moons orbiting Jupiter, Europa 
            is a winter lover’s dream. With an icy surface, it’s perfect for a 
            bit of ice skating, curling, hockey, or simple relaxation 
            in your snug wintery cabin.`
        },
        {
            name: "titan",
            distance: "1.6 bil. km",
            travel: "7 years",
            image: ImageTitan,
            description:
            `The only moon known to have a dense atmosphere other than Earth, 
            Titan is a home away from home (just a few hundred degrees colder!). 
            As a bonus, you get striking views of the Rings of Saturn.`
        }
    ]

    const titlePlanet = (value) => {

        return (

            <h3 style={showPlanet === value ?
                {
                    fontWeight: '700', paddingBottom: "0.75rem", marginTop: "1rem",
                    borderBottom: "solid white 0.25rem"
                } : { fontWeight: '400' }}
                onClick={() => {
                    setShowPlanet(value);
                }}>{planets[value].name}
            </h3>

        )

    }

    return (

        <DestinationContainer>

            <section>

                <h2><p>01</p>pick your destination</h2>

                <img src={planets[showPlanet].image} alt={"planet"}></img>

            </section>

            <article>

            <div className="titles">

                {titlePlanet(0)}
                {titlePlanet(1)}
                {titlePlanet(2)}
                {titlePlanet(3)}

            </div>

                <h1>{planets[showPlanet].name}</h1>

                <p>{planets[showPlanet].description}</p>

                
            <div className="info-planets">

                <div>

                    <h3>avg. distance</h3>
                    <h2>{planets[showPlanet].distance}</h2>

                </div>

                <div>

                    <h3>est. travel time</h3>
                    <h2>{planets[showPlanet].travel}</h2>

                </div>

            </div>

            </article>

        </DestinationContainer>

    )

}

export default Destination;