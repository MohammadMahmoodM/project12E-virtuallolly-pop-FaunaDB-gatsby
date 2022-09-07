import React, { useState } from 'react'
import Header from '../components/Header';
import { Lolly } from '../components/Lolly';

export default function CreateNew() {
    const [colour1, setColour1] = useState("#d52358");
    const [colour2, setColour2] = useState("#e95946");
    const [colour3, setColour3] = useState("#deaa43");
    return (
        <div className="container">
            <Header />
            <div className="lollyFormDiv">
                <div>
                    <Lolly fillLollyTop={colour1} fillLollyMiddle={colour2} fillLollyBottom={colour3}></Lolly>
                </div>
                <div className="lollyFlavourDiv">
                    <label htmlFor='flavourTop' className="colorPickerLabel">
                        <input type="color" value={colour1} className='colorPicker' name="flavourTop" id="flavourTop" 
                        onChange={(e) => {
                            setColour1(e.target.value)
                        }}
                        />
                    </label>
                    <label htmlFor='flavourMiddle' className="colorPickerLabel">
                        <input type="color" value={colour2} className='colorPicker' name="flavourMiddle" id="flavourMiddle"
                        onChange={(e) => {
                            setColour2(e.target.value)
                        }}
                         />
                    </label>
                    <label htmlFor='flavourBottom' className="colorPickerLabel">
                        <input type="color" value={colour3} className='colorPicker' name="flavourBottom" id="flavourBottom" 
                        onChange={(e) => {
                            setColour3(e.target.value)
                        }}
                        />
                    </label>
                </div>
                <div>
                    <div className="lollyForm">
                        <label htmlFor='recipientName'>
                            To
                        </label>
                        <input  type="text" name='recipientName' id='recipientName'/>
                        <label htmlFor='recipientName'>
                            Message
                        </label>
                        <textarea rows="15" columns="30"/>
                        <label htmlFor='recipientName'>
                            From
                        </label>
                        <input  type="text" name='recipientName' id='recipientName'/>
                    </div>
                    <input type='button' value='create'/>
                </div>
            </div>
        </div>
    )
}
