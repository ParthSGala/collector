const {useState, useEffect } = React;
const {Link} = window.ReactRouterDOM;

const AnimalInlineEditor = ({animal, deleteAnimal, updateAnimal}) => {
    const [animalCopy, setAnimalCopy] = useState(animal)
    const [editing, setEditing] = useState(false)
    return(
        <div>
            {
                editing &&
                <div className="row">
                    <div className="col">
                        <input
                            className="form-control"
                            value={animalCopy.name}
                            onChange={(e)=>setAnimalCopy(animalCopy => ({...animalCopy, name: e.target.value}))}/>
                    </div>
                    <div className="col">
                        <input
                            className="form-control"
                            value={animalCopy.weight}
                            onChange={(e)=>setAnimalCopy(animalCopy => ({...animalCopy, weight: e.target.value}))}/>
                    </div>
                    <div className="col">
                        <input
                            className="form-control"
                            value={animalCopy.price}
                            onChange={(e)=>setAnimalCopy(animalCopy => ({...animalCopy, price: e.target.value}))}/>
                    </div>
                    <div className="col">
                        <select
                            className="form-control"
                            value={animalCopy.type}
                            onChange={(e)=>setAnimalCopy(sectionCopy => ({...animalCopy, type: e.target.value}))}>
                            <option>Land</option>
                            <option>Sea</option>
                        </select>
                    </div>

                    <div className="col-1">
                        <Link to={`/animal/${animalCopy.id}/origin`}>
                            Origin
                        </Link>
                    </div>
                </div>
            }
        </div>
    )
}

export default AnimalInlineEditor;