import axios from "axios"

export class UserlistService {
    baseUrl = "http://localhost:3001/userList/";

    async getUserlist() {
        const response = await axios.get(this.baseUrl);
        return response.data;
    }
    async postUserList(model){
        await axios.post(this.baseUrl,model);
    }
}