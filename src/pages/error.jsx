import "./error.scss";
export const Error = ({ hideWrapper, message }) => {
	return (
		<div className="background-img">
			{!hideWrapper && (
				<div className="loader-wrapper">
					<div className="loader"></div>
				</div>
			)}
			<div className="wrapper">
				<div className="img-wrapper">
					<span>44</span>
				</div>
				<p>
					API error <br /> {message ? message : "wait few minutes and come back later."}
				</p>
			</div>
		</div>
	);
};
