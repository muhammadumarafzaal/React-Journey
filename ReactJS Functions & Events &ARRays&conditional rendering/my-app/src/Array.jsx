 
function Array(){
    const fruits = ["apple", "banana", "orange", "grape", "kiwi"];
    return(
        <div>
            <h2>Fruits List</h2>
            <ul>
                {
                    fruits.map((fruit, index) => (//mapping through array
                        <li>{index} - {fruit}</li>
                    ))
                }
            </ul>
        </div>
    )
}
export default Array