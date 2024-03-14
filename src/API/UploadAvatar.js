import * as Constant from "../Constants";
import axios from "axios";

export async function UploadAvatar(id, path) {
    try {
        const params = {

            id: id,
            path: path
        }
        const url = Constant.URL + "uploadAvatar";
        axios.defaults.withCredentials = true;
        const response = (await axios.get(url, {params}));
        console.log("test");
        if (response.data.success) {

            console.log('Create successful!');
        } else {
            console.log('Create failed:', response.data);
        }
    } catch (error) {
        console.error('Error during Create:', error);
    }
}