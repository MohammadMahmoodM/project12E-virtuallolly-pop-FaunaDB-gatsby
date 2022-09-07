import React from 'react'
import Header from '../components/Header';
import { Lolly } from '../components/Lolly';

export default function createNew() {
    return (
        <div className="container">
            <Header />
            <div className="lollyFormDiv">
                <div>
                    <Lolly fillLollyTop="#d52358" fillLollyMiddle="#e95946" fillLollyBottom="#deaa43"></Lolly>
                </div>
                <div className="lollyFlavourDiv">
                    <label htmlFor='flavourTop' className="colorPickerLabel">
                        <input type="color" value="#d52358" className='colorPicker' name="flavourTop" id="flavourTop" />
                    </label>
                    <label htmlFor='flavourMiddle' className="colorPickerLabel">
                        <input type="color" value="#e95946" className='colorPicker' name="flavourMiddle" id="flavourMiddle" />
                    </label>
                    <label htmlFor='flavourBottom' className="colorPickerLabel">
                        <input type="color" value="#deaa43" className='colorPicker' name="flavourBottom" id="flavourBottom" />
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
                </div>
            </div>
        </div>
    )
}
