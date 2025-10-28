'use client';

import { Card, Typography } from '@material-tailwind/react';
import { Ingredient, Quantity } from './types';
import { ButtonGroup, Button } from '@material-tailwind/react'
import { useState } from 'react';

const INGR_TBL_HEADINGS = ["Name", "Quantity", "Notes"];

enum MEASURE_SYSTEM {
	US,
	Metric
}

function ingredientRows(ingredients: [Ingredient], sys: MEASURE_SYSTEM) {
	return ingredients.map((ingredient: Ingredient) => {
		if (Array.isArray(ingredient.quantity)) {
			let sys_str: string;
			if (sys == MEASURE_SYSTEM.Metric) sys_str = "Metric";
			else sys_str = "US";

			const quantity = ingredient.quantity.find((quantity: Quantity) => quantity.system === sys_str) ?? ingredient.quantity[0];

			return (
				<tr key={ingredient.name} className="even:bg-blue-gray-50/50">
					<td className="p-4">
						<Typography variant="small" color="blue-gray" className="font-normal">
							{ingredient.name}
						</Typography>
					</td>
					<td className="p-4">
						<Typography variant="small" color="blue-gray" className="font-normal">
							{quantity.value + " " + quantity.unit}
						</Typography>
					</td>
					<td className="p-4">
						<Typography variant="small" color="blue-gray" className="font-normal">
							{ingredient.note}
						</Typography>
					</td>
				</tr>
			);
		} else {
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
			);
		}
	});
}

export default function IngredientTable(
	{ ingredients }:
		{ ingredients: [Ingredient] }
) {
	const [sys, setMeasureSys] = useState(MEASURE_SYSTEM.US);

	function handleSetMeasureSys(sys: MEASURE_SYSTEM) {
		setMeasureSys(sys);
	};

	return (
		<div className='flex flex-col gap-4'>
			<div className='flex flex-row justify-between'>
				<Typography variant="h2">
					Ingredients
				</Typography>
				<ButtonGroup>
					<Button onClick={() => handleSetMeasureSys(MEASURE_SYSTEM.US)}>US</Button>
					<Button onClick={() => handleSetMeasureSys(MEASURE_SYSTEM.Metric)}>Metric</Button>
				</ButtonGroup>
			</div>
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
						{ingredientRows(ingredients, sys)}
					</tbody>
				</table>
			</Card>
		</div>
	);
}

