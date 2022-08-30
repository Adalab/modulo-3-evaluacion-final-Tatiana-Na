function FilterByGender(props) {

const handleChange = (event) => {
    
return props.handleFilterByGender(event.target.value);
}    

console.log(props);
return(
<>
            <label
                className="form_gender"
                htmlFor="gender">Genero:</label>
            <select
                className="form_gener_input"
                name="gender"
                id="gender"
                value={props.filterByGender}
                onChange={handleChange}
                >  
                <option value="all">Todos</option>*/
                <option value="female">Mujer</option>
                <option value="male">Hombre</option>
            </select>
        </>

);
}

export default FilterByGender;