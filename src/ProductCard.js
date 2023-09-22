import React from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";

// Card component that displays a thumbnail, title, description, and an explore button.
const ProductCard = ({ product }) => {
	// Destructure the product object to access its properties
	const { id, thumbnail, title, description } = product;

	return (
		<div className='grid__item'>
			<div className='card'>
				{/* Product Thumbnail */}
				<img
					className='card__img'
					src={thumbnail}
					alt={title}
					loading='lazy'
				/>

				<div className='card__content'>
					{/* Product Title */}
					<h1 className='card__header'>{title}</h1>

					{/* Product Description */}
					<p className='card__text'>{description}</p>

					{/* Explore Button */}
					{/* Link to the product detail page with the product's ID */}
					<Link
						state={{ data: product }} // Passing product data to the product detail page
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
