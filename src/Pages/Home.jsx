import "../App.css"
import React, { useState } from "react";

function Home() {

    const [bookType, setBookType] = useState('hardcover'); // Default to hardcover
    const [genre, setGenre] = useState('fiction'); // Default to fiction
    const [data, setData] = useState(null)

    async function apiCall() {
        
        fetch(`https://api.nytimes.com/svc/books/v3/lists/current/${bookType}-${genre}.json?api-key=Kd3XePjEtptah0ZB2W6AEns1ODTIOzxL`)
            .then(response => response.json())
            .then(apiData => {
                console.log(apiData, "API Data");
                setData(apiData)
            })
            .catch(error => console.log(error));
    };

    const handleButtonClick = () => {
        // Trigger the API call when the button is clicked
        console.log("clicked")
        apiCall();
    };

    return (
        <>
            <h1>Check out the New York Times Best Seller's Lists for Books!</h1>

            <div className="bookWrapper">
                {/* Dropdown for book type */}
                <h3>Paperback or Hardcover?</h3>
                <label>Choose a cover type: </label><br />
                <select value={bookType} onChange={(e) => setBookType(e.target.value)}>
                    <option value="hardcover">Hardcover</option>
                    <option value="paperback">Paperback</option>
                </select><br />

                {/* Dropdown for genre */}
                <h3>Fiction or Nonfiction?</h3>
                <label>Select a Category: </label><br />
                <select value={genre} onChange={(e) => setGenre(e.target.value)}>
                    <option value="fiction">Fiction</option>
                    <option value="nonfiction">Non-Fiction</option>
                </select><br />

                {/* Button with onClick functionality */}
                <div className="centerButton">
                    <button className="submitForm" type="button" onClick={handleButtonClick}>Submit</button>
                </div>
            </div>



            {/* This is a conditional rendering check...It makes sure that the code inside the block is only executed if data is truthy. this code maps through the array of books obtained from the API response and renders a set of JSX elements for each book, including the book's rank, image, and title, wrapped in a styled <div>. */}
            <div className="displayBooks">
                {data &&
                    data.results.books.map((item, key) => {
                        return (
                            <div className="singleBookWrapper"
                                key={key}>
                                <h2>{item.rank}</h2>
                                <img src={item.book_image} alt={item.title} />
                                <h3>{item.title}</h3>
                            </div>
                        );
                    })
                }
            </div>


        </>
    );
}

export default Home;
