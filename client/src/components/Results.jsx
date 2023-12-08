import { resultKeyNameFromField } from "@apollo/client/utilities";
import { chooseRestaurants } from "../utils/quiz-utils";





export default function Results(props) {
    return(
        <div>
            <h2>{props.date}</h2>
            <figure>
            <a href={props.link}>
            <img src={props.image} alt={props.restaurant} className="resultImage"/>
            </a>
            </figure>
        </div>
    )
}