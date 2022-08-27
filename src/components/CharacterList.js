import CharacterCard from './CharacterCard';

function CharacterList(props) {
 
const characterElement = props.characters.map((character) => {
    return (
        <CharacterCard character={character}/>
    )
});

return (
    <section>
<ul className="cards">
  {characterElement}
</ul>

    </section>
)


}

export default CharacterList;