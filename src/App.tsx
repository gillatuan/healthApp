import { useState } from "react"

import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import { ChakraProvider } from "@chakra-ui/react"

import { LoginContext } from "context/loginContext"

import { Header } from "layouts/header"
import PrivateRoute from "components/privateRoute"

import Home from "pages/home"
import ColumnPage from "pages/ColumnPage"
import Profile from "pages/profile"
import Login from "pages/login"
import { Footer } from "layouts/footer"

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [loading, setLoading] = useState(false)
  return (
    <Router>
      <LoginContext.Provider
        value={{
          isLoggedIn,
          setIsLoggedIn,
          loading,
          setLoading,
        }}
      >
        <ChakraProvider>
          <Header />
          <Switch>
            <Route exact={true} path="/" component={Home} />
            <Route exact={true} path="/column" component={ColumnPage} />
            <PrivateRoute exact={true} path="/profile" component={Profile} />
            <Route
              exact={true}
              path="/login"
              render={(props) => <Login location={props.location} />}
            />
          </Switch>
          <Footer />
        </ChakraProvider>
      </LoginContext.Provider>
    </Router>
  )
}
