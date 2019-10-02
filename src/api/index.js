import { create } from 'apisauce'
import Appconfig from '../AppConfig'
import url from './url'
import config from '../config'

const api = create({
    baseURL: config.baseURL,
    headers: { Accept: 'application/json' },
    timeout: Appconfig.TIME_OUT_REQUEST
})

const showApi = (api,slug) => {
    console.log('----- CONFIG API -------' + JSON.stringify(api,undefined,3));
    console.log('----- URL API-------' + JSON.stringify(slug,undefined,3));
}

const getToken = form => {
    console.log(form)
    showApi(api,url.GET_TOKEN);
    return api.post(url.GET_TOKEN, form)
}

const getList = () => {
    showApi(api,url.GET_LIST_ITEM);
    return api.get(url.GET_LIST_ITEM)
}

export default {
    getToken,
    getList
}