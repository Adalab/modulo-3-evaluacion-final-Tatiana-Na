import { Link } from "react-router-dom";

function CharacterDetail(props) {

return (
<li className="card">
            <Link to={`/caracter/${props.character.id}`}>
                <img className="img_card" src={props.character.image} 
                alt={`Foto de ${props.character.name}`}
                title={`Foto de ${props.character.name}`}></img>
<h3 className="name_card">{props.character.name}</h3>
<p className="species_card">{props.character.species}</p>
            </Link>

        </li>

)

}
export default CharacterDetail;