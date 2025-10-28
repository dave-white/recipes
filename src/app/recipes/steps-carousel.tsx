'use client';

import { Button, IconButton, Carousel, Dialog, DialogBody, DialogHeader, Typography } from "@material-tailwind/react";
import { useState } from "react";

function listSteps(steps: [string]) {
	return steps.map((step, idx) =>
		<div key={"step" + (idx+1)} className="relative h-full w-full">
			<div className="absolute inset-0 grid h-full w-full place-items-center">
				<div className="w-4/5 text-center md:w-3/4">
					<Typography
						variant="h2"
						color="black"
						className="mb-4 text-3xl md:text-4xl lg:text-5xl"
					>
						{"Step " + (idx+1)}
					</Typography>
					<Typography
						variant="lead"
						color="black"
						className="mb-12 text-3xl md:text-4xl lg:text-5xl"
					>
						{step}
					</Typography>
				</div>
			</div>
		</div>
	);
}

function StepsCarousel({ steps }: { steps: [string] }) {

	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(!open);

	return (
		<div>
			<Button onClick={handleOpen}>Open</Button>
			<Dialog open={open} handler={handleOpen} size="lg">
				<DialogHeader>
					<Typography variant="h1">
						Recipe instructions
					</Typography>
				</DialogHeader>
				<DialogBody>
					<div className="relative h-full w-full">
						<Carousel className="rounded-xl h-[calc(60vh)] w-full"
							prevArrow={({ handlePrev }) => (
								<IconButton
									variant="text"
									color="black"
									size="lg"
									onClick={handlePrev}
									className="!absolute top-2/4 left-4 -translate-y-2/4"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth={2}
										stroke="currentColor"
										className="h-6 w-6"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
										/>
									</svg>
								</IconButton>
							)}
							nextArrow={({ handleNext }) => (
								<IconButton
									variant="text"
									color="black"
									size="lg"
									onClick={handleNext}
									className="!absolute top-2/4 !right-4 -translate-y-2/4"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth={2}
										stroke="currentColor"
										className="h-6 w-6"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
										/>
									</svg>
								</IconButton>
							)}
						>
							{listSteps(steps)}
						</Carousel>
					</div>
				</DialogBody>
			</Dialog>
		</div>
	);
}

export default StepsCarousel;

