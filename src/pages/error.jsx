import "./error.scss";
export const Error = () => {
	return (
		<div className="background-img">
			<div className="loader-wrapper">
				<div className="loader"></div>
			</div>
			<div className="wrapper">
				<div className="img-wrapper">
					<span>44</span>
				</div>
				<p>
					API error <br /> wait few minutes and come back later.
				</p>
			</div>
		</div>
	);
};
