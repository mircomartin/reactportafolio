import React from 'react';

const Error = ({ error }) => {
	return <p className="alert-danger p-2 mt-4">{error}</p>;
};

export default Error;
