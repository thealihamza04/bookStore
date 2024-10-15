import React from 'react'
import Signup from './Signup'

const Login = () => {
    return (
        <div>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <dialog id="my_modal_2" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-3xl">LogIn</h3>
                    {/* email */}
                    <div className='mt-4 space-y-2'>
                        <span>Email</span>
                        <br />
                        <input type="email" name="" id="" placeholder='Enter your email' className='input input-bordered w-24 md:w-auto'/>
                    </div>
                    {/* password */}
                    <div className='mt-4 space-y-2'>
                        <span>Password</span>
                        <br />
                        <input type="password" name="" id="" placeholder='Enter your password' className='input input-bordered w-24 md:w-auto'/>
                    </div>
                    {/* buttons */}
                    <div className='space-y-2 mt-6'>
                        <button className='btn btn-secondary'>Login</button>
                        <p>not registered! <span className='link link-secondary' onClick={()=>document.getElementById("my_modal_4").showModal()}>SignUp</span></p>
                    </div>
                    <Signup/>
                </div>
            </dialog>
        </div>
    )
}

export default Login
