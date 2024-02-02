
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export default function Vans() {
    const [dogs, setDogs] = useState([])
    useEffect(() => {
        fetch('https://api.thecatapi.com/v1/images/search?limit=10')
            .then(response => response.json())
            .then(data => setDogs(data))

    }, [])

    const dogElements = dogs.map(dog => (
        <div key={dog.id} className="van-tile" >

            <Link to={`/vans/${dog.id}`}>
            <img src={dog.url} alt={`Dog ${dog.id}`} />
        </Link>
            
        </div >
    ));

    return (

        <div className="van-list-container">
            <div className="van-list">
                {dogElements}
            </div>
        </div>

    )
}
