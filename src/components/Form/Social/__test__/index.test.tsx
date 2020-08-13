import { CommonWrapper, shallow } from 'enzyme';
import React from 'react';
import { FormSocial } from '~/components/Form';

let wrapper: CommonWrapper;

beforeEach((): void => {
	wrapper = shallow(<FormSocial />);
});

const sum = (a: number, b: number): number => a + b;

it('sum 1 + 2 to equal 3', (): void => {
	expect(sum(1, 2)).toBe(3);
});

it('renders correctly', (): void => {
	expect(wrapper).toMatchSnapshot();
});

it('FormSocial have links Github and Google', (): void => {
	const result: boolean = wrapper.contains('Github') && wrapper.contains('Google');

	expect(result).toBeTruthy();
});
