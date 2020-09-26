import React, { useMemo } from "react";
import PropTypes from "prop-types";
import { Card, Row, Col } from "antd";

const View = ({ contacts }) => {
	const { data } = contacts;
	const renderCards = useMemo(
		() =>
			data.map(({ id, picture, email }) => (
				<Col xs={24} sm={12} md={8} lg={4} key={id.value + email}>
					<Card
						hoverable
						style={{ width: "100%", marginBottom: "24px" }}
						cover={<img alt="contact" src={picture.large} />}
					></Card>
				</Col>
			)),
		[data]
	);

	return (
		<div className={"contacts"}>
			<Row gutter={24}>{renderCards}</Row>
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
