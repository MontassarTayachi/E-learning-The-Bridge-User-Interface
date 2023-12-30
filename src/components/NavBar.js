import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import contactImg from "../assets/img/LogoBridge.png";
export const  NavBar = () =>{
    return (
      <>
        <Navbar className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home"><img  src={contactImg}
                  alt="Contact Us"></img> </Navbar.Brand>
          </Container>
        </Navbar>
    </>
    )
}
