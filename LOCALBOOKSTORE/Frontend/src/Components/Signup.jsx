import React from 'react'

const Signup = () => {
    return (
        <div>
            <dialog id="my_modal_4" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>

                    <h3 className="font-bold text-3xl">Signup</h3>

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
                        <button className='btn btn-secondary mt-4'>signup</button>
                        <p>Create account <a className="link link-secondary" onClick={() => { document.getElementById("my_modal_4").close(); document.getElementById("my_modal_3").showModal() }} >Login</a></p>
                    </div>
                </div>
            </dialog>
        </div>
    )
}

export default Signup
