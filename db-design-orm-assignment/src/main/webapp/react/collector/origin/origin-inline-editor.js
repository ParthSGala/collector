const {useState, useEffect } = React;
const {Link} = window.ReactRouterDOM;

const InlineOriginEditor = ({origin}) => {
    const [OriginCopy, setOriginCopy] = useState(origin)
    const [editing] = useState(false)
    return(
        <div>
            {
                editing &&
                <div className="row">
                    <div className="col">
                        <input
                            className="form-control"
                            value={OriginCopy.origin}
                            onChange={(e)=>setOriginCopy(originCopy => ({...originCopy, origin: e.target.value}))}/>
                    </div>
                </div>
            }
            {
                !editing &&
                <div className="row">
                    <div className="col">
                        <Link to={`/origin/${originCopy.id}`}>
                            {originCopy.origin}
                        </Link>
                    </div>
                </div>
            }
        </div>
    )
}

export default InlineOriginEditor;