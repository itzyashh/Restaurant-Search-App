import { useEffect, useState } from "react";
import yelp from "../../services/yelp";

export default () => {
    const [restaurants, setRestaurants] = useState([])
    const [error, setError] = useState('')
    const searchApi = async searchTerm => {
        console.log("s");
        try {
            const res = await yelp.get('/search', {
                params: {
                    term: searchTerm,
                    limit: 20,
                    location: 'san jose'
                }
            }
            )
            setRestaurants(res.data.businesses)
            setError('')
        } catch (err) {
            setError('Error in server')
        }

    }
    useEffect(() => {
        searchApi('Pizza')
    }, [])

    return [searchApi, error, restaurants]
}