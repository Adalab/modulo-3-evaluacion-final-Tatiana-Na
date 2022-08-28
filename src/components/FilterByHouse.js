function FilterByHouse() {

 return (
<>
            <label
                className="form__label display-block"
                for="gender">Selecciona la casa:</label>
            <select
                class="form__input-text"
                name="gender"
                id="gender">
                <option value="all" selected>Gryffindor</option>
                <option value="female">Hufflepuff</option>
                <option value="female">Ravenclaw</option>
            </select>

        </>

 );   
}

export default FilterByHouse;