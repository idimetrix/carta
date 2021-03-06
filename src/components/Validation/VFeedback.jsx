import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormFeedback } from 'reactstrap';

export default class VFeedback extends Component {
	static propTypes = { ...FormFeedback.propTypes };

	static contextTypes = {
		FormCtrl: PropTypes.object.isRequired,
		Group: PropTypes.object.isRequired,
	};

	render() {
		const validation = this.context.Group.getInputState();
		return <FormFeedback valid={!validation.error} {...this.props} />;
	}
}
