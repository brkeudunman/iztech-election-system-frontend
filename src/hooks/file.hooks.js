import { notification } from "antd"
import { useMutation } from "react-query"
import { sendFile } from "../api/file/file.api"


export const useSendFile = (onSuccess) => {
    return useMutation("send-file",(file)=>{
        return sendFile(file);
    },{
        onSuccess,
        onError:()=>{
            notification.error({
                message:"The Error happened while sending the file"
            })
        }
    })
}