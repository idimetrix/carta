import React, { Component } from 'react';
import PropTypes from 'prop-types';
import VInput from './VInput';
import VGroup from './VGroup';
import VFeedback from './VFeedback';
import { Col, FormText, Label, CustomInput } from 'reactstrap';

const colSizes = ['xs', 'sm', 'md', 'lg', 'xl'];

export default class VField extends Component {
	static propTypes = {
		...VInput.propTypes,
		...{
			label: PropTypes.node,
			labelHidden: PropTypes.bool,
			disabled: PropTypes.bool,
			readOnly: PropTypes.bool,
			id: PropTypes.string,
			inputClass: PropTypes.string,
			labelClass: PropTypes.string,
			helpMessage: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
			errorMessage: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
			labelAttrs: PropTypes.object,
			groupAttrs: PropTypes.object,
			grid: PropTypes.object,
		},
	};

	static contextTypes = {
		FormCtrl: PropTypes.object.isRequired,
	};

	static childContextTypes = {
		FormCtrl: PropTypes.object.isRequired,
	};

	getChildContext() {
		this.FormCtrl = { ...this.context.FormCtrl };
		const registerValidator = this.FormCtrl.register;
		this.FormCtrl.register = (input, updater = input && input.setState && input.setState.bind(input)) => {
			registerValidator(input, () => {
				this.setState({});
				if (updater) updater({});
			});
		};
		return {
			FormCtrl: this.FormCtrl,
		};
	}

	render() {
		let row = false;
		const col = {};
		const labelCol = {};
		const {
			helpMessage,
			label,
			labelHidden,
			inputClass,
			labelClass,
			children,
			id = this.props.name,
			size,
			disabled,
			readOnly,
			grid,
			labelAttrs,
			groupAttrs,
			...attributes
		} = this.props;

		if (grid) {
			colSizes.forEach((colSize) => {
				if (grid[colSize]) {
					row = true;
					const sizeNum = parseInt(grid[colSize], 10);
					col[colSize] = sizeNum;
					labelCol[colSize] = 12 - sizeNum;
				}
			});
		}

		const input = (
			<VInput id={id} className={inputClass} size={size} disabled={disabled} readOnly={readOnly} {...attributes}>
				{children}
			</VInput>
		);

		const validation = this.context.FormCtrl.getInputState(this.props.name);

		const feedback = validation.errorMessage ? <VFeedback>{validation.errorMessage}</VFeedback> : null;
		const help = helpMessage ? <FormText>{helpMessage}</FormText> : null;
		const inputRow = row ? (
			<Col {...col}>
				{input}
				{feedback}
				{help}
			</Col>
		) : (
			input
		);
		const check = attributes.type === 'checkbox';

		if (
			(check || attributes.type === 'radio' || attributes.type === 'switch') &&
			(attributes.tag === CustomInput || (Array.isArray(attributes.tag) && attributes.tag[0] === CustomInput))
		) {
			return (
				<VGroup className="mb-0">
					<VInput {...this.props}>
						{feedback}
						{help}
					</VInput>
				</VGroup>
			);
		}

		return (
			<VGroup check={check} disabled={disabled} row={row} {...groupAttrs}>
				{check && inputRow}
				{label && (
					<Label for={id} className={labelClass} hidden={labelHidden} size={size} {...labelCol} {...labelAttrs}>
						{label}
					</Label>
				)}
				{!check && inputRow}
				{!row && feedback}
				{!row && help}
			</VGroup>
		);
	}
}
