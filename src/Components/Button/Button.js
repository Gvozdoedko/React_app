import { Component } from "react";
import PropTypes from "prop-types";
import "./button.css";

class Button extends Component {
    state = {
        clickedTimes: 0,
    };

    handleClick = () => {
        this.setState(prevState => ({
            clickedTimes: prevState.clickedTimes + 1,
        }));
    };
    render() {
        return (
            <button className={this.props.className} onClick={this.handleClick}>
                <span>(clicked {this.state.clickedTimes} time(s))</span>
            </button>
        );
    }
}

Button.propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
};

Button.defaultProps = {
    className: "custom-btn btn-3",
    children: "CHANGE ME",
};

export default Button;
