module.exports = {
	roots: ['<rootDir>/src'],
	testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],

	setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts', '@testing-library/jest-dom/extend-expect'],
	snapshotSerializers: ['enzyme-to-json/serializer'],

	moduleNameMapper: {
		'^~/(.*)$': '<rootDir>/src/$1',
	},

	transform: {
		'.+\\.(css|styl|less|sass|scss|png|jpg|jpeg|svg|ttf|woff|woff2)$': 'jest-transform-stub',
		'^.+\\.jsx?$': 'babel-jest',
		'^.+\\.tsx?$': 'ts-jest',
	},
	globals: {
		'ts-jest': {
			babelConfig: true,
			isolatedModules: true,
		},
	},
};
