export function testAction() {
    console.log('dispatched');
    return {
        type: 'YOUR_ACTIONS_HERE',
        payload: "Actions are pretty cool!",
    };
}