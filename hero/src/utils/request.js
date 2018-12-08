import fetch from 'dva/fetch';

export default function request(url, options={}) {
  if(options.method === 'POST'){
    options.headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json; charset=utf-8',
      ...options.headers,
    }
    options.body = JSON.stringify(options.body);
  }
  return fetch(url, options).then(response => {
    const resData = response.json();
    return resData;
  }).catch(e=>{
      console.log(e)
  });
}
