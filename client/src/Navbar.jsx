
import DropdownMenu from './DropdownMenu.jsx'
import React from "react"
import { Link } from "react-router-dom"
import { useNavigate } from 'react-router-dom'

function Navbar(){
  const navigate = useNavigate()
  const handleArenaEntry = () => {
    navigate('/arena')
  }


    return (<>
        <header style={{ background: 'linear-gradient(to right, black, grey)', color: '#fff', textAlign: 'center', padding: '1em 0', display: 'flex', justifyContent: 'space-between',alignItems:'center', padding: '10px 30px'}}>
        <h1>FitBrick</h1>
        <div style={{display: 'flex'}}>
          <button style={{marginRight: '10px', width: '300px', fontSize: '30px',background: 'linear-gradient(to right, #eb3c5a, #f67831)', color: 'white'}} onClick={handleArenaEntry}>Arena</button>
          <DropdownMenu/>
          </div>
      </header>
        <nav style={{ backgroundColor: '#fff', padding: '8px 15em', display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap'}}>
          <Link to="/home" style= {{textDecoration: 'none', color: 'black', fontSize:'22px', fontWeight: 'bold'}}>Home</Link>  
          <Link to="/blog"  style= {{textDecoration: 'none', color: 'black', fontSize:'22px', fontWeight: 'bold'}}>Blogs</Link>  
          <Link to="/about"  style= {{textDecoration: 'none', color: 'black', fontSize:'22px', fontWeight: 'bold'}}>About</Link>  
          <Link to="/contact"  style= {{textDecoration: 'none', color: 'black', fontSize:'22px', fontWeight: 'bold'}}>Contact Us</Link>
        </nav>
        <hr style={{margin:'0px'}}/></>
    )
}
export default Navbar