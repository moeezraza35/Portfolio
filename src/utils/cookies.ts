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
      result[key.trim()] = val
      key=""
      val=""
      eql = false
      continue
    }
    if (eql)
      val += cookie[i]
    else
      key += cookie[i]
  }
  if (key !== "")
    result[key.trim()] = val
  return result
}
function getCookie(key:string):string|undefined{
  var cookies = getCookies()
  return cookies[key]
}
function setCookie(key:string, value:string, days=30){
  const d = new Date();
  d.setTime(d.getTime() + (days*24*60*60*1000))
  let expires = "expires="+ d.toUTCString()
  document.cookie = key + "=" + value + ";" + expires + ";path=/"
}
function deleteCookie(key:string){
  document.cookie = key + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}
export {getCookies, getCookie, setCookie, deleteCookie}