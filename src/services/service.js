import axios from "./axios";

const baseUrl = process.env.REACT_APP_API_URL

export const feedback = {
    update: async (value) => {
        try {
            console.log("helloo", value.feedbackContent)
            const res = await axios.post('feedback', {
                content: value.feedbackContent
            })
            return Promise.resolve(res.data)
        } catch (err) {
            return Promise.reject(err)
        }
    }, create: {}
}