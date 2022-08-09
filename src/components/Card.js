import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";

import "../styles/card.scss";

import Dish from "./Dish";

const style = {
	width: "800px",
	height: "800px",
	backgroundColor: "white",
	position: "absolute",
	zIndex: 100,
};

const dishDetail = (mealId) => {
	return (
		<div style={style}>
			<Dish mealId={mealId} />
			{mealId}
		</div>
	);
};

const Card = (props) => {
	const [selectedId, setSelectedId] = useState(null);

	return (
		<>
			<motion.div className="dishCard" layoutId={props.id} onClick={() => setSelectedId(props.id)} >
				<img src={props.dish.strMealThumb} alt={props.dish.strMealThumb} />

				<div className="dishTitle">
					<h1>{props.dish.strMeal}</h1>
					<h5>#{props.dish.strCategory}</h5>
				</div>
				<div className="text">
					<p>{props.dish.strInstructions}</p>
				</div>
			</motion.div>

			<AnimatePresence>
				{selectedId && (
					<motion.div layoutId={selectedId} className="dishCard-open">
						<img src={props.dish.strMealThumb} alt={props.dish.strMealThumb} />

						<div className="dishTitle">
							<h1>{props.dish.strMeal}</h1>
							<h5>#{props.dish.strCategory}</h5>
						</div>
						<div className="text">
							<p>{props.dish.strInstructions}</p>
						</div>
						<motion.button onClick={() => setSelectedId(null)}>Close</motion.button>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
};

export default Card;
