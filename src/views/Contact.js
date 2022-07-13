import emailjs from 'emailjs-com'
const Contact = (props) => {
    function sendEmail(e){
        e.preventDefault();
        emailjs.sendForm(service_14pzppj,template_3cxyi7y,e.target ,V5vnTPeUuLrudh_Ty);
    }
return(
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
)
}
export default Contact