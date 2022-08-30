function FilterByHouse(props) {

    const handleChangeHouse = (event) => {
    
    return props.handleFilterByHouse(event.target.value);
        
        
        }    

 return (
<form className="form_by_house">
            <label
                className="form_house_text"
                htmlFor="house_text">Selecciona la casa:</label>
            <select
                className="form_house"
                name="house"
                id="house"
                value={props.filterByHouse} 
                onChange = {handleChangeHouse}>  
                <option value="Gryffindor">Gryffindor</option>
                <option value="Ravenclaw">Ravenclaw</option>
                <option value="Hufflepuff">Hufflepuff</option>
                <option value="Slytherin">Slytherin</option>
            </select>

        </form>

 );   
}

export default FilterByHouse;