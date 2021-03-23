import {useState, useEffect} from 'react'
import yelp from '../api/yelp'



export default function () {


    let [data, updateData] = useState([])
    let [errorMessage, setErrorMessage] = useState('')
    
    const searchData = async function (location) {
    
    
        try {
    
            const response = await yelp.get(`/search`, {
                params : {
                    limit : 50,
                    location
                }
            })

            updateData(response.data.businesses)
    
        } catch (e) {
            setErrorMessage('Something went wrong')
        }
      
    }
    
    
    useEffect(()=>{searchData('New York')},[])


    return [data, errorMessage, searchData]
}