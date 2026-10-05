//import styled-components to style this child component
import styled from "styled-components";
//import the brewery interface
import type { Brewery } from "../interfaces/Brewery";

//styled container that holds all the brewery cards
const AllBreweriesDiv = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  background-color: saddlebrown;
`;

//styled box for a single brewery card
const SingleBreweryDiv = styled.div`
  width: 250px;
  margin: 10px;
  padding: 10px;
  border: 2px solid black;
  border-radius: 10px;
  background-color: lightblue;
  text-align: center;
`;

//child componnt which receives the brewery data from App
export default function Breweries(props: { data: Brewery[] }) {

    return (
        <AllBreweriesDiv>

            {props.data.map((brewery: Brewery) => (
                <SingleBreweryDiv key={brewery.id}>
                    <h2>{brewery.name}</h2>
                    <p>Type: {brewery.brewery_type}</p>
                    <p>City: {brewery.city}</p>
                    <p>Country: {brewery.country}</p>

                </SingleBreweryDiv>
            ))}
        </AllBreweriesDiv>
    );
}