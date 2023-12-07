import React from 'react'
import classes from './Header.module.css';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { resetState } from '../../store/userSlice';

const Header = () => {
  const dispatch = useDispatch();
  const userDetails = useSelector(state=>state.userState.user);
  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/home"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              // style={({ isActive }) => ({
              //   textAlign: isActive ? 'center' : 'left',
              // })}
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              onClick={dispatch(resetState())}
            >
              Logout ({userDetails.username})
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;