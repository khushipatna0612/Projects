import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase", "success");
    }
    const handleLoClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase", "success");
    }
    const handleClearClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = '';
        setText(newText)
        props.showAlert("Text cleared", "success");
    }
    const handleReverseTextClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let reversedText = text.split('').reverse().join('');
        setText(reversedText)
        // setText(" You clicked on handleUpClick")
    }
    const handleFindReplaceClick = ()=>{
        let FindText = prompt("Enter the text to find ");
        let ReplaceText = prompt("Enter the text to replace with ");
        let newText = text.replace(new RegExp(FindText, 'g'), ReplaceText);
        setText(newText)
        // setText(" You clicked on handleUpClick")
    }
    const handleCopy = ()=>{
        var text = document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard", "success");
    }   
    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed", "success");
    }
    const handleOnChange = (event)=>{
        // console.log("Onchange");
        setText(event.target.value);
    }
    const [text, setText] = useState('');
   // text = "new text"; //wrong way to change the state
  //  setText = "new text"; //correct way to chage the state        
    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.
                mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}} 
                id="mybox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-warning mx-2" onClick={handleReverseTextClick}>Reverse Text</button>
            <button className="btn btn-primary mx-2" onClick={handleFindReplaceClick}>Find and Replace</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-3"  style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h2>Your text summary</h2>
            {/* <p>{text.split(" ").length} words and {text.length} characters</p> */}
            <p>{text.split(/\s+/).filter((word) => word.length > 0).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(/\s+/).filter((word) => word.length > 0).length} Minutes read</p>
            {/* <p>{0.008 * text.split(" ").length} Minutes read</p> */}
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the text box to preview it here"}</p>
        </div>
        </>    
    )
}
