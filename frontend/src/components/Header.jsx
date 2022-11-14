import React from "react";
import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";

function Header() {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    nav("/");
  };
  return (
    <header className="header">
      <></>
      <ul>
        {user ? (
          <>
            <li>
              <button className="btn" onClick={onLogout}>
                <FaSignOutAlt /> logout
              </button>
            </li>
            <div className="logo">
              <Link to="/dash">GoalSetter</Link>
            </div>
          </>
        ) : (
          <>
            <li>
              <Link to="/register">
                <FaUser /> Register
              </Link>
            </li>
            <li>
              <Link to="/login">
                <FaSignInAlt /> login
              </Link>
            </li>
          </>
        )}
      </ul>
    </header>
  );
}

export default Header;
