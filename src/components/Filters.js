import FilterByName from "./FilterByName";
import FilterByHouse from "./FilterByHouse";


function Filters(props) {
return (
<>
    <FilterByName filterByName={props.filterByName}
    handleFilterByName={props.handleFilterByName}></FilterByName>
   <FilterByHouse></FilterByHouse>
   </>
)

}
export default Filters;