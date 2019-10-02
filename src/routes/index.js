import { Router, Scene, Stack} from 'react-native-router-flux';
import React, { PureComponent } from 'react'

import Login from '../screen/Login'
import Home from '../screen/Home'
import Cart from '../screen/Cart'
import Template from '../screen/Template'

export default class App extends PureComponent{
    render(){
        return(
            <Router>
                <Stack key="root">
                    <Scene key="Login" component={Login} hideNavBar  />
                    <Scene key="Cart" component={Cart} hideNavBar />
                    <Scene key="Home" component={Home} hideNavBar/>
                    <Scene key="Template" component={Template} hideNavBar initial={true}/>
                </Stack>
            </Router>
        )
    }
}
