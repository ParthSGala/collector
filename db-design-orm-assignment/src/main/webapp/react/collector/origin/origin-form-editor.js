import originService from "./origin-service"

const {useState, useEffect} = React;
const {useParams, useHistory, Link} = window.ReactRouterDOM;

const OriginFormEditor = () => {
    const [origin, setOrigin] = useState({})
    const {originId} = useParams()
    useEffect(() => {
        if(originId !== "new") {
            findOriginById(originId)
        }
    }, []);
    const history = useHistory()
    const createOrigin = (origin) => {
        originService.createOrigin(origin)
            .then(origin => history.push("/origin"))
    }
    const findOriginById = (id) =>
        originService.findOriginById(id)
            .then(origin => setOrigin(origin))
    const updateOrigin = (id, newOrigin) =>
        originService.updateOrigin(id, newOrigin)
            .then(() => history.goBack())
    const deleteOrigin = (id) =>
        originService.deleteOrigin(id)
            .then(() => history.goBack())

    return (
        <div>
            <h2>
                Origin Editor
            </h2>
            <label>Id</label>
            <input
                className="form-control margin-bottom-10px"
                readOnly={true}
                value={origin.id}/>


            <label>Name</label>
            <input
                className="form-control margin-bottom-10px"
                value={origin.origin}/>
            <br/>

            <button
                onClick={() => {
                    history.push("/origin")
                }}
                className="btn btn-warning btn-block margin-right-10px">Cancel</button>
            <button
                onClick={() => createOrigin(origin)}
                className="btn btn-primary btn-block margin-right-10px">Create</button>
            <button
                onClick={() => updateOrigin(origin.id, origin)}
                className="btn btn-success btn-block margin-right-10px">Save</button>
            <button
                onClick={() => deleteOrigin(origin.id)}
                className="btn btn-danger btn-block margin-right-10px">Delete</button>
        </div>
    )
}

export default OriginFormEditor