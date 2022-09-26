import React, { useState, useRef } from 'react'
import Header from '../components/Header';
import Lolly from '../components/Lolly';
import {gql,useQuery} from '@apollo/client'

const GETDATA = gql`
    {
        hello
    }
`

export default function CreateNew() {
    const [color1, setColor1] = useState("#d52358");
    const [color2, setColor2] = useState("#e95946");
    const [color3, setColor3] = useState("#deaa43");
    const recipientNameRef = useRef();
    const messageRef = useRef();
    const senderRef = useRef();

    const { data } = useQuery(GETDATA)

    const submitLollyForm = () => {
        console.log("Click");
        console.log("Color1", color1)
        console.log("sender", senderRef.current.value);
    }

    return (
        <div className="container">
           {data && data.hello && <div>{data.hello}</div>}
          <Header />
    
            <div className="lollyFormDiv">
                <div>
                    <Lolly fillLollyTop={color1} fillLollyMiddle={color2} fillLollyBottom={color3} />
                </div>
                <div className="lollyFlavourDiv">
                    <label htmlFor="flavourTop" className="colorPickerLabel">
                        <input type="color"  value={color1} className="colorPicker" name="flavourTop" id="flavourTop"
                            onChange={(e)=>{
                                setColor1(e.target.value)
                            }}
                        
                        />
                    </label>
                    
                    <label htmlFor="flavourTop" className="colorPickerLabel">
                        <input type="color"  value={color2} className="colorPicker" name="flavourTop" id="flavourTop"
                            onChange={(e)=>{
                                setColor2(e.target.value)
                            }}
                        />
                    </label>
                    <label htmlFor="flavourTop" className="colorPickerLabel">
                        <input type="color"  value={color3} className="colorPicker" name="flavourTop" id="flavourTop"
                            onChange={(e)=>{
                                setColor3(e.target.value)
                            }}
                        />
                    </label>
                </div>
                <div>
                    <div className="lollyFrom">
                        <label htmlFor="recipientName">
                            To                        
                        </label>
                        <input type="text" name="recipientName" id="recipientName" ref={recipientNameRef}/>
                        <label htmlFor="recipientName">
                            Message                       
                        </label>
                        <textarea rows="15" columns="30" ref={messageRef} />
                        <label htmlFor="recipientName">
                            From                        
                        </label>
                        <input type="text" name="senderName" id="senderName" ref={senderRef}/>
                    </div>
                    <input type="button" value="Create" onClick={submitLollyForm} />
                </div>
            </div>
        </div>
      );
    }