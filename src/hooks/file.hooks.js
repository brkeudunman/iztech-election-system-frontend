import { notification } from "antd"
import { useMutation, useQuery } from "react-query"
import { sendFile,getFile, getCoverLetter } from "../api/file/file.api"

export const useGetFile = (id,onSuccess) => {
    return useQuery("get-file",()=>{
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

export const useGetCoverLetter = (path,onSuccess) => {
    return useQuery("get-cover-letter",()=>{
        return getCoverLetter(path);
    },{
        onSuccess,
        onError:()=>{
            notification.error({
                message:"The Error happened while receiving the cover letter"
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