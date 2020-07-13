import React, { Component } from 'react'
import "../../dashCSS.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
export default class DashHeader extends Component {
    render() {
        return (
            <div className="navbar navbar-expand-md navbar-dark dashNavBg">
                <a href="/"> <FontAwesomeIcon icon={faSignOutAlt} /> Back to site</a>
                <h4 className="ml-auto">Hello Admin!</h4>
            </div>
        )
    }
}
