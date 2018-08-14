
//包含n个借口请求函数   每个函数返回值为promise
//注册
import ajax from './ajax'
export const reqRegister=({username,passwoed,type}) => ajax('/redister',{username,passwoed,type})
//登录
export const reqLogin = (username,passwoed)=>ajax('./login',{username,passwoed},'POST')
