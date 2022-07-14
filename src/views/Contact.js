import emailjs from 'emailjs-com'
import Footer from '../components/footer'
const Contact = (props) => {
    function sendEmail(e){
        e.preventDefault();
        emailjs.sendForm('service_14pzppj','template_3cxyi7y',e.target ,'V5vnTPeUuLrudh_Ty');
    }
return(

        <>
       <div class="home-workshops">
            <div class="home-content-container2">
              <div class="home-container6">
              <div className="home-workshops">
<div className="contactFather">
    <div className="container contact">
        <form id="contact-form"  onSubmit={sendEmail}>
            <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" name="name" />
            </div>
    <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input type="email" className="form-control" aria-describedby="emailHelp" name="email"/>
    </div>
    <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea className="form-control" rows="5" name="message"></textarea >
    </div>
    <button type="submit" className="btn btn-primary" >Submit</button>
</form>
</div>
</div>
</div>
              </div>
            </div>
            <img alt="image" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIwfHxidXNpbmVzc3xlbnwwfHx8fDE2NDM3MzQ3MjI&amp;ixlib=rb-1.2.1&amp;w=1500" class="home-image7" />
          </div>
          <Footer rootClassName="footer-root-class-name"></Footer>
        </>

           
    
)
}
export default Contact