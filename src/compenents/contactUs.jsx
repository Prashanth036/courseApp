export default function Contact(){
    return(
    <>
    <div class='d-flex justify-content-between'
    style={{fontFamily:'sans-serif',
    fontWeight:'bold',
    padding:'10px'}}>
    <div style={{padding:'20px'}}>
    <span style={{fontSize:'25px',
  fontFamily:'times'}}>Address -</span><br/>
  <address>Cyber Towers,Hi-Tech City,Hyderabad</address>
    <span style={{fontSize:'25px',
  fontFamily:'times'}}>Map -</span>
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15224.761003412777!2d78.37146660804105!3d17.450605878533143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93ded9f6f0d7%3A0xa3d91e5d00d50b63!2sCyber%20Towers!5e0!3m2!1sen!2sin!4v1687760254441!5m2!1sen!2sin" width="500" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
      <div>  
      Contact Us -<br/>
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScXF4E1GyWyxAaU33vcDXf4SeM-UUCYWs_2RbvBD7UfC7CUUg/viewform?embedded=true" width="640" height="700" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
</div></div>
    </>)
}