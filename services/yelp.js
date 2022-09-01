import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer ' + 'TDFvTb9lPB3-0p69-0nI4rohGg7-jzEN8QIMMk-19XdgwO40Geh2JlY9ubOKnS4ChvueYnQygNtd0YaS2fUn1dJonuQhgX8Bj9-fwbvxHBIg5zF8vcNnuUFfi8sMY3Yx'
    }
})