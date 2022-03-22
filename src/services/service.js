import axios from "./axios";

const baseUrl = process.env.REACT_APP_API_URL

export const feedback = {
    update: async (value) => {
        try {
            const res = await axios.post('feedback', {
                content: value.feedbackContent,
                applicationId: value.applicationId
            })
            return Promise.resolve(res.data)
        } catch (err) {
            return Promise.reject(err)
        }
    }, create: {}
}