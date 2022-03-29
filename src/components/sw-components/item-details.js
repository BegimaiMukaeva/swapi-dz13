import React from "react";
import ItemDetails from "../item-details";
import PlanetDetails from "../planet-details";
import {withSwapi} from "../hoc"

const PersonDetails = withSwapi(
    (props) => <ItemDetails {...props}  />,
    (swapi) => ({getData: swapi.getPerson})
    )
const PlanetsDetails = withSwapi(
    (props) => <PlanetDetails {...props}  />,
    (swapi) => ({getData: swapi.getPlanet})
    )
const StarshipDetails = withSwapi(
    (props) => <ItemDetails {...props}  />,
    (swapi) => ({getData: swapi.getStarship})
    )

export {PersonDetails, PlanetsDetails, StarshipDetails};