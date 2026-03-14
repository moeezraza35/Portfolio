function getCookies():any {
  let result:any = {}
  var cookie = document.cookie
  var key=""
  var val=""
  var eql=false
  for(var i=0; i<cookie.length; i++){
    if (cookie[i] === '='){
      eql=true
      continue
    } else if (cookie[i] === ';'){
      result[key] = val
      key=""
      val=""
      continue
    }
    if (eql)
      val += cookie[i]
    else
      key += cookie[i]
  }
  result[key] = val
  return result
}
function getCookie(key:string):string|undefined{
  var cookies = getCookies()
  return cookies[key]
}
function setCookie(key:string, value:string){
  document.cookie += key + '=' + value + ';'
}
function deleteCookie(){}
export {getCookies, getCookie, setCookie, deleteCookie}