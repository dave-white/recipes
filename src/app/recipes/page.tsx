import fsPromises from 'fs/promises';
import path from 'path';
import Content from './content';
import { Recipe } from './types';

async function
RecipePage(
{ searchParams }:
	{ searchParams: Promise<{ [key: string]: string | string[] | undefined }> }
) {
	const recipeId = (await searchParams).recipeId;
	const filePath = path.join(process.cwd(), "public/recipe-data/" + recipeId + ".json");
	const jsonData = await fsPromises.readFile(filePath, 'utf8');
	const recipe: Recipe = JSON.parse(jsonData);

	return (
		<Content recipe={recipe} />
	)
}

export default RecipePage;

