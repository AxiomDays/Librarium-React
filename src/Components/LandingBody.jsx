import "./LandingBody.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import BookScroll from "./BookScroll";

function LandingBody() {
	return (
		<>
			<div className="container">
				<div className="landing-row row">
					<div className="landing-body-text col-lg-10 col-12">
						<div className="row">
							<BookScroll />
						</div>
						<div className="landing-text-row row ">
							<div className="col-lg-4 col-12 landing-title text-lg-start">
								WHAT IS LIBRARIUM?
							</div>
							<hr
								style={{ color: "aliceblue" }}
								className="d-lg-none d-block "
							/>
							<div className="col-lg-6 col-12 landing-body text-lg-end">
								Mauris luctus venenatis neque ac pellentesque. Donec id luctus
								orci. Maecenas ullamcorper efficitur lectus, sit amet blandit
								risus congue at. Maecenas scelerisque, odio in tempus
								sollicitudin, felis lectus rhoncus lacus, quis lobortis massa
								nunc vel lorem. Etiam mollis consectetur arcu at commodo. Nulla
								auctor odio eget libero sodales lacinia. Proin suscipit elit ut
								ex convallis, ultricies laoreet sem aliquet. Sed volutpat massa
								eget tortor viverra convallis.
							</div>
						</div>
						<div className="landing-text-row row">
							<div className="col-lg-4 col-12 landing-title d-lg-none d-block text-lg-end">
								WHAT CAN I DO HERE?
							</div>
							<hr
								style={{ color: "aliceblue" }}
								className="d-lg-none d-block "
							/>
							<div className="col-lg-6 col-12 landing-body text-lg-start">
								Mauris luctus venenatis neque ac pellentesque. Donec id luctus
								orci. Maecenas ullamcorper efficitur lectus, sit amet blandit
								risus congue at. Maecenas scelerisque, odio in tempus
								sollicitudin, felis lectus rhoncus lacus, quis lobortis massa
								nunc vel lorem. Etiam mollis consectetur arcu at commodo. Nulla
								auctor odio eget libero sodales lacinia. Proin suscipit elit ut
								ex convallis, ultricies laoreet sem aliquet. Sed volutpat massa
								eget tortor viverra convallis. Sed eu enim eget nunc ornare
								tincidunt vel viverra turpis.
							</div>
							<div className="col-lg-4 col-12 landing-title d-lg-block d-none text-lg-end">
								WHAT CAN I DO HERE?
							</div>
						</div>
						
					</div>
				</div>
			</div>
		</>
	);
}

export default LandingBody;
