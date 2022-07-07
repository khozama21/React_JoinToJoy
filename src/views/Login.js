


const Login = (props) => {
    return(
        <div className='create'>

        <h2> Log In </h2>


            <form  >
                <div className="form-group">
                    <label>Email</label>
                    <input className='form-control' type="email" required placeholder="Email"/>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input className='form-control' type="password" required placeholder="password" />
                </div>
                <button className="btn btn-primary  mt-5 mb-5 ">Submit</button>
            
            </form>
</div>
    )
    }
    export default Login