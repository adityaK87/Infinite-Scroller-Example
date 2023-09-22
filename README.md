# Products With Infinite Scrolling

## 📌 Introduction

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

This React application is designed to demonstrate the implementation of infinite scrolling using a mock [API](https://dummyjson.com/). The primary objective of this project is to create a dynamic user interface that fetches and displays a list of items from the mock API and seamlessly loads more items as the user scrolls down.

## 🚀 View Live Demo

<img src="https://img.shields.io/badge/website-up-greene" />

<pre><center><a href="https://infinite-scroller-example.vercel.app/"><b>infinite-scroller-example.vercel.app/</b></a></center></pre>

## Key Features

1. API Integration: We use a mock API endpoint (https://dummyjson.com/products?limit=${limit}) to fetch a list of items. The API accepts one query parameters,that is limit, to control the pagination of items.

2. Infinite Scrolling: As the user scrolls down the page, the application dynamically loads the next set of items, ensuring a seamless and continuous browsing experience. We load 10 items at a time to balance performance and user experience.

3. Item Details: Users can click on individual items to view more details. This action opens a modal or a separate page with comprehensive information about the selected item, enhancing the user's ability to explore further.

## 👨‍💻 Tech Stack Used

-   React
-   Fetch Api
-   CSS: For styling the user interface and creating an appealing design.
-   Mock API: A simulated [API](https://dummyjson.com/) that provides mock data for the application.

## 🛠️ Installation Steps

Star and Fork the Repo 🌟 and this will keep us motivated.

1. Clone the repository

```bash
git clone https://github.com/adityaK87/Infinite-Scroller-Example.git
```

2. Change the working directory

```bash
cd Infinite-Scroller-Example
```

3. Install dependencies

```bash
npm install
```

4. Run the app

```bash
npm run start
```

### Happy Hacking
