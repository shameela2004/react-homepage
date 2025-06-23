function Footer(){
     const footer={
        backgroundColor:"black",
        height:"50px",
        display:"flex",
        flexdirection:"row",
        justifyContent: "space-around",
        color:"white",
        alignItems:"flex-end"
     }
    return(
       <>
       <footer style={footer}>
        <span>About Us</span>
        <span>Support</span>
        <span>Follow Us</span>
        <span>More</span>
       </footer>
       </>
    )
}
export default Footer;