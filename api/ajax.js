import axios from 'axios'
export default function ajax(url = '',data = {},type = 'GET') {
    if (type === 'GET') {
        let queryStr =''
        //Object.keys(data) 得到指定对象自身所有属性名组成的数组
        Object.keys(data).forEach(key =>{
            //[]通用写法  某些地方不能用.
            const value = data[key]
            queryStr += `${key} =${value}&`
        })
        //有参数 username=tom&password=123
        if(queryStr){
            queryStr.substring(0,queryStr.length-1)
            url +="?" + queryStr  //login?username=tom&passwoed=123
        }

        return axios.get(url)
        }else{
            return axios.post(url,data)
        }
}