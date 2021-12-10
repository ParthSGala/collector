import originService from "./origin-servic"
import InlineOriginEditor from "./origin-inline-editor";

const { useState, useEffect } = React;
const { Link, useParams } = window.ReactRouterDOM;

const OriginList = () => {
    const params = useParams();
    const animalId = params.animalId;

    // const [newOrigin, setNewOrigin] = useState({})
    // const [origins, setOrigin] = useState([])
    // useEffect(() => {
    //     findAllOrigin()
    // }, [])
    // const findAllOrigin = () =>
    // {
    //     console.log(originService)
    //     originService.findAllOrigin()
    //         .then(origins => setOrigin(origins))
    // }
    // const createOrigin = (origin) =>
    //     originService.createOrigin(origin)
    //         .then(origin => {
    //             setNewOrigin({title:''})
    //             setOrigin(origins => ([...origins, origin]))
    //         })
    // const updateOrigin = (id, newOrigin) =>
    //     originService.updateOrigin(id, newOrigin)
    //         .then(origin => setOrigin(origins => (origins.map(origin => origin.id === id ? newOrigin : origin))))
    // const deleteOrigin = (id) =>
    //     originService.deleteOrigin(id)
    //         .then(origins => setOrigin(origins => origins.filter(origin => origin.id !== id)))
    return(
        <div>
            <h2>Origin</h2>
            {animalId}
            {/*<Link to="/origin/new" className="btn btn-primary">*/}
            {/*    Add*/}
            {/*</Link>*/}
            {/*<br/>*/}
            {/*<br/>*/}

            {/*<ul className="list-group">*/}
            {/*    {*/}
            {/*        origins.map(origin =>*/}
            {/*            <li key={origin.id} className="list-group-item">*/}
            {/*                <Link to={`/origin/${origin.id}`}>*/}
            {/*                    {origin.origin}*/}
            {/*                </Link>*/}

            {/*                /!*<InlineOriginEditor key={origin._id}*!/*/}
            {/*                /!*                  updateOrigin={updateOrigin}*!/*/}
            {/*                /!*                  deleteOrigin={deleteOrigin}*!/*/}
            {/*                /!*                  origin={origin}/>*!/*/}


            {/*            </li>)*/}
            {/*    }*/}
            {/*</ul>*/}
        </div>
    )
}

export default OriginList;