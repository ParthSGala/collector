import animalService from "./animal-service"

const {useState, useEffect} = React;
const {useParams, useHistory, Link} = window.ReactRouterDOM;

const AnimalFormEditor = () => {
    const [animal, setAnimal] = useState({})
    const {userId, animalId} = useParams()
    useEffect(() => {
        if(userId !== 'new') {
            findAnimalById(animalId)
        }
    }, []);

    const {id} = useParams()
    const history = useHistory()

    const createAnimalForUser = (userId, animal) => {
        animalService.createAnimalForUser(userId, animal)
            .then(animal => history.goBack())
    }
    const findAnimalById = (id) => {
        animalService.findAnimalById(id)
            .then(animal => setAnimal(animal))
    }
    const updateAnimal = (id, newAnimal) => {
        animalService.updateAnimal(id, newAnimal)
            .then(() => history.goBack())
    }
    const deleteAnimal = (id) => {
        animalService.deleteAnimal(id)
            .then(() => history.goBack())
    }
    
    return (
        <div>
            <h2>
                Animal Editor
            </h2>
            <label>Id</label>
            <input
                className="form-control margin-bottom-10px"
                readOnly={true}
                value={animal.id}/>
            <label>Animal Name</label>
            <input
                className="form-control margin-bottom-10px"
                onChange={(e) => setAnimal(animal=> ({...animal, name: e.target.value}))}
                value={animal.name}/>
            <label>Weight</label>
            <input
                className="form-control margin-bottom-10px"
                onChange={(e) => setAnimal(animal=> ({...animal, weight: e.target.value}))}
                value={animal.weight}/>
            <label>Topic</label>
            <label>Price</label>
            <input
                className="form-control margin-bottom-10px"
                onChange={(e) => setAnimal(animal=> ({...animal, price: e.target.value}))}
                value={animal.price}/>
            <label>Type</label>
            <select
                className="form-control margin-bottom-10px"
                onChange={(e) => setAnimal(animal => ({...animal, type: e.target.value}))}
                value={animal.type || "Land"}>
                <option value="Land">Land</option>
                <option value="Sea">Sea</option>
            </select>

            {
                animal && animal.origin &&
                <Link to={`/origin/${animal.origin.id}`}>
                    {animal.origin.origin}
                </Link>
            }

            <button
                onClick={() => {history.goBack()}}
                className="btn btn-warning btn-block margin-right-10px">Cancel</button>
            <button
                onClick={() => {createAnimalForUser(userId, animal)}}
                className="btn btn-primary btn-block margin-right-10px">Create</button>
            <button
                onClick={() => {updateAnimal(animal.id, animal)}}
                className="btn btn-success btn-block margin-right-10px">Save</button>
            <button
                onClick={() => {deleteAnimal(animal.id)}}
                className="btn btn-danger btn-block margin-right-10px">Delete</button>

        </div>
    )
}

export default AnimalFormEditor