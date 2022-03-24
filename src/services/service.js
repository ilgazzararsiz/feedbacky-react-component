import axios from 'axios';

export const feedback = {
    update: async (value) => {
        try {
            const res = await axios.post(value.baseUrl, {
                content: value.feedbackContent,
                applicationId: value.applicationId
            })
            return Promise.resolve(res.data)
        } catch (err) {
            return Promise.reject(err)
        }
    }
}