import classes from "../ui/Card.module.css";

const Card = (props) => {
    return <div className="bg-gradient-to-r from-pink-500 to-violet-500">
            {props.children}
    </div>
}
export default Card