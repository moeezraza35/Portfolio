import { getCookie, setCookie } from "./cookies"

function getTheme():"light"|"dark"|"auto"{
  let theme = getCookie("theme")
  if (theme === "light" || theme === "dark" || theme === "auto") 
    return theme
  setCookie("theme","auto")
  return "auto"
}
function setTheme(theme:"light"|"dark"|"auto"){
  setCookie("theme",theme)
  document.querySelector("html")?.setAttribute("data-theme",theme)
}
function loadTheme() {
  const theme = getTheme()
  document.querySelector("html")?.setAttribute("data-theme",theme)
}
export { getTheme, setTheme, loadTheme }