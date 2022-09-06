export const sendData = (data) => {
    return {
        type: 'SEND',
        payload: data
    }
}