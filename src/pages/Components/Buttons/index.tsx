import React, { Component, ReactNode } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { Dispatch } from 'redux';
// Import { Col } from 'reactstrap';
import { Pager } from '~/partials/Components';
import { IRootState } from '~/store/reducer';
// Import cl from 'classnames';

interface IConnectedState {
	readonly [key: string]: any;
}

interface IConnectedDispatch {
	readonly [key: string]: any;
}

interface IState {
	[key: string]: any;
}

interface IProps extends RouteComponentProps, IConnectedState, IConnectedDispatch {
	readonly [key: string]: any;
}

const mapStateToProps = (state: IRootState): IConnectedState => ({
	example: null,
});

const mapDispatchToProps = (dispatch: Dispatch): IConnectedDispatch => ({
	example: null,
});

class Buttons extends Component<IProps, IState> {
	public props: IProps;
	public state: IState;

	public constructor(props: IProps) {
		super(props);

		this.state = {};
	}

	public render(): ReactNode {
		return (
			<Pager
				links={[
					{ title: 'Examples', url: '#examples' },
					{ title: 'Examples1', url: '#examples1' },
					{ title: 'Style buttons', url: '#style-buttons' },
				]}
			>
				<div className="ct-page-title">
					<h1 className="ct-title" id="content">
						Buttons
					</h1>
				</div>
				<p className="ct-lead">
					Use Black Dashboard's custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more.
				</p>
				<hr />
				<h2 id="examples">Examples</h2>
				<p>
					Black Dashboard has changed the predefined button styles from Bootstrap, each serving its own semantic purpose, with a few extras thrown in for more
					control.
				</p>
				<div className="bd-example" data-example-id>
					<button type="button" className="btn btn-primary">
						Primary
					</button>
					<button type="button" className="btn btn-info">
						Info
					</button>
					<button type="button" className="btn btn-success">
						Success
					</button>
					<button type="button" className="btn btn-danger">
						Danger
					</button>
					<button type="button" className="btn btn-warning">
						Warning
					</button>
					<button type="button" className="btn btn-default">
						Default
					</button>
					<button type="button" className="btn btn-secondary">
						Secondary
					</button>
				</div>
				<div className="bd-clipboard">
					<span className="btn-clipboard" data-original-title="Copy to clipboard">
						Copy
					</span>
				</div>
				<div className="bd-clipboard">
					<button className="btn-clipboard" data-original-title="Copy to clipboard">
						Copy
					</button>
				</div>
				<div className="highlight">
					<pre>
						<code className="language-html" data-lang="html">
							<span className="nt">&lt;button</span> <span className="na">type=</span>
							<span className="s">"button"</span> <span className="na">class=</span>
							<span className="s">"btn btn-primary"</span>
							<span className="nt">&gt;</span>Primary
							<span className="nt">&lt;/button&gt;</span>
							{'\n'}
							<span className="nt">&lt;button</span> <span className="na">type=</span>
							<span className="s">"button"</span> <span className="na">class=</span>
							<span className="s">"btn btn-info"</span>
							<span className="nt">&gt;</span>Info
							<span className="nt">&lt;/button&gt;</span>
							{'\n'}
							<span className="nt">&lt;button</span> <span className="na">type=</span>
							<span className="s">"button"</span> <span className="na">class=</span>
							<span className="s">"btn btn-success"</span>
							<span className="nt">&gt;</span>Success
							<span className="nt">&lt;/button&gt;</span>
							{'\n'}
							<span className="nt">&lt;button</span> <span className="na">type=</span>
							<span className="s">"button"</span> <span className="na">class=</span>
							<span className="s">"btn btn-danger"</span>
							<span className="nt">&gt;</span>Danger
							<span className="nt">&lt;/button&gt;</span>
							{'\n'}
							<span className="nt">&lt;button</span> <span className="na">type=</span>
							<span className="s">"button"</span> <span className="na">class=</span>
							<span className="s">"btn btn-warning"</span>
							<span className="nt">&gt;</span>Warning
							<span className="nt">&lt;/button&gt;</span>
							{'\n'}
							<span className="nt">&lt;button</span> <span className="na">type=</span>
							<span className="s">"button"</span> <span className="na">class=</span>
							<span className="s">"btn btn-default"</span>
							<span className="nt">&gt;</span>Default
							<span className="nt">&lt;/button&gt;</span>
							{'\n'}
							<span className="nt">&lt;button</span> <span className="na">type=</span>
							<span className="s">"button"</span> <span className="na">class=</span>
							<span className="s">"btn btn-secondary"</span>
							<span className="nt">&gt;</span>Secondary
							<span className="nt">&lt;/button&gt;</span>
						</code>
					</pre>
				</div>
				<h2 id="style-buttons">Style buttons</h2>
				<div className="bd-example" data-example-id>
					<button className="btn btn-primary">Default</button>
					<button className="btn btn-primary btn-round">Round</button>
					<button className="btn btn-primary btn-round">
						<i className="tim-icons icon-gift-2" /> With Icon
					</button>
					<button className="btn btn-primary btn-fab btn-icon btn-round">
						<i className="ni ni-active-40" />
					</button>
					<button className="btn btn-primary btn-neutral">Neutral</button>
				</div>
				<div className="bd-clipboard">
					<span className="btn-clipboard" data-original-title="Copy to clipboard">
						Copy
					</span>
				</div>
				<div className="bd-clipboard">
					<button className="btn-clipboard" data-original-title="Copy to clipboard">
						Copy
					</button>
				</div>
				<div className="highlight">
					<pre>
						<code className="language-html" data-lang="html">
							<span className="nt">&lt;button</span> <span className="na">class=</span>
							<span className="s">"btn btn-primary"</span>
							<span className="nt">&gt;</span>Default
							<span className="nt">&lt;/button&gt;</span>
							{'\n'}
							<span className="nt">&lt;button</span> <span className="na">class=</span>
							<span className="s">"btn btn-primary btn-round"</span>
							<span className="nt">&gt;</span>Round
							<span className="nt">&lt;/button&gt;</span>
							{'\n'}
							<span className="nt">&lt;button</span> <span className="na">class=</span>
							<span className="s">"btn btn-primary btn-round"</span>
							<span className="nt">&gt;</span>
							{'\n'}
							{'  '}
							<span className="nt">&lt;i</span> <span className="na">class=</span>
							<span className="s">"tim-icons icon-gift-2"</span>
							<span className="nt">&gt;&lt;/i&gt;</span> With Icon{'\n'}
							<span className="nt">&lt;/button&gt;</span>
							{'\n'}
							<span className="nt">&lt;button</span> <span className="na">class=</span>
							<span className="s">"btn btn-primary btn-fab btn-icon btn-round"</span>
							<span className="nt">&gt;</span>
							{'\n'}
							{'  '}
							<span className="nt">&lt;i</span> <span className="na">class=</span>
							<span className="s">"ni ni-active-40"</span>
							<span className="nt">&gt;&lt;/i&gt;</span>
							{'\n'}
							<span className="nt">&lt;/button&gt;</span>
							{'\n'}
							<span className="nt">&lt;button</span> <span className="na">class=</span>
							<span className="s">"btn btn-primary btn-neutral"</span>
							<span className="nt">&gt;</span>Neutral
							<span className="nt">&lt;/button&gt;</span>
						</code>
					</pre>
				</div>
				<h2 id="sizes">Sizes</h2>
				<p>
					Fancy larger or smaller buttons? Add <code className="highlighter-rouge">.btn-lg</code> or <code className="highlighter-rouge">.btn-sm</code> for
					additional sizes.
				</p>
				<div className="bd-example" data-example-id>
					<button className="btn btn-primary btn-sm">Small</button>
					<button className="btn btn-primary">Regular</button>
					<button className="btn btn-primary btn-lg">Large</button>
				</div>
				<div className="bd-clipboard">
					<span className="btn-clipboard" data-original-title="Copy to clipboard">
						Copy
					</span>
				</div>
				<div className="bd-clipboard">
					<button className="btn-clipboard" data-original-title="Copy to clipboard">
						Copy
					</button>
				</div>
				<div className="highlight">
					<pre>
						<code className="language-html" data-lang="html">
							<span className="nt">&lt;button</span> <span className="na">class=</span>
							<span className="s">"btn btn-primary btn-sm"</span>
							<span className="nt">&gt;</span>Small
							<span className="nt">&lt;/button&gt;</span>
							{'\n'}
							<span className="nt">&lt;button</span> <span className="na">class=</span>
							<span className="s">"btn btn-primary"</span>
							<span className="nt">&gt;</span>Regular
							<span className="nt">&lt;/button&gt;</span>
							{'\n'}
							<span className="nt">&lt;button</span> <span className="na">class=</span>
							<span className="s">"btn btn-primary btn-lg"</span>
							<span className="nt">&gt;</span>Large
							<span className="nt">&lt;/button&gt;</span>
						</code>
					</pre>
				</div>
				<h2 id="disabled-state">Disabled state</h2>
				<p>
					Make buttons look inactive by adding the <code className="highlighter-rouge">disabled</code> boolean attribute to any{' '}
					<code className="highlighter-rouge">&lt;button&gt;</code> element.
				</p>
				<div className="bd-example" data-example-id>
					<button type="button" className="btn btn-lg btn-primary" disabled>
						Primary button
					</button>
					<button type="button" className="btn btn-secondary btn-lg" disabled>
						Button
					</button>
				</div>
				<div className="bd-clipboard">
					<span className="btn-clipboard" data-original-title="Copy to clipboard">
						Copy
					</span>
				</div>
				<div className="bd-clipboard">
					<button className="btn-clipboard" data-original-title="Copy to clipboard">
						Copy
					</button>
				</div>
				<div className="highlight">
					<pre>
						<code className="language-html" data-lang="html">
							<span className="nt">&lt;button</span> <span className="na">type=</span>
							<span className="s">"button"</span> <span className="na">class=</span>
							<span className="s">"btn btn-lg btn-primary"</span> <span className="na">disabled</span>
							<span className="nt">&gt;</span>Primary button
							<span className="nt">&lt;/button&gt;</span>
							{'\n'}
							<span className="nt">&lt;button</span> <span className="na">type=</span>
							<span className="s">"button"</span> <span className="na">class=</span>
							<span className="s">"btn btn-secondary btn-lg"</span> <span className="na">disabled</span>
							<span className="nt">&gt;</span>Button
							<span className="nt">&lt;/button&gt;</span>
						</code>
					</pre>
				</div>
				<p>
					Disabled buttons using the <code className="highlighter-rouge">&lt;a&gt;</code> element behave a bit different:
				</p>
				<ul>
					<li>
						<code className="highlighter-rouge">&lt;a&gt;</code>s don’t support the <code className="highlighter-rouge">disabled</code> attribute, so you must
						add the <code className="highlighter-rouge">.disabled</code> class to make it visually appear disabled.
					</li>
					<li>
						Some future-friendly styles are included to disable all <code className="highlighter-rouge">pointer-events</code> on anchor buttons. In browsers
						which support that property, you won’t see the disabled cursor at all.
					</li>
				</ul>
				<div className="bd-example" data-example-id>
					<a href="#" className="btn btn-primary btn-lg disabled" role="button" aria-disabled="true">
						Primary link
					</a>
					<a href="#" className="btn btn-secondary btn-lg disabled" role="button" aria-disabled="true">
						Link
					</a>
				</div>
				<div className="bd-clipboard">
					<span className="btn-clipboard" data-original-title="Copy to clipboard">
						Copy
					</span>
				</div>
				<div className="bd-clipboard">
					<button className="btn-clipboard" data-original-title="Copy to clipboard">
						Copy
					</button>
				</div>
				<div className="highlight">
					<pre>
						<code className="language-html" data-lang="html">
							<span className="nt">&lt;a</span> <span className="na">href=</span>
							<span className="s">"#"</span> <span className="na">class=</span>
							<span className="s">"btn btn-primary btn-lg disabled"</span> <span className="na">role=</span>
							<span className="s">"button"</span> <span className="na">aria-disabled=</span>
							<span className="s">"true"</span>
							<span className="nt">&gt;</span>Primary link
							<span className="nt">&lt;/a&gt;</span>
							{'\n'}
							<span className="nt">&lt;a</span> <span className="na">href=</span>
							<span className="s">"#"</span> <span className="na">class=</span>
							<span className="s">"btn btn-secondary btn-lg disabled"</span> <span className="na">role=</span>
							<span className="s">"button"</span> <span className="na">aria-disabled=</span>
							<span className="s">"true"</span>
							<span className="nt">&gt;</span>Link
							<span className="nt">&lt;/a&gt;</span>
						</code>
					</pre>
				</div>
				<p>
					If you want to see more examples and properties please check the official
					<strong>
						<a href="http://getbootstrap.com/docs/4.0/components/buttons/" target="_blank">
							Bootstrap Documentation
						</a>
					</strong>
					.
				</p>
			</Pager>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Buttons);
