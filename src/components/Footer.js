import React, {Component} from 'react'
import { Container, Navbar, NavbarBrand } from 'react-bootstrap'

class Footer extends Component{
    render() {
        return(
            <div className="fixed-bottom navbar navbar-dark bg-dark">  
                <Navbar >
                    <Container>
                        <NavbarBrand></NavbarBrand>
                    </Container>
                </Navbar>
            </div>
        )
    }
}
    export default Footer