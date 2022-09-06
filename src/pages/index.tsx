import React from "react"
import Header from "../components/Header";
import { Lolly } from '../components/Lolly';

const Home = () => {

    return (
        <div className="container">
            <Header />
            <div className="listLollies">
                <div><Lolly fillLollyTop="#d52358" fillLollyMiddle="#e95946" fillLollyBottom="#deaa43" /></div>
                <div><Lolly fillLollyTop="red" fillLollyMiddle="green" fillLollyBottom="blue" /></div>
            </div>
        </div>
    );
}

export default Home;