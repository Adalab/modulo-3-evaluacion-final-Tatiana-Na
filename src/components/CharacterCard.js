function CharacterCard(props) {
return (
    <li className="card">
            <a href="#">
                <img className="img_card" src={props.character.image} 
                alt={`Foto de ${props.character.name}`}
                title={`Foto de ${props.character.name}`}></img>
<h3 className="name_card">{props.character.name}</h3>
<p className="species_card">{props.character.species}</p>

            </a>


        </li>
)
}

export default CharacterCard;