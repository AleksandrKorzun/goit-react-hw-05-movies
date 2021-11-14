import { mainRoutes } from "../../routes/MainRoutes";
import { Route, Switch } from 'react-router-dom';
import MovieDetailsPage from "../../views/MovieDetailsPage";


const Main = () => {
    return (
        <main>
            <Switch>
                
                <Route
                    exact={false}
                    path={`/movies/:id`}
                    component={MovieDetailsPage}
                />
                
                {
                    mainRoutes.map(({ path, exact, component })=>(
                        <Route 
                            exact={exact} 
                            path={path} 
                            component={component}
                            key={path}/>
                    ))
                }
            </Switch>
        </main>
    );
}

export default Main;