export type PropertiesOf<T> = {
	// biome-ignore lint/complexity/noBannedTypes: Necessary to identify functions
	[K in keyof T as T[K] extends Function ? never : K]: T[K];
};

export type ConstructableValuesOf<T> = Readonly<Partial<PropertiesOf<T>>>;
