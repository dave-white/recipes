'use client';

import { Button, Typography } from '@material-tailwind/react';
import IngredientTable from './ingredient-tbl';
import Sidenav from './sidenav';
import { Recipe } from './types';
import StepsCarousel from './steps-carousel';
import Link from 'next/link';

export default function Content({ recipe }: { recipe: Recipe }) {

	const stepsList = recipe.steps.map((step: string, index: number) => (
		<li key={"step" + index.toString()} id={"step" + index.toString()}>{step}</li>
	))

	return (
		<div className='flex h-screen'>
			<Sidenav numIngredients={recipe.ingredients.length} numSteps={recipe.steps.length} />
			<div className="flex flex-col space-y-8 flex-grow overflow-y-auto font-sans justify-items-center min-h-screen p-8 pb-20 gap-8 sm:p-20 max-w-[80rem]">
				<div className='flex flex-row justify-between'>
					<Typography variant="h1">
						{recipe.name}
					</Typography>
					<Link href="/"><Button>Home</Button></Link>
				</div>
				<section id="ingredients">
					<IngredientTable ingredients={recipe.ingredients} />
				</section>
				<section id="steps">
					<div className='flex flex-row justify-between'>
						<Typography variant="h2">
							Steps
						</Typography>
						<StepsCarousel steps={recipe.steps} />
					</div>
					<ol className="list-decimal list-inside ml-8 my-4 space-y-2">{stepsList}</ol>
				</section>
			</div>
		</div>
	);
}

