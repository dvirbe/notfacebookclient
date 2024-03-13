import * as Constant from "../Constants";
import axios from "axios";

export async function CreateAccount(username, password,repeat) {
    try {
        const params={
            username:username,
            password:password,
            repeat:repeat
        }
        const url =Constant.url + "register"


        const response = (await axios.get(url, {params}));

        if (response.data.success) {

            console.log('Create successful!');
        } else {
            console.log('Create failed:', response.data);
        }
    } catch (error) {
        console.error('Error during Create:', error);
    }
}