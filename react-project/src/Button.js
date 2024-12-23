import PropTypes from "prop-types";
import styles from "./Button.module.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";


function Button({text}){
    const onClick = () => {
        <Link to={`/`}/>;
    }
    return <button className={styles.btn} onClick={onClick}>{text}</button>;
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
}

export default Button;