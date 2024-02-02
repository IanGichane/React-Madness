
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function VanDetail() {
    const params = useParams()
    console.log(params)

    const [dog, setDog] = useState(null)
    useEffect(() => {
        fetch(`https://api.thecatapi.com/v1/images/${params.id}`)

            .then(response => response.json())
            .then(data => setDog(data))

    }, [params.id])


    return (

        <div className="van-detail-container">
            {dog ? (<div className="van-detail-container">
                <img src={dog.url} alt={`Dog ${dog.id}`} />
            </div>) : <h2>Loading...</h2>}

        </div>

    )
}

export default VanDetail
