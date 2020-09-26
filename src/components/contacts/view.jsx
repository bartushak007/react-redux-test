import React from "react";
import PropTypes from "prop-types";
import { Card } from "antd";

const View = ({ contacts }) => {
	const { data } = contacts;
	return (
		<div>
			{data.map(({ id, picture, email }) => (
				<Card
					key={id.value + email}
					hoverable
					style={{ width: 240 }}
					cover={<img alt="medium" src={picture.medium} />}
				></Card>
			))}
		</div>
	);
};

View.defaultProps = {
	getContacts: () => {},
	contacts: {},
};

View.propTypes = {
	getContacts: PropTypes.func,
	contacts: PropTypes.object,
};

export { View };
