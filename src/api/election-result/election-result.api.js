import { get } from "../api"

export const getElectionResult = () => {
    return get("/election-result")
}