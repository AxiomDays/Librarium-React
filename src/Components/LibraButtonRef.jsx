import { useEffect, useState } from "react";
import "./ProfileCard.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./LibraButtonRef.css";

function LibraButtonRef({ btntext = "Button", linkref = "#"}) {
	
	return (
		<>
			<a
				className="libra-link"
				href={linkref}
			>
				<div className="libra">{btntext}</div>
			</a>
			
		</>
	);
}

export default LibraButtonRef;
