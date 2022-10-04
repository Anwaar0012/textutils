import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUperClick =()=>{
        // console.log('upper case button is clicked',text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAllert('Converted to upper case','success')

    }
    const handleLowerClick =()=>{
        // console.log('upper case button is clicked',text);
        let newText=text.toLowerCase();
        setText(newText);
        props.showAllert('Converted to lower case','success')

    }
    const handleClearClick =()=>{
        // console.log('upper case button is clicked',text);
        let newText='';
        setText(newText);
        props.showAllert('Text cleared','success')


    }
    
    const handleOnChange =(event)=>{
        // console.log('onchange');
        setText(event.target.value);

    }
    // Ex.sloved by a
    const handleCopy =()=>{
        // console.log('i am copy');
        var text = document.getElementById('myBox');
        text.select();
        // text.setSelectionRange(0,999);
        navigator.clipboard.writeText(text.value);
        props.showAllert('Text copied','success')


    }
    const handleExtraSpaces =()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAllert('Extra spaces Removed','success')


    }
    
    const [text,setText]=useState('');
    // text="tex2"; // wrong way change state
    // setText="anwaar";
  return (    
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" style={{backgroundColor: props.mode==='dark'?'#13466e':'white' ,color: props.mode==='dark'?'white':'#042743'}} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUperClick}>Convert to Upper case</button>
        <button className="btn btn-primary mx-1" onClick={handleLowerClick}>Convert to Lower Case</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
        
    </div>
    <div className='container my-3' style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} words, and {text.length} characters</p>
        <p>{0.0008*text.split(" ").length} words read in a minute</p>
        <h2>Preview Result</h2>
        <p>{text.length>0?text:"Please enter something on the above text box."}</p>
    </div>
    </>
  )
}
