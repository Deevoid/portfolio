import React from 'react';



export default function NavItem(props){
    return(
        <li className="nav-item" onClick={props.fn}>
                <a href="#" className={`${props.isActive} nav-link nav-link-btn`} >
                    <i className={props.iClass}></i>
                    <span className="link-text">{props.title}</span>
                </a>
            </li>
    )
}
export function navTheme(props){
    return(
        <li className="nav-item" id="themeButton" onClick={props.fn}>
                <a href="#" className="nav-link ">
                    <i className="fas fa-sun" id="sun"></i>
                    <i className="fas fa-moon" id="moon"></i>
                    <span className="link-text">{props.title}</span>
                </a>
            </li>
    )
}
export function navLOGO(props){
    return(
        <li className="logo">
                <a href="#" className="nav-link">
                  <span className="link-text logo-text">Dev</span>
                  <i className="fas fa-angle-double-right"></i>
                </a>
              </li>
    )
}