import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { Loader } from "../Loader"
import { Container, Extra, Item, Items, Nav } from "./style"

export const Header = () => {

    const state = useSelector(state => {
        return {
            isLoading: state.ui.isLoading
        }
    })

    const clearLS = () => {
        localStorage.clear();
    }

    return (
        <Container>
            <Nav>
            <Extra><Link to={'/'}>Home</Link></Extra>
                <Items>
                    <Item>
                        <Link to={'/register'} onClick={clearLS()}>Register</Link>
                    </Item>
                    <Item>
                        <Link to={'/login'} onClick={clearLS()}>Log in</Link>
                    </Item>
                </Items>
            </Nav>

            {state.isLoading && <Loader />}
        </Container>
    )
}