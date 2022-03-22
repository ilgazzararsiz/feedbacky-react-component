import axios from "axios";

export const feedback = {
    list: async () => {
        try {
            const res = await axios.post('GetFeedback/6235d4ffa958df7a5585f047')
            return Promise.resolve(res.data)
        } catch (err) {
            return Promise.reject(err)
        }
    }, create: {}
}