export const feedback = {
    update: async (value) => {
        try {
            console.log("value", value)
            const res = await fetch(value.baseUrl, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    content: value.feedbackContent,
                    applicationId: value.applicationId
                })
            });
            return Promise.resolve(res)
        } catch (err) {
            return Promise.reject(err)
        }
    }
}