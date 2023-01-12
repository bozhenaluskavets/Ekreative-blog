import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../store/slices/auth";
import { Loader } from "../Loader";
import { Container, Extra, Item, Items, Nav } from "./style";

export const Header = () => {

    const dispatch = useDispatch();

    const state = useSelector(state => {
        return {
            isLoading: state.ui.isLoading,
            isAuthenticated: state.auth.isAuthenticated
        }
    })

    const clearLS = () => {
        localStorage.clear();
        dispatch(logout())
    }

    return (
        <Container>
            <Nav>
                <Extra><Link to={'/'}>Home</Link></Extra>

                {!state.isAuthenticated && <Items>
                    <Item>
                        <Link to={'/register'}>Register</Link>
                    </Item>
                    <Item>
                        <Link to={'/login'}>Log in</Link>
                    </Item>
                </Items>}
                {state.isAuthenticated && <Items>
                    <Item>
                        <Link to={'/'} onClick={clearLS}>Log out</Link>
                    </Item>
                    <Item>
                        <Link to={'/myProfile'}>My profile</Link>
                    </Item>
                </Items>}
            </Nav>

            {state.isLoading && <Loader />}
        </Container>
    )
}