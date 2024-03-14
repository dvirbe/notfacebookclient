import * as Constant from "../Constants";
import axios from "axios";


export async function GetPostOfUser(userId) {
    try {
        const params={
            userId:userId
        }
        const url =Constant.URL + "get-post-of-user"
        const response = (await axios.get(url, {params}));
        if (response.data.success) {
            return response.data?.allPosts?.map((post) => post)
        } else {
            console.log('get failed:', response.data);
            return [""]
        }
    } catch (error) {
        console.error('Error during get:', error);
    }
}