import React from 'react'

const Login = () => {
  return (
    <main>
     <header className="flex flex-row justify-between">
        <div className="pl-3">
            <a href="#" className="text-4xl font-bold text-gray-800"><span className="text-blue-800"> MJ </span> Portfolio</a>
        </div>       
        <nav className="flex flex-row justify-evenly pt-1">
                <ul className="flex flex-row justify-evenly pt-1" >
                  <li className="pr-4"><a href="#home" className="font-bold text-gray-800 hover:text-blue-800"> Home</a></li>
                  <li className="pr-4"><a href="#about" className="font-bold text-gray-800 hover:text-blue-800"> About</a></li>
                  <li className="pr-4"><a href="#skills" className="font-bold text-gray-800 hover:text-blue-800" > Skills</a></li>
                  <li className="pr-4"><a href="#projects" className="font-bold text-gray-800 hover:text-blue-800"> Projects</a></li>
                  <li className="pr-4"><a href="#experience" className="font-bold text-gray-800 hover:text-blue-800"> Experience</a></li>               
                </ul>
        </nav>
        <div>
          <a href="#Login" className="font-bold text-gray-800 hover:text-blue-800 pr-5"> Contact</a>
        </div>
    </header>
  
    <div>
    <form>
        <div className='flex flex-col items-center justify-center h-screen'>
        <h1>Login Form</h1>
        <input type='text' placeholder='Username' />
        <input type='text' placeholder='Password'/>
        <button type='button' onClick={() => alert('Successfully login')}>
          Submit
        </button>
    </div>   
    </form>
    </div>
    </main>
  )
}

export default Login