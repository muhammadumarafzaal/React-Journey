function Hello(){
   const getName = (yourname)=>{
    return yourname;
   }
   //now events seeing
   function handleClick(){
    alert("BUtton Clicked!");
   }
   const handleInput=(event)=>{
    console.log("Value:",event.target.value);

   }
   const handleMouseOver=()=>{
        console.log("Mouse Over");
    }
    const handleDoubleClick=()=>{
        console.log("Double Clicked");
    }
   const name="Umar Afzaal"
   const father="Afzaal Ahmed"
    return(
       <>
       <h1>Hello {getName(name)}</h1>
       <h2>Father {getName(father)}</h2>
        //multiple events 
       <p onMouseOver={handleMouseOver} onDoubleClick={handleDoubleClick}>how are you dear</p>


       <button onClick={handleClick}>Click Me</button>
       <button onClick={()=>{alert("Hello how are you")}}>Say Hellor</button>
       <br />
       <input type="text" onChange={handleInput} placeholder="Type Someting"/>
       </>
    )
}
export default Hello;