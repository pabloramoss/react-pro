import { BrowserRouter } from "react-router-dom"
import { Routes, Route, NavLink, Navigate } from "react-router-dom"

const Navigation: React.FC = ()=> {

  return(
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src="https://via.placeholder.com/100" alt="logo" />
          <ul>
            <li>
              <NavLink to="/" className={({isActive}) => isActive ? "nav-active" : "" }>Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({isActive}) => isActive ? "nav-active" : "" }>About</NavLink>
            </li>
            <li>
              <NavLink to="/users" className={({isActive}) => isActive ? "nav-active" : "" }>Users</NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="about" element={`<About />`} />
          <Route path="users" element={`<Users />`} />
          {/* Si entramos a cualquier path que no existe nos redirecciona a home */}
          {/* Genera un loop infinito uwu */}
          {/* <Route path="/*" element={<Navigate to="/home" replace />} /> */}
          <Route path="/" element={`<Home/>`} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
export default Navigation