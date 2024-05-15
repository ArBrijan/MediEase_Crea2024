export function Register(){
    return(
        <>
        <div className="w-screen h-screen relative flex items-center justify-center">
        <nav className=" flex items-center p-[30px] absolute top-0 left-0">
            <img className="w-[190px]  " src="./src/assets/newLogo.png" alt="LogoEmpresa" />
        </nav>
        <a style={{backgroundColor: "#1E1E1E"}} className="text-white absolute left-[90%] top-[6%] p-[15px] " href="/Home">Regresar</a>
        <div className=" w-[500px] h-[500px] border">
            <img src="./src/assets/pills.png" alt="Imagen" />
        </div>
        <div className="w-[500px] h-[500px] p-5 border flex flex-col justify-center">
            <h1 className="text-3xl font-medium">Registrate</h1><br />
            <input className="border p-2" type="text" placeholder="Nombre Completo" required/><br />
            <input className="border p-2" type="email" placeholder="Correo" required/><br />
            <input className="border p-2" type="password" placeholder="Contraseña" required/><br />
            <input className="border p-2" type="date" placeholder="Fecha de nacimiento" required/><br />
            <input className="border p-2" type="tel" placeholder="Número telefónico" required/><br />
            <button style={{backgroundColor: "#1E1E1E"}} className="text-white w-[150px] h-[50px]">Registrarme</button>
        </div>
        </div>
        <a href="/Home">Regresar</a>
        </>
    )
}