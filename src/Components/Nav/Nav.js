import { Component } from "react";
import PropTypes from "prop-types";
import "./Nav.css";

class Nav extends Component {
    render() {
        return (
            <nav className={this.props.className} id={this.props.id}>
                <ul>
                    <li>
                        <a
                            href={this.props.href}
                            className={this.props.className}
                        >
                            Home
                        </a>
                    </li>
                    <li>
                    <a
                            href={this.props.href}
                            className={this.props.className}
                        >
                            Blog
                        </a>
                    </li>
                    <li>
                    <a
                            href={this.props.href}
                            className={this.props.className}
                        >
                            Work
                        </a>
                    </li>
                    <li>
                    <a
                            href={this.props.href}
                            className={this.props.className}
                        >
                            About
                        </a>
                    </li>
                </ul>
            </nav>
        );
    }
}

Nav.propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    href: PropTypes.string,
};

Nav.defaultProps = {
    id: "nav",
    href: "https://reactjs.org",
    className: "link",
};

export default Nav;
