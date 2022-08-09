import { Component } from "react";
import PropTypes from "prop-types";
import logo from "./imgForHeader/2.jpg";
import './Header.css';

class Header extends Component {
    render() {
        return (
                <header id={this.props.id} className={this.props.className}>
                   <a href={this.props.href}><img src={logo} alt="check img"></img></a> 
                   <div><p className="text">{this.props.children}</p></div>
                </header>
        );
    }
}

Header.propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
};

Header.defaultProps = {
    href: 'https://reactjs.org',
    className: "header",
    children: "Welcome",
};

export default Header;
