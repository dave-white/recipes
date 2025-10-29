// import fsPromises from 'fs/promises';
// import path from 'path';
import Content from './content';
import { Recipe } from './types';
import postgres from 'postgres';

const sql = postgres(process.env.POSTGRES_URL!, {
	database: 'recipes',
	user: 'recipeuser',
	password: 'cookiesaretasty9876'
});

async function
RecipePage(
{ searchParams }:
	{ searchParams: Promise<{ [key: string]: string | string[] | undefined }> }
) {
	const tmp: string | string[] | undefined = (await searchParams).recipeId;
	let recipeId: string;
	if (Array.isArray(tmp)) recipeId = tmp[0];
	else recipeId = tmp ?? "";
	// const recipeId: string = (await searchParams).recipeId;
	// const filePath = path.join(process.cwd(), "public/recipe-data/" + recipeId + ".json");
	// const jsonData = await fsPromises.readFile(filePath, 'utf8');
	// const jsonData = await sql`
	// SELECT json FROM recipes WHERE id = ${recipeId}
	// `
	const jsonData = await sql<[{json: Recipe}]>`
	SELECT json
	FROM recipes
	WHERE id = ${ recipeId }`;

	const recipe = jsonData[0].json;
	
	return (
		<Content recipe={recipe} />
	)
}

export default RecipePage;

