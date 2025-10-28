# Recipe site

A "web" app with the currently primary purpose of serving recipes over the home 
LAN.  A primary overarching aim is to have a UI responsive to use on the TV, 
tablet and smartphones for easy viewing in or from the kitchen.  For now each 
recipe is stored in a JSON file, with the plan being to move these into a 
database to straightforwardly facilitate search/filtering.

## License

All original contents of this repository are provided under the terms of the 
[MIT License](https://opensource.org/license/MIT), the text of which is 
reproduced here in [LICENSE.md](./LICENSE.md).

## Design goals

-  Facilitate the popping or filtering out of key recipe components, e.g. an 
individual step of the instructions or a subset of ingredients, so that these 
may be displayed more prominently and legibly to aid in review while 
simultaneously performing tasks in the kitchen.

-  Easy jump navigation between related elements via buttons and links ; e.g. 
from an instruction step to the ingredients.

-  Do and cache as much as practicable on the client side to speed navigation, 
especially on the page for individual recipes.

## Structure

(Everything is under/relative to `./src/`.)  The main page, `app/page.tsx` 
serves to list recipes, each of which links to a recipe page.  Currently the 
latter is `app/recipes/<recipe-name>/page.tsx`, but this should be bumped up a 
level in the tree and genericized, so that it functions in the manner of an SPA.  
The components making up the recipe page are under `app/recipes/`.  Currently 
there is a `content.tsx` file there to break out and contain everything that 
needs to have the `'use client'` directive.

## Dependencies

-  [Next.js](https://nextjs.org/)
-  [Tailwind CSS](https://tailwindcss.com/)
-  [Material Tailwind](https://www.material-tailwind.com/)

