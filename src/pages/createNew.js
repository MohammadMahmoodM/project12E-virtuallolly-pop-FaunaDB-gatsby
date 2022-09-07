import React from 'react'
import Header from '../components/Header';
import {Lolly} from '../components/Lolly';

export default function createNew() {
    return (
        <div className="container">
            <Header />
            <div className="lollyFormDiv">
                <div>
                    <Lolly fillLollyTop="#d52358" fillLollyMiddle="#e95946" fillLollyBottom="#deaa43"></Lolly>
                </div>
                <div>
                    <input type="color" value="#d52358" className='colorPicker' name="flavourTop" id="flavourTop"/>
                    <input type="color" value="#e95946" className='colorPicker' name="flavourTop" id="flavourTop"/>
                    <input type="color" value="#deaa43" className='colorPicker' name="flavourTop" id="flavourTop"/>
                </div>
                <div>
                    Form
                </div>
            </div>
        </div>
    )
}
