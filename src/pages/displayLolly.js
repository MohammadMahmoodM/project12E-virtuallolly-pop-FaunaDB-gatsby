import React from "react";
import Lolly from '../components/Lolly';
import Header from '../components/Header';
import { gql, useQuery } from "@apollo/client";
import { useQueryParam } from "gatsby-query-params";

const GET_LOLLY = gql`  
    query getData($lollyPath: String!){
        getLolly(lollyPath: $lollyPath) {
            recipientName
            message
            senderName
            flavourTop
            flavourMiddle
            flavourBottom
            lollyPath
        }
    }
`

export default function displayLolly({location}) {
    console.log("component started -- ",location);
    const id = useQueryParam("id","123");
    
    console.log("id = ",id);
    const {loading, error, data} = useQuery(GET_LOLLY, {
        variables: {lollyPath: id}
    })
    console.log("data = ",data);

  return (

    <div className="container">
      <Header/>
      {loading && <p>Loading Client Side Querry...</p>}
      {error && <p>Error: ${error.message}</p>}
      {data && data.getLolly && 
      <div className="newLollyForm">
        <div>
            <Lolly fillLollyTop={data.getLolly.flavourTop} fillLollyMiddle={data.getLolly.flavourMiddle} fillLollyBottom={data.getLolly.flavourBottom} />
        </div>
        <div>
            <div className="details" style={{textAlign:"left", border: "2px solid red", marginLeft:"30px"}}>
                <p>Your lolly is freezing. Share it with this link:</p>
                <pre>{location.origin}/displayLolly?id={data.getLolly.lollyPath}</pre>
                <div style={{height: "200px"}} className="displayInformation">
                    <div id="recipient" className="recipient">
                       To : {data.getLolly.recipientName}
                    </div>
                    <div id="message" className="message">
                       Message : {data.getLolly.message}
                    </div>
                    <div id="from" className="from">
                       From : {data.getLolly.senderName}
                    </div>
                </div>
            </div>
        </div>
      </div>}
    </div>
    
  )
}