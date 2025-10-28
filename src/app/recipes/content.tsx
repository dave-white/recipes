'use client';

import { Typography } from '@material-tailwind/react';
import IngredientTable from './ingredient-tbl';
import Sidenav from './sidenav';
import { Recipe } from './types';
import StepsCarousel from './steps-carousel';

export default function Content({ recipe }: { recipe: Recipe }) {

	const stepsList = recipe.steps.map((step: string, index: number) => (
		<li key={"step" + index.toString()} id={"step" + index.toString()}>{step}</li>
	))

	return (
		<div className='flex h-screen'>
			<Sidenav numIngredients={recipe.ingredients.length} numSteps={recipe.steps.length} />
			<div className="flex flex-col space-y-8 flex-grow overflow-y-auto font-sans justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
				<Typography variant="h1">
					{recipe.name}
				</Typography>
				<section id="ingredients">
					<Typography variant="h2">
						Ingredients
					</Typography>
					<IngredientTable ingredients={recipe.ingredients} />
				</section>
				<section id="steps">
					<Typography variant="h2">
						Steps
					</Typography>
					<ol className="list-decimal list-inside ml-8 my-4 space-y-2">{stepsList}</ol>
					<StepsCarousel steps={recipe.steps} />
				</section>
			</div>
		</div>
	);
}

