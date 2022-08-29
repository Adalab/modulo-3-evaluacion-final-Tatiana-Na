import CharacterCard from './CharacterCard';

function CharacterList(props) {
 console.log(props);
const characterElement = props.characters.map((item, index) => {
    return (
        <CharacterCard key={index} character={item}/>
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