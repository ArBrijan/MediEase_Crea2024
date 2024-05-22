export function Home(){
    return(
        <>
        <div className="w-screen h-screen flex flex-col justify-center relative">
        <nav className=" flex items-center p-[30px] absolute top-0 ">
            <img className="w-[190px]  " src="./src/assets/newLogo.png" alt="LogoEmpresa" />
        </nav>
        <div className=" flex flex-col items-center justify-center">
            <h1 className="text-7xl w-[600px] text-center font-medium m-5">Tu salud está garantizada!</h1>
            <p className="w-[580px] text-center m-5 text-base font-medium">Inicia sesión o si no tienes, regístrate para que puedas acceder a tu historial de consultas.</p>
            <div><br />
            <a href="/Login" className="text-white m-5 text-center rounded-lg" style={{backgroundColor: "#00D45C", padding: "15px 40px 15px 40px "}}>Registrarse</a>
            <a href="/Register" className="text-white m-5 text-center rounded-lg" style={{backgroundColor: "#0336FF", padding: "15px 40px 15px 40px"}}>Iniciar sesion</a>
            </div>
            <a href="/Info" className="text-white m-5 text-center rounded-lg" style={{backgroundColor: "#0336FF", padding: "15px 40px 15px 40px",}}>¿Que estás buscando?</a>
        </div>
        </div>
        </>
    )
}