const ORIGIN_URL = "http://localhost:8080/api/origin"

export const createOrigin = (origin) =>
    fetch(COURSE_URL, {
        method: 'POST',
        body: JSON.stringify(origin),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())

export const findAllOrigin = () =>
    fetch(ORIGIN_URL)
        .then(response => response.json())

export const findOriginById = (id) =>
    fetch(`${ORIGIN_URL}/${id}`)
        .then(response => response.json())

export const updateOrigin = (id, origin) =>
    fetch(`${ORIGIN_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(origin),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())

const deleteOrigin = (id) =>
    fetch(`${ORIGIN_URL}/${id}`, {
        method: "DELETE"
    })

export default {
    createOrigin,
    findAllOrigin,
    findOriginById,
    updateOrigin,
    deleteOrigin
}
