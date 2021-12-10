import UserList from "./users/user-list";
import UserFormEditor from "./users/user-form-editor";
import AnimalList from "./animal/animal-list";
import AnimalFormEditor from "./animal/animal-form-editor";
import OriginList from "./origin/origin-list";
import OriginFormEditor from "./origin/origin-form-editor";

const {HashRouter, Link, Route} = window.ReactRouterDOM;
 
const App = () => {
    return (
        <div className="container-fluid">
            <HashRouter>
                <Route path={["/users", "/"]} exact={true}>
                    <UserList/>
                </Route>
                
                <Route path="/users/:id" exact={true}>
                    <UserFormEditor/>
                </Route>

                <Route path={["/users/:userId/animal"]} exact={true}>
                    <AnimalList/>
                </Route>

                <Route path={["/animal/:animalId"]} exact={true}>
                    <AnimalFormEditor/>
                </Route>

                <Route path={["/animal/:animalId/origin"]} exact={true}>
                    <OriginList/>
                </Route>

                <Route path={["/origin/:originId"]} exact={true}>
                    <OriginFormEditor/>
                </Route>

            </HashRouter>
        </div>
    );
}

export default App;
