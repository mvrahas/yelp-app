import axios from 'axios'

export default axios.create({
    baseURL : 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization : 'Bearer ViebTQr7cncRlAB6Hip0PAcXTjpFcurYcwHkUzOC0H7QIJxQODMG9dlnKQDuTGGt2wrCw1jIg6EmBTxUF5m51YFoJskRT87tGx8kZwrhC9f8GuVAeCDBkRnuW8tXYHYx' 
    }
})