import './App.css';
import AnimalShow from "./AnimalShow";
import { useState } from "react";

function getRandomAnimal() {
    const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];

    return animals[Math.floor(Math.random() * animals.length)];
}

function App() {
    const [animals, setAnimals] = useState([]);

    const handleClick = () => {
        setAnimals([...animals, getRandomAnimal()]);
    }

    const renderedAnimals = animals.map((animal, index) => {
        return <AnimalShow type={animal} key={index} />
    })

    return (
        <div className="app">
            <button id="button" onClick={handleClick}>
                Add Animal
            </button>
            <div className='animal-list'>{renderedAnimals}</div>
        </div>
        
    )
}

export default App;