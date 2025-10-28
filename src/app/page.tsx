'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Card, CardHeader, Typography } from '@material-tailwind/react';

const RECIPE_DATA = [
	{
		"id": "skillet-cookie",
		"thumbnail": "/img/cookie-cake.jpg",
		"name": "Skillet Cookie"
	},
	{
		"id": "chicken-marengo",
		"thumbnail": "/img/chicken-marengo.jpg",
		"name": "Chicken Marengo"
	},
	{
		"id": "honey-teriyaki-salmon",
		"thumbnail": "/img/honey-teriyaki-salmon.jpg",
		"name": "Honey Teriyaki Salmon"
	},
]

const recipeCards = RECIPE_DATA.map(recipe => (
	<Link key={recipe.id} href={{pathname: "recipes", query: {recipeId: recipe.id}}}>
		<Card>
			<CardHeader floated={false} className='h-50'>
				<Image src={recipe.thumbnail} alt={recipe.name} width={250} height={250} />
			</CardHeader>
			<Typography variant='h4' className='mb-2'>
				{recipe.name}
			</Typography>
		</Card>
	</Link>
))

export default function Home() {
	return (
		<div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
			<main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
				<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
					{recipeCards}
				</div>
			</main>
		</div>
	);
}

