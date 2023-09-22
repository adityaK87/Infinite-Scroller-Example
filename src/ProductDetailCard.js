import React from "react";
import "./ProductDetailCard.css";
import { useLocation } from "react-router-dom";

const ProductDetailCard = () => {
	// Get product data from the route location
	const location = useLocation();
	const ProductDetails = location.state?.data;

	// Destructure product data to access its properties
	const {
		brand,
		category,
		description,
		discountPercentage,
		price,
		rating,
		thumbnail,
		title,
	} = ProductDetails;

	// Create an array of star elements based on the rating
	const stars = [];
	for (let i = 1; i <= 5; i++) {
		const starClass = i <= Math.floor(rating) ? "star filled" : "star";
		stars.push(<span key={i} className={starClass}></span>);
	}

	return (
		<section className='box'>
			<div className='content'>
				<div className='left'>
					{/* Product Thumbnail */}
					<img src={thumbnail} alt={title} className='product_img' />

					{/* Product Rating */}
					<div className='rating' style={{ textAlign: "center" }}>
						<span>{Math.floor(rating)}/5</span>
						{stars}
					</div>
				</div>

				<div className='right'>
					<div className='product_description'>
						<div className='product_details'>
							{/* Product Title */}
							<h4 className='title'>{title}</h4>

							{/* Brand */}
							<p className='discription'>{brand}</p>

							{/* Price and Discount */}
							<p className='price'>
								${price}
								<span className='price_original'>
									$
									{Math.floor(
										price +
											(price * discountPercentage) / 100
									)}
								</span>
								<span className='offer'>
									{" "}
									{Math.floor(discountPercentage)}% OFF
								</span>
							</p>

							<p className='other'>inclusive of all taxes</p>

							<h4>PRODUCT DESCRIPTION</h4>

							{/* Product Description */}
							<p>{description}</p>

							{/* Additional Product Details */}
							<p>
								<span className='highlight'>
									Country of Origin -
								</span>{" "}
								India
							</p>
							<p>
								<span className='highlight'>Packed By -</span>{" "}
								S.K. INTERNATIONAL AJUDD PURAM BAGDA TAHSIL AGRA
								U.P.
								<span className='special'>
									282001, 9759860599, sheela.woakers@gmail.com
								</span>
							</p>
							<p>
								<span className='highlight'>Commodity -</span>{" "}
								{category}
							</p>
							<p>
								<span className='highlight'>Sold By -</span>{" "}
								Next Tree Private Limited
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ProductDetailCard;
