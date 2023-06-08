import { notification } from "antd"
import { useMutation, useQuery } from "react-query"
import { sendFile,getFile } from "../api/file/file.api"

export const useGetFile = (id,onSuccess) => {
    return useQuery("send-file",()=>{
        return getFile(id);
    },{
        onSuccess,
        onError:()=>{
            notification.error({
                message:"The Error happened while receiving the file"
            })
        }
    })
}

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