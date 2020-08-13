import React, { Component, ReactNode } from 'react';
import { Button, Label, FormGroup, CustomInput, Container } from 'reactstrap';

import { VForm, VField, VGroup, VInput, VFeedback, VRadioGroup, VRadio, VCheckboxGroup, VCheckbox } from '~/components/Validation';
import { Line } from '~/partials/App';

interface IProps {
	readonly [key: string]: any;
}

interface IState {
	errors: any[];
	values: any[];
}

class Validation extends Component<IProps, IState> {
	public props: IProps;
	public state: IState;

	public constructor(props: IProps) {
		super(props);

		this.state = {
			errors: [],
			values: [],
		};
	}

	public render(): ReactNode {
		return (
			<>
				<Line title="Validation" description="The time is right now!" />

				<Container className="section features-1 pt-0">
					<VForm onSubmit={(event: any, errors: any, values: any): void => this.handleSubmit(event, errors, values)}>
						{/* With VField */}
						<VField name="name" label="Name" required />
						{/* With VGroup VInput and VFeedback to build your own */}
						<VGroup>
							<Label for="example">Rank</Label>
							<VInput name="rank" id="example" required />
							<VFeedback>This is an error!</VFeedback>
						</VGroup>
						{/* Radios */}
						<VRadioGroup name="radioExample" label="Radio Buttons!" required errorMessage="Pick one!">
							<VRadio label="Bulbasaur" value="Bulbasaur" />
							<VRadio label="Squirtle" value="Squirtle" />
							<VRadio label="Charmander" value="Charmander" />
							<VRadio label="Pikachu" value="Pikachu" disabled />
						</VRadioGroup>

						<VRadioGroup inline name="radioExample2" label="Radio Buttons! (inline)" required>
							<VRadio label="Bulbasaur" value="Bulbasaur" />
							<VRadio label="Squirtle" value="Squirtle" />
							<VRadio label="Charmander" value="Charmander" />
							<VRadio label="Pikachu" value="Pikachu" disabled />
						</VRadioGroup>

						<VRadioGroup name="radioCustomInputExample" label="Custom Radio Buttons!" required>
							<VRadio customInput label="Bulbasaur" value="Bulbasaur" />
							<VRadio customInput label="Squirtle" value="Squirtle" />
							<VRadio customInput label="Charmander" value="Charmander" />
							<VRadio customInput label="Pikachu" value="Pikachu" disabled />
						</VRadioGroup>

						<VRadioGroup inline name="radioCustomInputExample2" label="Custom Radio Buttons! (inline)" required>
							<VRadio customInput label="Bulbasaur" value="Bulbasaur" />
							<VRadio customInput label="Squirtle" value="Squirtle" />
							<VRadio customInput label="Charmander" value="Charmander" />
							<VRadio customInput label="Pikachu" value="Pikachu" disabled />
						</VRadioGroup>

						{/* checkboxes */}
						<VCheckboxGroup name="checkboxExample" label="Checkboxes!" required>
							<VCheckbox label="Bulbasaur" value="Bulbasaur" />
							<VCheckbox label="Squirtle" value="Squirtle" />
							<VCheckbox label="Charmander" value="Charmander" />
							<VCheckbox label="Pikachu" value="Pikachu" disabled />
						</VCheckboxGroup>

						<VCheckboxGroup inline name="checkboxExample2" label="Checkboxes! (inline)" required>
							<VCheckbox label="Bulbasaur" value="Bulbasaur" />
							<VCheckbox label="Squirtle" value="Squirtle" />
							<VCheckbox label="Charmander" value="Charmander" />
							<VCheckbox label="Pikachu" value="Pikachu" disabled />
						</VCheckboxGroup>

						<VCheckboxGroup name="checkboxCustomInputExample" label="Custom Checkboxes!" required>
							<VCheckbox customInput label="Bulbasaur" value="Bulbasaur" />
							<VCheckbox customInput label="Squirtle" value="Squirtle" />
							<VCheckbox customInput label="Charmander" value="Charmander" />
							<VCheckbox customInput label="Pikachu" value="Pikachu" disabled />
						</VCheckboxGroup>

						<VCheckboxGroup inline name="checkboxCustomInputExample2" label="Custom Checkboxes! (inline)" required>
							<VCheckbox customInput label="Bulbasaur" value="Bulbasaur" />
							<VCheckbox customInput label="Squirtle" value="Squirtle" />
							<VCheckbox customInput label="Charmander" value="Charmander" />
							<VCheckbox customInput label="Pikachu" value="Pikachu" disabled />
						</VCheckboxGroup>

						{/* With select and VField */}
						<VField type="select" name="select" label="Option" helpMessage="Idk, this is an example. Deal with it!">
							<option>1</option>
							<option>2</option>
							<option>3</option>
							<option>4</option>
							<option>5</option>
						</VField>

						<VField type="select" name="select-multiple" label="Option" helpMessage="MULTIPLE!" multiple>
							<option>1</option>
							<option>2</option>
							<option>3</option>
							<option>4</option>
							<option>5</option>
						</VField>

						<FormGroup>
							<VGroup check>
								<VInput type="checkbox" name="checkbox" />
								<Label check for="checkbox">
									{' '}
									Check it out
								</Label>
							</VGroup>

							<VField type="checkbox" name="avFieldCheckbox" label="Check out this VField checkbox" required />

							<VInput tag={CustomInput} type="checkbox" name="customCheckbox" label="Check out this custom input checkbox" required />

							<VField tag={CustomInput} type="checkbox" name="customCheckbox1" label="Check out this custom input checkbox from VField" required />
						</FormGroup>

						<FormGroup>
							<Button>Submit</Button>
						</FormGroup>
					</VForm>

					{this.state.values && (
						<div>
							<h5>Submission values</h5>
							Invalid: {this.state.errors.join(', ')}
							<br />
							Values: <pre>{JSON.stringify(this.state.values, null, 2)}</pre>
						</div>
					)}
				</Container>
			</>
		);
	}

	private handleSubmit(event: any, errors: any, values: any): void {
		this.setState({ errors, values });
	}
}

export default Validation;
