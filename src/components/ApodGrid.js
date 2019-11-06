import React, {useState, useEffect} from 'react';
import ApodCard from './ApodCard';
import axios from 'axios'

function ApodGrid () {
    const [apod, setApod] = useState([]);

    useEffect(() => {
        axios.get('https://api.na.gov/planetary/apod?api_key=DEMO_KEY')
        .then(response => {
            setApod(response.data);
        })
        .catch(err => {
            console.log('No data', err)
        })
    }, [])
    return (
        <div>
            <ApodCard 
                imgUrl = {apod.url}
                title = {apod.title}
                date = {apod.date}
                desc = {apod.explanation}
            />
        </div>
    )
}

export default ApodGrid;