import React, { useMemo } from "react";
import PropTypes from "prop-types";
import { Card, Row, Col, Pagination } from "antd";

const View = ({ contacts, onChangePage }) => {
	const { data, info } = contacts;
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
			<div className={"contacts__paginationWrapper"}>
			<Pagination
				current={info.page}
				onChange={onChangePage}
				pageSize={info.results}
				total={100 * info.results}
				pageSizeOptions={[12,24,36]}
			/>
			</div>
		</div>
	);
};

View.defaultProps = {
	onChangePage: () => {},
	contacts: {},
};

View.propTypes = {
	onChangePage: PropTypes.func,
	contacts: PropTypes.object,
};

export { View };
