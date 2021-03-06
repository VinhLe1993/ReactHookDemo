import React from "react";
import { NavLink } from "react-router-dom";

export default function Haader() {
  return (
      <div>
          <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
              <a className="navbar-brand" href="#">
                  CyberSoft
              </a>
              <button
                  className="navbar-toggler d-lg-none"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapsibleNavId"
                  aria-controls="collapsibleNavId"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
              />
              <div className="collapse navbar-collapse" id="collapsibleNavId">
                  <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                      <li className="nav-item">
                          <NavLink activeStyle={{background: '#fff',
                           color:'#000'}} activeClassName="active" className="nav-link" to="/home">
                              Home <span className="sr-only">(current)</span>
                          </NavLink>
                      </li>
                      <li className="nav-item">
                          <NavLink activeStyle={{background: '#fff',
                           color:'#000'}} activeClassName="active" className="nav-link" to="/about">
                              About
                          </NavLink>
                      </li>
                      <li className="nav-item">
                          <NavLink activeStyle={{background: '#fff',
                           color:'#000'}} activeClassName="active" className="nav-link" to="/login">
                              Login
                          </NavLink>
                      </li>
                      <li className="nav-item">
                          <NavLink activeStyle={{background: '#fff',
                           color:'#000'}} activeClassName="active" className="nav-link" to="/register">
                              Register
                          </NavLink>
                      </li>
                      <li className="nav-item">
                          <NavLink activeStyle={{background: '#fff',
                           color:'#000'}} activeClassName="active" className="nav-link" to="/hoc">
                              HOC (Higher order component)
                          </NavLink>
                      </li>
                      <li className="nav-item">
                          <NavLink activeStyle={{background: '#fff',
                           color:'#000'}} activeClassName="active" className="nav-link" to="/antd">
                              Ant Design
                          </NavLink>
                      </li>
                      <li className="nav-item dropdown">
                          <a
                              className="nav-link dropdown-toggle"
                              href="#"
                              id="dropdownId"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                          >
                              Hooks
                          </a>
                          <div className="dropdown-menu" aria-labelledby="dropdownId">
                              <NavLink className="dropdown-item" to="/usestate">
                                   UseState
                              </NavLink>
                              <NavLink className="dropdown-item" to="/useeffect">
                                   Use Hook
                              </NavLink>
                              {/* <NavLink className="dropdown-item" to="/reduxhook">
                                   Redux Hook 
                              </NavLink> */}
                          </div>
                      </li>
                      <li className="nav-item dropdown">
                          <a
                              className="nav-link dropdown-toggle"
                              href="#"
                              id="dropdownId"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                          >
                              Axios
                          </a>
                          <div className="dropdown-menu" aria-labelledby="dropdownId">
                              <NavLink className="dropdown-item" to="/ajaxrcc">
                                   Ajax react class
                              </NavLink>
                              <NavLink className="dropdown-item" to="/ajaxrfc">
                                   Ajax react function
                              </NavLink>
                              <NavLink className="dropdown-item" to="/apimiddleware">
                                   Api middle ware
                              </NavLink>
                          </div>
                      </li>
                  </ul>
                  <form className="form-inline my-2 my-lg-0">
                      <input
                          className="form-control mr-sm-2"
                          type="text"
                          placeholder="Search"
                      />
                      <button
                          className="btn btn-outline-success my-2 my-sm-0"
                          type="submit"
                      >
                          Search
                      </button>
                  </form>
              </div>
          </nav>
      </div>
  );
}
