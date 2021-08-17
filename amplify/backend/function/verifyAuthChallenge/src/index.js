export const handler = async event => {
    console.log('RECEIVED event: ', JSON.stringify(event, null, 2));
    const expectedAnswer = event.request.privateChallengeParameters.secretLoginCode;
    if (event.request.challengeAnswer === expectedAnswer) {
        event.response.answerCorrect = true;
    } else {
        event.response.answerCorrect = false;
    }
    console.log('RETURNED event: ', JSON.stringify(event, null, 2));
    return event;
};