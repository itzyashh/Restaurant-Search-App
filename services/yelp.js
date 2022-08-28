import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer ' + 'ziV94v54RoIAO-Aw-wI5FBQS-iNy8WM_KfxZkNWN3_7GSyGjy-qDKTCy0rz0S0du9ijQZzPDLfRlg1t-slpITuWSXcmBsAItKqLhwnwRlhGO1nhdWfa4R4zNLW2cYnYx'
    }
})