export interface Quantity {
	system: string,
	value: number,
	unit: string
};

export interface Ingredient {
	name: string,
	note: string,
	quantity: Array<Quantity> | number
};

export interface Recipe {
	name: string,
	ingredients: [Ingredient],
	steps: [string]
}

