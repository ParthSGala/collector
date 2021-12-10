import AnimalEditorInline from "./animal-inline-editor";
import animalService, {createAnimalsForUsers} from "./animal-service"

const USERS_URL = "http://localhost:8080/api/animal"
const { useState, useEffect } = React;
const {Link, useParams, useHistory} = window.ReactRouterDOM;

const AnimalList = () => {
    const [animals, setAnimals] = useState([])
    const [newAnimal, setNewAnimal] = useState({})
    const {userId} = useParams()
    useEffect(() => {
        findAnimalsForUser(userId)
    }, [])
    const createAnimalsForUser = (animal) =>
        animalService.createAnimalsForUser(userId, animal)
            .then(animal => {
                setNewAnimal({name:''})
                setAnimals(animals => ([...animals, animal]))
            })
    const updateAnimal = (id, newAnimal) =>
        animalService.updateAnimal(id, newAnimal)
            .then(animal => setAnimals(animals => (animals.map(animal=> animal.id === id ? newAnimal : animal))))
    const findAnimalsForUser = (userId) =>
        animalService.findAnimalsForUser(userId)
            .then(animals => {
                // debugger;
                setAnimals(animals)
            })
    const deleteAnimal = (id) =>
        animalService.deleteAnimal(id)
            .then(animals => setAnimals(animals => animals.filter(animal=> animal.id !== id)))
    return(
        <div>
            <h2>
                <Link onClick={() => history.back()}>
                    <i className="fas fa-arrow-left margin-right-10px"></i>
                </Link>
                Animals
            </h2>
            <ul className="list-group">
                <li className="list-group-item">
                    <div className="row">
                        <div className="col">
                            {/*<input placeholder="Animal Name"*/}
                            {/*       title="Please enter a name for the animal"*/}
                            {/*       className="form-control"*/}
                            {/*       value={newAnimal.name}*/}
                            {/*       onChange={(e) => setNewAnimal(newAnimal => ({...newAnimal, name: e.target.value}))}/>*/}
                        </div>
                        <div className="col-2">
                            <i className="fas float-right fa-plus fa-2x" onClick={() => createAnimalsForUser(newAnimal)}></i>
                        </div>
                    </div>
                </li>
                {
                    animals.map(animal =>
                        <li key={animal.id} className="list-group-item">
                            <Link to={`/animal/${animal.id}`}>
                            {animal.name}
                            </Link>

                            {/*<AnimalEditorInline key={animal._id}*/}
                            {/*                     updateAnimal={updateAnimal}*/}
                            {/*                     deleteAnimal={deleteAnimal}*/}
                            {/*                     animal={animal}/>*/}
                        </li>)
                }
            </ul>
        </div>
    )
}

export default AnimalList;