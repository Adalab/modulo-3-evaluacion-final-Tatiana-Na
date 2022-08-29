function FilterByHouse(props) {

    const handleChangeHouse = (event) => {
    
    return props.handleFilterByHouse(event.target.value);
        
        
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
                <option value="Hufflepuff">Hufflepuff</option>
                <option value="Slytherin">Slytherin</option>
            </select>

        </>

 );   
}

export default FilterByHouse;