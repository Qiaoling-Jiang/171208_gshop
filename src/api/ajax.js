//向外暴露

/*
* 返回值：promise对象(异步返回的数据是：reponse.data)
*
* */
import axios from 'axios'
export default function ajax(url , data = {},type='GET') {

  //resolve,reject是函数，接收函数的函数叫高阶函数
  return new Promise(function (resolve,reject) {
  //  执行异步ajax请求
  //  成功了调用resolve()，失败了调用reject()

    let promise
    if (type==='GET'){
      let dataStr = ''   //数据拼接字符串
      Object.keys(data).forEach(key=>{
        dataStr += key+ '='+data[key] +'&'
      })
      if (dataStr!==''){
        dataStr = dataStr.substring(0,dataStr.lastIndexOf('&'))
        url = url +'?'+dataStr
      }
      //发送get请求
      promise = axios.get(url)

    }else {
      //  发送post请求
      promise = axios.post(url,data)
    }
    promise.then(function (reponse) {
    //  成功的回调函数resolve()
      resolve(reponse.data)
    })
      .catch(function (err) {
      // 失败调用reject()
        reject(err)
      })

  })



  return promise
}

/*
const reponse = await ajax()
const result  = response.data

const resule = await ajax()
*/
