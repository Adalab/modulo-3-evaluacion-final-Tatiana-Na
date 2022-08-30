function FilterByName(props) {
 
const handleChange = (event) => {
props.handleFilterByName(event.target.value);
}

function Form(event) {
  event.preventDefault();
}


return   (
<>

<form>
  <label htmlFor="search_character" className="text-fill">Busca por personajes</label>
          <input
            className="search_by_name"
            type="text"
            name="search"
            id="search"
            value={props.filterByName}
            onChange = {handleChange}
            onClick={Form}
            
          />
           </form>
</>
);  
}

export default FilterByName;