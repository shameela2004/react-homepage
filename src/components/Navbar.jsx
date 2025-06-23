function Navbar(){
    const  navbar={
            backgroundColor:"black",
            height:"60px",
            display:"flex",
            flexdirection:"row",
            justifyContent: "space-between",
            marginBottom:"-8px"
        

        }
    return(
        <>
        <header style={navbar}>
            <h1 style={{color:"white",marginLeft:"50px",fontFamily:"Helvetica Neue"}}>GlowAura</h1>
            <div style={{display:"flex",flexdirection:"row",justifyContent:"space-evenly",color:"white",gap:"30px",marginRight:"50px"}}>
             <h2 >Home</h2>
             <h2>About Us</h2>
             <h2>Services</h2>
             </div>
            </header>
        </>
    )
}
export default Navbar;