import "./BlackBox.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import BookScroll from "./BookScroll";
import TitledTextBox from "./TitledTextBox";

function BlackBox({ textboxes = [] }) {
	let textBoxes = [];
	textboxes.forEach((key) => textBoxes.push(<TitledTextBox title={key[0]} context={key[1]}/>))

	return (
		<>
			<div className="container">
				<div className="black-row row ">
					<div className="black-box col-md-10 col-12">{textBoxes}</div>
				</div>
			</div>
		</>
	);
}

export default BlackBox;
