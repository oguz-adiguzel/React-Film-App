import axios from "axios";

export class MovielistServices{
    baseUrl = 'http://localhost:3001/movies/';
    async getMovielist() {
        const response = await axios.get(this.baseUrl);
        return response.data;
    }

    async addMovies(model){
        await axios.post(this.baseUrl,model)
    }

    async deleteMovies(id){
        await axios.delete(this.baseUrl + id)
    }
}