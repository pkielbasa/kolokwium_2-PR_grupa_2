import './App.css';
import { Route, Switch, Redirect } from "react-router-dom";
import Posts from "./components/posts";
import PKhome from "./components/PKhome";
import PKnavbar from "./components/PKnavbar";

function App() {

    return (
        <div className="container-fluid">
            <div className="container">
                <div className="content">
                    <div className="container-fluid">
                        <PKnavbar />
                    </div>
                    <Switch>
                        <Route path="/" exact component={Posts} />
                        <Route path="/home" exact component={PKhome} />
                    </Switch>
                </div>
            </div>
        </div>
    );
}

export default App;