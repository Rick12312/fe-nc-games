import axios from 'axios'

const gamesAPI = axios.create({
    baseURL: 'https://backend-northcoders-games.herokuapp.com/api'
})

export const getReviews = async () => {
    const { data } = await gamesAPI.get('/reviews')
    return data.reviews;
}

export const getUsers = async () => {
    const { data } = await gamesAPI.get('/users')
    return data.users;
}

export const getCategories = async () => {
    const { data } = await gamesAPI.get('/categories')
    return data.categories
}

export const getReviewsById = async (review_id) => {
    const { data } = await gamesAPI.get(`/reviews/${review_id}`)
    return data.review;
}

export const getReviewsByCategory = async (category) => {
    const { data } = await gamesAPI.get(`/reviews/?category=${category}`)
    return data.reviews
}

export const getUsersByUsername = async (username) => {
    const { data } = await gamesAPI.get(`/users/${username}`)
    return data.user
}

export const getReviewsBySort = async (sort) => {
    const { data } = await gamesAPI.get(`/reviews/?sort_by=${sort}`)
    return data.reviews
}

export const patchVotes = async (review_id) => {
    const { data } = await gamesAPI.patch(`/reviews/${review_id}`, { inc_votes : 1 })
    return data.review
}

export const getCommentsByReviewId = async (review_id) => {
    const { data } = await gamesAPI.get(`/reviews/${review_id}/comments`)
    console.log(data.comments)
    return data.comments
}
