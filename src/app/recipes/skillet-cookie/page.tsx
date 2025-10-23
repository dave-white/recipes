import fsPromises from 'fs/promises';
import path from 'path';
import Sidenav from '../sidenav';
import IngredientTable from '../ingredient-tbl';

const filePath = path.join(process.cwd(), 'public/skillet-cookie.json');
const jsonData = await fsPromises.readFile(filePath, 'utf8');
const recipe = JSON.parse(jsonData);

const stepsList = recipe.steps.map((step: string, index: number) => (
	<li key={"step" + index.toString()}>{step}</li>
))

export default function SkilletCookie() {
	return (
		<div className='flex'>
			<Sidenav numIngredients={recipe.ingredients.length} numSteps={recipe.steps.length} />
			<div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
				<h1>{recipe.name}</h1>
				<section id="ingredients">
					<h2>Ingredients</h2>
					<IngredientTable ingredients={recipe.ingredients} />
				</section>
				<section id="steps">
					<h2>Steps</h2>
					<ol className="list-inside list-decimal">{stepsList}</ol>
				</section>
			</div>
		</div>
	)
}

