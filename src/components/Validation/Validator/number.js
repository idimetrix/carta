import isNumber from 'lodash/isNumber';
import toNumber from 'lodash/toNumber';
import { isEmpty } from './utils';

export default function validate(value, context, { errorMessage = false } = {}) {
	if (isEmpty(value)) return true;

	const num = toNumber(value);

	return (isNumber(num) && !isNaN(num)) || errorMessage;
}
