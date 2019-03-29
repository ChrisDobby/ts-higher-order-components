const things = ["Thing 1", "Thing 2", "Thing 3"];

function getThings() {
    return new Promise<string[]>(resolve => {
        setTimeout(() => resolve(things), 200);
    });
}

export default getThings;
