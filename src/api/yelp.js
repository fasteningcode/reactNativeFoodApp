import axios from 'axios';

export default axios.create({
   baseURL: 'https://api.yelp.com/v3/businesses',
   headers: {
      Authorization: 'Bearer uDiNnelCl_cKwMAwaPH3QZYuq_9CNIHmxivJmHyQoZmSDMIYGTTMpQwB5f5b80Dm8d9cozf7tEXqSTRhcjbDR2a_zqOTtOSBt3ArsaU3ogTQzn8r04D4Ljl5etB2XnYx'
   }
});