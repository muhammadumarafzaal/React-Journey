import useToggle from "./hooks/useToggle";
function ToggleTest() {
    const [isOn, toggleIsOn] = useToggle(false); 
    return (
        <div>
            <button onClick={toggleIsOn}> Toggle </button>
            {isOn ? <p>ON</p> : <p>OFF</p>}
        </div>

    )
}
export default ToggleTest;