import { Container, Nav, Navbar } from "react-bootstrap";


function TopNavbar() {
    //polish: make the navbar collapse under a button for mobile/smaller screens

    return (
        <>

            <Navbar bg="dark" variant="dark" expand="md" id="Navbar" >
                <Container>
                    <Navbar.Brand href="/" className="fs-1">Club Luke ⛳</Navbar.Brand>
                    <Nav className="d-flex justify-content-around w-100 fs-3">
                        <Nav.Link href="/">Membership</Nav.Link>
                        <Nav.Link href="/">About The Club</Nav.Link>
                        <Nav.Link href="/Golf">Golf</Nav.Link>
                        <Nav.Link href="/">Dining</Nav.Link>
                        <Nav.Link href="/">Member Login</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default TopNavbar;