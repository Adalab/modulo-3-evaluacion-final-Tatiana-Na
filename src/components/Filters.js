import FilterByName from "./FilterByName";
import FilterByHouse from "./FilterByHouse";
import FilterByGender from "./FilterByGender"


function Filters(props) {
return (
<div className="forms">
    <FilterByName filterByName={props.filterByName}
    handleFilterByName={props.handleFilterByName}/>
   <FilterByHouse filterByHouse={props.filterByHouse}
   handleFilterByHouse={props.handleFilterByHouse}/>
   <FilterByGender filterByGender={props.filterByGender}
   handleFilterByGender={props.handleFilterByGender}/>
   </div>
)

}
export default Filters;