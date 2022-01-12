// Code Keypad Component Here
function Keypad(){
    function handleClick(){
        console.log('Entering password...')
    }
    
    return <input onChange={handleClick} type="password"></input>
    
}

export default Keypad