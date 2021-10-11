import React from "react"
import { NavLink } from "react-router-dom";

export function Nav(){
    return(
        <div className="nav">
            <nav>
                <NavLink to="/">
                    Link to another page
                </NavLink>
            </nav>
        </div>
    )
}
