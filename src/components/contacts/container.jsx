import React, { Component } from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
import { getContactsRequest } from "store/contacts/actions";
import { getContactsState } from "store/contacts/selectors";
import { View } from "./view";

const mapStateToProps = (state) => {
	return { contacts: getContactsState(state) };
};

const mapDispatchToProps = { getContacts: getContactsRequest };

class Contacts extends Component {
	static defaultProps = {
		getContacts: () => {},
		contacts: {},
	};

	static propTypes = {
		getContacts: PropTypes.func,
		contacts: PropTypes.object,
	};

	componentDidMount() {
		const { getContacts } = this.props;
		getContacts();
	}

	render() {
		const { contacts } = this.props;
		return <View contacts={contacts} />;
	}
}

export default compose(connect(mapStateToProps, mapDispatchToProps))(Contacts);
