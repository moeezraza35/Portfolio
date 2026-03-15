interface IconProps {
  color?: string
  height?: string
  width?: string
}
const defaultProps:IconProps = {
  color: "currentColor",
  height: "30px",
  width: "30px"
}
function HomeIcon(props:IconProps){
  const { color, height, width } = { ...defaultProps, ...props }
  return (
    <svg fill={color} height={height} width={width} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="home-alt-3" className="icon glyph">
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <path d="M21.71,10.29l-9-9a1,1,0,0,0-1.42,0l-9,9a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,12H4v9a1,1,0,0,0,1,1H8a1,1,0,0,0,1-1V15a1,1,0,0,1,1-1h4a1,1,0,0,1,1,1v6a1,1,0,0,0,1,1h3a1,1,0,0,0,1-1V12h1a1,1,0,0,0,.92-.62A1,1,0,0,0,21.71,10.29Z"></path>
      </g>
    </svg>
  )
}
function AboutIcon(props:IconProps){
  const { color, height, width } = { ...defaultProps, ...props }
  return (
    <svg fill={color} height={height} width={width} viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <title>info1</title>
        <path d="M16 3c-7.18 0-13 5.82-13 13s5.82 13 13 13 13-5.82 13-13-5.82-13-13-13zM18.039 20.783c-0.981 1.473-1.979 2.608-3.658 2.608-1.146-0.187-1.617-1.008-1.369-1.845l2.16-7.154c0.053-0.175-0.035-0.362-0.195-0.419-0.159-0.056-0.471 0.151-0.741 0.447l-1.306 1.571c-0.035-0.264-0.004-0.7-0.004-0.876 0.981-1.473 2.593-2.635 3.686-2.635 1.039 0.106 1.531 0.937 1.35 1.85l-2.175 7.189c-0.029 0.162 0.057 0.327 0.204 0.379 0.16 0.056 0.496-0.151 0.767-0.447l1.305-1.57c0.035 0.264-0.024 0.726-0.024 0.902zM17.748 11.439c-0.826 0-1.496-0.602-1.496-1.488s0.67-1.487 1.496-1.487 1.496 0.602 1.496 1.487c0 0.887-0.67 1.488-1.496 1.488z"></path>
      </g>
    </svg>
  )
}
function WorkIcon(props:IconProps){
  const { color, height, width } = { ...defaultProps, ...props }
  return (
    <svg version="1.1" height={height} width={width} id="Icons" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" xmlSpace="preserve" fill={color}>
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <g>
          <path fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M30,28H2c-0.3,0-0.7-0.2-0.9-0.5c-0.2-0.3-0.2-0.7,0-1l2-3C3.3,23.2,3.6,23,4,23h24c0.4,0,0.7,0.2,0.9,0.6l2,3 c0.2,0.3,0.1,0.7,0,1C30.7,27.8,30.3,28,30,28z"></path>
        </g>
        <path d="M27,5H5C4.4,5,4,5.4,4,6v14c0,0.6,0.4,1,1,1h22c0.6,0,1-0.4,1-1V6C28,5.4,27.6,5,27,5z M11.7,15.3c0.4,0.4,0.4,1,0,1.4 C11.5,16.9,11.3,17,11,17s-0.5-0.1-0.7-0.3l-3-3c-0.4-0.4-0.4-1,0-1.4l3-3c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4L9.4,13L11.7,15.3z M18.9,9.4l-4,8C14.7,17.8,14.4,18,14,18c-0.2,0-0.3,0-0.4-0.1c-0.5-0.2-0.7-0.8-0.4-1.3l4-8c0.2-0.5,0.8-0.7,1.3-0.4 C18.9,8.4,19.1,9,18.9,9.4z M24.7,13.7l-3,3C21.5,16.9,21.3,17,21,17s-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l2.3-2.3l-2.3-2.3 c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l3,3C25.1,12.7,25.1,13.3,24.7,13.7z"></path>
      </g>
    </svg>
  )
}
function ToolsIcon(props:IconProps){
  const { color, height, width } = { ...defaultProps, ...props }
  return (
    <svg height={height} width={width} viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className="si-glyph si-glyph-hammer-and-wrench" fill="#000000">
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <title>Hammer-and-wrench</title>
        <defs> </defs>
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g transform="translate(0.000000, 1.000000)" fill={color}>
            <g>
              <path d="M14.217,14.949 C14.748,15.482 15.076,15.103 15.512,14.668 C15.948,14.233 16.326,13.904 15.795,13.372 C15.795,13.372 8.393,5.977 6.565,4.154 L4.987,5.731 L14.217,14.949 L14.217,14.949 Z" className="si-glyph-fill"></path>
              <path d="M2.048,7.015 L2.662,6.411 C2.662,6.411 2.391,5.668 2.788,5.312 C3.185,4.956 3.855,5.176 3.855,5.176 L6.01,3.093 C6.01,3.093 5.859,2.01 6.059,1.81 C6.259,1.61 8.494,0.521 8.71,0.303 L8.251,-0.156 C8.251,-0.156 5.123,0.22 4.784,0.558 C4.585,0.758 3.096,2.262 2.034,3.324 C2.034,3.324 2.3,4.083 1.95,4.433 C1.599,4.784 0.809,4.533 0.809,4.533 C0.436,4.906 0.186,5.155 0.186,5.155 C-0.077,5.42 0.078,5.792 0.401,6.115 L1.087,6.801 C1.412,7.125 1.785,7.278 2.048,7.015 L2.048,7.015 Z" className="si-glyph-fill"></path>
            </g>
            <path d="M11.733,5.515 C12.81,6.026 14.161,5.869 15.055,4.975 C15.745,4.285 16.019,3.336 15.872,2.444 L14.351,3.963 L13.057,4.284 L11.595,2.842 L11.938,1.505 L13.445,0.017 C12.552,-0.129 11.543,0.082 10.853,0.773 C9.958,1.668 9.836,3.052 10.347,4.13 L9.353,5.123 C9.79,5.558 10.257,6.025 10.741,6.508 L11.733,5.515 L11.733,5.515 Z" className="si-glyph-fill"></path>
            <path d="M7.432,10.119 L5.927,8.615 L4.619,9.924 C4.537,10.004 4.479,10.095 4.438,10.19 C4.361,10.16 4.318,10.159 4.291,10.17 C4.041,10.087 3.777,10.031 3.5,10.031 C2.119,10.031 1,11.136 1,12.5 C1,13.864 2.119,14.969 3.5,14.969 C4.881,14.969 6,13.864 6,12.5 C6,12.217 5.941,11.949 5.854,11.696 C5.849,11.672 5.848,11.65 5.834,11.615 C5.938,11.572 6.036,11.514 6.122,11.427 L7.432,10.119 L7.432,10.119 Z M3.5,13.938 C2.688,13.938 2.031,13.295 2.031,12.5 C2.031,11.705 2.687,11.062 3.5,11.062 C4.313,11.062 4.969,11.705 4.969,12.5 C4.969,13.295 4.312,13.938 3.5,13.938 L3.5,13.938 Z" className="si-glyph-fill"></path>
          </g>
        </g>
      </g>
    </svg>
  )
}
function ContactIcon(props:IconProps){
  const { color, height, width } = { ...defaultProps, ...props }
  return (
    <svg fill={color} height={height} width={width} version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" xmlSpace="preserve">
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <g>
          <path d="M21,4H11c-4.4,0-8,3.6-8,8c0,0.6,0.4,1,1,1h4.9c1.7,0,3.1-1.4,3.1-3.1C12,9.4,12.4,9,12.9,9h6.1C19.6,9,20,9.4,20,9.9 c0,1.7,1.4,3.1,3.1,3.1H28c0.6,0,1-0.4,1-1C29,7.6,25.4,4,21,4z"></path>
          <path d="M21.8,14.4C21.6,14.2,21.3,14,21,14h-2v-1c0-0.6-0.4-1-1-1s-1,0.4-1,1v1h-2v-1c0-0.6-0.4-1-1-1s-1,0.4-1,1v1h-2 c-0.3,0-0.6,0.2-0.8,0.4l-2.1,2.9C6.1,20.2,5,23.5,5,27c0,0.6,0.4,1,1,1h2v1c0,0.6,0.4,1,1,1s1-0.4,1-1v-1h12v1c0,0.6,0.4,1,1,1 s1-0.4,1-1v-1h2c0.6,0,1-0.4,1-1c0-3.5-1.1-6.8-3.1-9.6L21.8,14.4z M16,25c-2.2,0-4-1.8-4-4s1.8-4,4-4s4,1.8,4,4S18.2,25,16,25z"></path>
        </g>
      </g>
    </svg>
  )
}
function LightIcon(props:IconProps){
  const { color, height, width } = { ...defaultProps, ...props }
  return (
    <svg version="1.0" height={height} width={width} id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64" enableBackground="new 0 0 64 64" xmlSpace="preserve" fill={color}>
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <g>
          <circle fillRule="evenodd" clipRule="evenodd" fill={color} cx="32.003" cy="32.005" r="16.001"></circle>
          <path fillRule="evenodd" clipRule="evenodd" fill={color} d="M12.001,31.997c0-2.211-1.789-4-4-4H4c-2.211,0-4,1.789-4,4 s1.789,4,4,4h4C10.212,35.997,12.001,34.208,12.001,31.997z"></path>
          <path fillRule="evenodd" clipRule="evenodd" fill={color} d="M12.204,46.139l-2.832,2.833c-1.563,1.562-1.563,4.094,0,5.656 c1.562,1.562,4.094,1.562,5.657,0l2.833-2.832c1.562-1.562,1.562-4.095,0-5.657C16.298,44.576,13.767,44.576,12.204,46.139z"></path>
          <path fillRule="evenodd" clipRule="evenodd" fill={color} d="M32.003,51.999c-2.211,0-4,1.789-4,4V60c0,2.211,1.789,4,4,4 s4-1.789,4-4l-0.004-4.001C36.003,53.788,34.21,51.999,32.003,51.999z"></path>
          <path fillRule="evenodd" clipRule="evenodd" fill={color} d="M51.798,46.143c-1.559-1.566-4.091-1.566-5.653-0.004 s-1.562,4.095,0,5.657l2.829,2.828c1.562,1.57,4.094,1.562,5.656,0s1.566-4.09,0-5.656L51.798,46.143z"></path>
          <path fillRule="evenodd" clipRule="evenodd" fill={color} d="M60.006,27.997l-4.009,0.008 c-2.203-0.008-3.992,1.781-3.992,3.992c-0.008,2.211,1.789,4,3.992,4h4.001c2.219,0.008,4-1.789,4-4 C64.002,29.79,62.217,27.997,60.006,27.997z"></path>
          <path fillRule="evenodd" clipRule="evenodd" fill={color} d="M51.798,17.859l2.828-2.829c1.574-1.566,1.562-4.094,0-5.657 c-1.559-1.567-4.09-1.567-5.652-0.004l-2.829,2.836c-1.562,1.555-1.562,4.086,0,5.649C47.699,19.426,50.239,19.418,51.798,17.859z"></path>
          <path fillRule="evenodd" clipRule="evenodd" fill={color} d="M32.003,11.995c2.207,0.016,4-1.789,4-3.992v-4 c0-2.219-1.789-4-4-4c-2.211-0.008-4,1.781-4,3.993l0.008,4.008C28.003,10.206,29.792,11.995,32.003,11.995z"></path>
          <path fillRule="evenodd" clipRule="evenodd" fill={color} d="M12.212,17.855c1.555,1.562,4.079,1.562,5.646-0.004 c1.574-1.551,1.566-4.09,0.008-5.649l-2.829-2.828c-1.57-1.571-4.094-1.559-5.657,0c-1.575,1.559-1.575,4.09-0.012,5.653 L12.212,17.855z"></path>
        </g>
      </g>
    </svg>
  )
}
function DarkIcon(props:IconProps){
  const { color, height, width } = { ...defaultProps, ...props }
  return (
    <svg fill={color} height={height} width={width} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="moon-alt-7" className="icon glyph">
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <path d="M5,21.21A10,10,0,1,0,5,2.79,10,10,0,0,1,5,21.21Z"></path>
      </g>
    </svg>
  )
}
function AutoIcon(props:IconProps){
  const { color, height, width } = { ...defaultProps, ...props }
  return (
    <svg viewBox="0 0 24 24" height={height} width={width} version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill={color}>
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <g id="🔍-Product-Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g id="ic_fluent_dark_theme_24_regular" fill={color} fillRule="nonzero">
            <path d="M12,22 C17.5228475,22 22,17.5228475 22,12 C22,6.4771525 17.5228475,2 12,2 C6.4771525,2 2,6.4771525 2,12 C2,17.5228475 6.4771525,22 12,22 Z M12,20.5 L12,3.5 C16.6944204,3.5 20.5,7.30557963 20.5,12 C20.5,16.6944204 16.6944204,20.5 12,20.5 Z" id="🎨-Color"></path>
          </g>
        </g>
      </g>
    </svg>
  )
}
function MenuIcon(props:IconProps){
  const { color, height, width } = { ...defaultProps, ...props }
  return (
    <svg viewBox="0 0 24 24" height={height} width={width} fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <path d="M4 6H20M4 12H20M4 18H20" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
      </g>
    </svg>
  )
}
export {HomeIcon, AboutIcon, WorkIcon, ToolsIcon, ContactIcon, LightIcon, DarkIcon, AutoIcon, MenuIcon}