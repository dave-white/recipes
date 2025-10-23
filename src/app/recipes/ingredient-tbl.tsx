'use client';

import { Card, Typography } from '@material-tailwind/react';

interface Quantity {
	system: string,
	value: number,
	unit: string
};

interface Ingredient {
	name: string,
	note: string,
	quantity: Array<Quantity> | number
};

function ingredientRows(ingredients: [Ingredient]) {
	return ingredients.map((ingredient: Ingredient) => {
		if (Array.isArray(ingredient.quantity))
			return (
				<tr key={ingredient.name} className="even:bg-blue-gray-50/50">
					<td className="p-4">
						<Typography variant="small" color="blue-gray" className="font-normal">
							{ingredient.name}
						</Typography>
					</td>
					<td className="p-4">
						<Typography variant="small" color="blue-gray" className="font-normal">
							{ingredient.quantity[0].value + " " + ingredient.quantity[0].unit}
						</Typography>
					</td>
					<td className="p-4">
						<Typography variant="small" color="blue-gray" className="font-normal">
							{ingredient.note}
						</Typography>
					</td>
				</tr>
			);
		else
			return (
				<tr key={ingredient.name} className="even:bg-blue-gray-50/50">
					<td className="p-4">
						<Typography variant="small" color="blue-gray" className="font-normal">
							{ingredient.name}
						</Typography>
					</td>
					<td className="p-4">
						<Typography variant="small" color="blue-gray" className="font-normal">
							{ingredient.quantity}
						</Typography>
					</td>
					<td className="p-4">
						<Typography variant="small" color="blue-gray" className="font-normal">
							{ingredient.note}
						</Typography>
					</td>
				</tr>
			)
	});
}

const INGR_TBL_HEADINGS = ["Name", "Quantity", "Notes"];

export default function IngredientTable({ ingredients }: { ingredients: [Ingredient] }) {
	return (
		<Card className="h-full w-full overflow-scroll">
			<table className="w-full min-w-max table-auto text-left">
				<thead>
					<tr>
						{INGR_TBL_HEADINGS.map((head) => (
							<th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
								<Typography
									variant="small"
									color="blue-gray"
									className="font-normal leading-none opacity-70"
								>
									{head}
								</Typography>
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{ingredientRows(ingredients)}
				</tbody>
			</table>
		</Card>
	);
}
