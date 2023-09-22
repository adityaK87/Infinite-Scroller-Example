import React from "react";
import Card from "./ProductCard";
import "./ProductCard.css";
import InfiniteScroll from "react-infinite-scroll-component";

// CardList component that renders a list of cards based on the provided products data.
const CardList = ({ products, limit, setLimit, fetchData }) => {
	// Function to fetch more data when scrolling
	const fetchMoreData = () => {
		setLimit(limit + 10);
		fetchData();
	};

	console.log("products", products);
	return (
		<>
			<h1
				style={{
					textAlign: "center",
					marginBottom: "20px",
				}}>
				Products with infinite scrolling
			</h1>
			<InfiniteScroll
				dataLength={limit - 10} // Subtract 10 to ensure proper data length calculation
				next={fetchMoreData} // Function to call when reaching the end of the scroll
				hasMore={limit !== products.total} // Determine if there's more data to load
				loader={<h1>Loading...</h1>} // Loading indicator while fetching more data
			>
				<div className='grid'>
					{/* Map through the products array and render each product card */}
					{products.products?.map((product) => {
						return <Card key={product.id} product={product} />;
					})}
				</div>
			</InfiniteScroll>
		</>
	);
};

export default CardList;
