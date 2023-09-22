import React from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";
// Card component that displays a thumbnail, title, description, and an explore button.
const ProductCard = ({ product }) => {
	const { id, thumbnail, title, description } = product;
	return (
		<div className='grid__item'>
			<div className='card'>
				<img
					className='card__img'
					src={thumbnail}
					alt={title}
					loading='lazy'
				/>
				<div className='card__content'>
					<h1 className='card__header'>{title}</h1>
					<p className='card__text'>{description}</p>
					<Link
						state={{ data: product }}
						className='card__btn'
						to={`/product/${id}`}>
						Explore <span>&rarr;</span>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
