/*
* Defines types for text inputs
* */
export enum InputType {
	text = 'text',
	search = 'search'
}

/**
 * @param val
 * @return whether an input is a TextInputType.
 */
export function isInputType( val: unknown ): val is InputType {
	return Object.keys( InputType ).some(
		( key ) => InputType[ key as keyof typeof InputType ] === val
	);
}
