'use client';

import React from "react";
import {
	Card,
	Typography,
	List,
	ListItem,
	ListItemPrefix,
	ListItemSuffix,
	Chip,
	Accordion,
	AccordionHeader,
	AccordionBody,
} from "@material-tailwind/react";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

						
function genStepList(numSteps: number) {
	const stepListItems = [];
	for (let i: number = 1; i <= numSteps; i++) {
		stepListItems.push(
			<Link key={"#step"+i.toString()} href={"#step"+i.toString()}>
			<ListItem>
				<ListItemPrefix>
					<ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
				</ListItemPrefix>
				Step {i}
			</ListItem>
			</Link>
		);
	}
	return stepListItems;
}

export default function
	Sidenav(
		{ numIngredients, numSteps }:
			{ numIngredients: number, numSteps: number }
	) {
	const [open, setOpen] = React.useState<number>(0);

	const handleOpen = (value: number) => {
		setOpen(open === value ? 0 : value);
	};

	return (
		<div className="sticky top-0">
		<Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
			<div className="mb-2 p-4">
				<Typography variant="h5" color="blue-gray">
					Contents
				</Typography>
			</div>
			<List>
				<ListItem>
					<Link href="#ingredients">Ingredients</Link>
						<ListItemSuffix>
							<Chip value={numIngredients} size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
						</ListItemSuffix>
				</ListItem>
				<Accordion
					open={open === 1}
					icon={
						<ChevronDownIcon
							strokeWidth={2.5}
							className={`mx-auto h-4 w-4 transition-transform ${open === 1 ? "rotate-180" : ""}`}
						/>
					}
				>
					<ListItem className="p-0" selected={open === 1}>
						<AccordionHeader onClick={() => handleOpen(1)} className="border-b-0 p-3">
							<Typography color="blue-gray" className="mr-auto font-normal">
								<Link href="#steps">Steps</Link>
							</Typography>
						</AccordionHeader>
						<ListItemSuffix>
							<Chip value={numSteps} size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
						</ListItemSuffix>
					</ListItem>
					<AccordionBody className="py-1">
						<List className="p-0">
							{genStepList(numSteps)}
						</List>
					</AccordionBody>
				</Accordion>
			</List>
		</Card>
		</div>
	);
}

