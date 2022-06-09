import axios from 'axios'

export default () => {
    console.log('To server en Api')
    //Axios object that's gonna point to our backend url
    return axios.create({        
        baseURL: 'http://localhost:8081/'
    })
}