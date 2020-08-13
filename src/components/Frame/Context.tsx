import React, { Context } from 'react';

interface IContext {
	document: Document;
	window: Window;
}

let doc: Document;
let win: Window;

if (typeof document !== 'undefined') {
	doc = document;
}

if (typeof window !== 'undefined') {
	win = window;
}

export const FrameContext: Context<IContext> = React.createContext<IContext>({ document: doc, window: win });

export const { Provider: FrameContextProvider, Consumer: FrameContextConsumer }: Context<IContext> = FrameContext;
