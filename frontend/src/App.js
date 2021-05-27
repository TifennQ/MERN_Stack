import React from "react"
import { Switch, Route, Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import RestaurantsList from "./components/RestaurantsList"
import AddReview from "./components/AddReview"
import Login from "./components/Login"
import Restaurant from "./components/Restaurant"
import NotFound from "./components/NotFound"

function App() {
  const [user, setUser] = React.useState(null)

  async function login(user = null) {
    setUser(user)
  }

  async function logout() {
    setUser(null)
  }

  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/restaurants" className="navbar-brand">
          Restaurant Reviews
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/restaurants"} className="nav-link">
              Restaurants
            </Link>
          </li>
          <li className="nav-item">
            {
              user ? (
                <a onClick={logout} className="nav-link" style={{cursor:'pointer'}}>
                  Logout {user.name}
                </a>
              ) : (
                <Link to={"/login"} className="nav-link">
                  Login
              </Link>
              )
            }
          </li>
        </div>
      </nav>

      <div className="container mt-3">
            <Switch>
              <Route exact path={["/", "/restaurants"]} component={RestaurantsList}></Route>
              <Route path="/restaurants/:id/review" render={(props) => (
                <AddReview {...props} user={user}></AddReview>
              )}>
              </Route>
              <Route path="/restaurants/:id" render={(props) => (
                 <Restaurant {...props} user={user}></Restaurant>
              )} >
              </Route>
              <Route path="/login" render={(props) => (
                <Login {...props} login={login}></Login>
              )}>

              </Route>
              <Route path="*" component={NotFound}></Route>
            </Switch>
      </div>
      
    </div>
  );
}

export default App;
