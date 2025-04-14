import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'

function Signin() {


  const [info, setInfo] = useState({
    email: '',
    password: '',
  })


  // const { token, fullname } = result['data']
  // sessionStorage.setItem('token', token)
  // sessionStorage.setItem('fullname', fullname)
  

  // // set the context
  // setUser({ fullname, email })


  const {navigate}=useNavigate()

  const onLogin = async () => {
    if (info.email.length == 0) {
      toast.warn('Please enter email')
    } else if (info.password.length == 0) {
      toast.warn('Please enter password')
    } else {
      const { email, password } = info
      const result = await loginUser(email, password)
      if (result['status'] == 'success') {
        toast.success('Welcome to my APP')

       

       

        // redirect to home
        navigate('/home')
      }
    }
  }
  return (
    <div>
       
        <center><h1>Sign In User</h1></center>
      <section className="h-100 gradient-form" style={{ backgroundColor: '' }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-xl-10">
              <div className="card rounded-3 text-black">
                <div className="row g-0">
                  <div className="col-lg-6">
                    <div className="card-body p-md-5 mx-md-4">
                      <div className="text-center">
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                          
                          style={{ width: '185px' }}
                          alt="logo"
                        />
                        <h4 className="mt-1 mb-5 pb-1">Welcome to my App </h4>
                      </div>

                      <form>
                    

                        <div className="form-outline mb-4">
                          <input
                          onChange={(e) => setInfo({ ...info, email: e.target.value })}
                            type="email"
                            id="form2Example11"
                            className="form-control"
                            placeholder=" email address"
                          />
                          <label className="form-label" htmlFor="form2Example11" type="email">Email</label>
                        </div>

                        <div className="form-outline mb-4">
                          <input
                          onChange={(e) => setInfo({ ...info, password: e.target.value })}
                            type="password"
                            id="form2Example22"
                            className="form-control"
                          />
                          <label className="form-label" htmlFor="form2Example22" >Password</label>
                        </div>

                        <div className="text-center pt-1 mb-5 pb-1">
                          <button
                            className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                            type="button"
                          >
                            Log in
                          </button>
                          
                        </div>

                        <div className="d-flex align-items-center justify-content-center pb-4">
                          <p className="mb-0 me-2">Don't have an account?</p>
                          <button type="button" className="btn btn-outline-danger">Create new</button>
                        </div>
                      </form>
                    </div>
                  </div>

                  <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                    <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                      <h4 className="mb-4">"Your stories, seamlessly shared. Build and connect with your audience effortlessly."</h4>
                      <p className="small mb-0"></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Signin
