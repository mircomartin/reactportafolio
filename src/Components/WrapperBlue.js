import React from 'react';

const WrapperBlue = ({ titulo }) => {
	return (
		<div className="wrapper-blue">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<h2 className="titulo-seccion">
							{titulo}
						</h2>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WrapperBlue;
