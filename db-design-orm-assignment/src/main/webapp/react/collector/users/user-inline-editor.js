const {useState, useEffect } = React;
const {Link} = window.ReactRouterDOM;

const UserInlineEditor = ({user, deleteUser, updateUser}) => {
    const [userCopy, setUserCopy] = useState(user)
    const [editing, setEditing] = useState(false)
    return(
        <div>
            {
                !editing &&
                <div className="row">
                    <div className="col">
                        <Link to={`/users/${userCopy.id}`}>
                            {userCopy.firstName}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/users/${userCopy.id}`}>
                            {userCopy.lastName}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/users/${userCopy.id}`}>
                            {userCopy.username}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/users/${userCopy.id}`}>
                            {userCopy.password}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/users/${userCopy.id}`}>
                            {userCopy.email}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/users/${userCopy.id}`}>
                            {userCopy.dateOfBirth}
                        </Link>
                    </div>

                    <div className="col-1">
                        <Link to={`/users/${userCopy.id}/animal`}>
                            Animal
                        </Link>
                    </div>
                </div>
            }
        </div>
    )
}

export default UserInlineEditor;