export const handler = async event => {
    console.log('RECEIVED event: ', JSON.stringify(event, null, 2));
    event.response.autoConfirmUser = true;
    event.response.autoVerifyEmail = true;
    console.log('RETURNED event: ', JSON.stringify(event, null, 2));
    return event;
};