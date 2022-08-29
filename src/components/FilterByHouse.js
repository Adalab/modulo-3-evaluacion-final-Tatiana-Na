function FilterByHouse(props) {
console.log(props);
    const handleChangeHouse = (event) => {
        console.log(event.target.value);
        props.handleFilterByHouse(event.target.value)
        
        
        }    

 return (
<>
            <label
                className="form_house_text"
                htmlFor="house_text">Selecciona la casa:</label>
            <select
                className="form_house"
                name="house"
                id="house"
                value={props.filterByHouse} 
                onChange = {handleChangeHouse}>  
                <option value="Gryffindor" selected>Gryffindor</option>
                <option value="hufflepuff">Hufflepuff</option>
                <option value="ravenclaw">Ravenclaw</option>
            </select>

        </>

 );   
}

export default FilterByHouse;