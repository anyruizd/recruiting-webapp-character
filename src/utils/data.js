const URL = 'https://recruiting.verylongdomaintotestwith.ca/api/{{anyruizd}}/character';

export async function getCharacter() {
    const data = await fetch(URL);
    return await data.json();
}

export async function saveCharacter(character) {
    const data = await fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ character })
    });
    return await data.json();
}