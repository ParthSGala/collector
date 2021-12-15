const USERS_URL = "http://localhost:8080/api/users"
const ANIMAL_URL = "http://localhost:8080/api/animals"
const ORIGIN_URL = "http://localhost:8080/api/origin"

export const createAnimalsForUser = (userId, animal) => {
    return fetch(`${USERS_URL}/${userId}/animals`, {
        method: 'POST',
        body: JSON.stringify(animal),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())
}

export const createAnimalsForOrigin = (originId, animal) => {
    return fetch(`${ORIGIN_URL}/${originId}/animals`, {
        method: 'POST',
        body: JSON.stringify(animal),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())
}

export const findAnimalsForUser = (userId) => {
    return fetch(`${USERS_URL}/${userId}/animals`)
        .then(response => response.json())
}

export const findAnimalsForOrigin = (originId) => {
    return fetch(`${ORIGIN_URL}/${originId}/animals`)
        .then(response => response.json())
}


export const findAnimalById = (id) => {
    return fetch(`${ANIMAL_URL}/${id}`)
        .then(response => response.json())
}

export const updateAnimal = (id, user) => {
    return fetch(`${ANIMAL_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(user),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())
}

const deleteAnimal = (id) => {
    return fetch(`${ANIMAL_URL}/${id}`, {
        method: "DELETE"
    })
}

export default {
    createAnimalsForUser,
    findAnimalsForUser,
    createAnimalsForOrigin,
    findAnimalsForOrigin,
    findAnimalById,
    updateAnimal,
    deleteAnimal
}
