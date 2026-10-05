//import the child component that displays the data
import Breweries from "./components/Breweries";
//import styled-components for styling
import styled from "styled-components";
import { useEffect, useState } from "react";
//import the Brewery interface
import type { Brewery } from "./interfaces/Brewery";

//styled outer container for the whole page
const ParentDiv = styled.div`
  width: 80vw;
  margin: auto;
  border: 5px solid lightblue;
`;

export default function App() {
  //useState Hook to store the data
  const [data, setData] = useState<Brewery[]>([]);

  //useEffect Hook to fetch the data
  useEffect(() => {
    async function fetchData(): Promise<void> {
      const rawData = await fetch("https://api.openbrewerydb.org/v1/breweries");
      const results: Brewery[] = await rawData.json();
      setData(results);
    }

    //call the function then log success or any error
    fetchData()
        .then(() => console.log("Data fetched successfully"))
        .catch((e: Error) => console.log("There was the error: " + e));
  }, []); //empty array so only run once when component is first loaded

  return (
      <ParentDiv>
        <Breweries data={data} />
      </ParentDiv>
  );
}