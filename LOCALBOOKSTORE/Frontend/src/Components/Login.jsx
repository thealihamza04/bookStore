import React from 'react'
import Signup from './Signup';

const Login = () => {
    return (
        <div>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>

                    <h3 className="font-bold text-3xl">LogIn</h3>

                    <div className='mt-10 space-y-2'>
                        <label>Email</label>
                        <br />
                        <input className='input input-bordered' type="text" placeholder='Enter email here' />
                    </div>
                    {/* password */}
                    <div className='mt-3 space-y-2'>
                        <label>Password</label>
                        <br />
                        <input className='input input-bordered' type="password" placeholder='Enter password here' />
                    </div>
                    <div className='space-y-3'>
                        <button className='btn btn-secondary mt-4'>Login</button>
                        <p>Create account <a className="link link-secondary" onClick={()=>{document.getElementById("my_modal_3").close(); document.getElementById("my_modal_4").showModal()}} >SignUp</a></p>
                    </div>
                    <Signup/>
                </div>
            </dialog>
        </div>
    )
}

export default Login
