import Logo from '../assets/logo.jpg';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function SignUp() {

    const [username, setUsername]   = useState("");
    const [password, setPassword]   = useState("");
    const [users, setUsers]         = useState([]);
    
    const user = [];
    const pass = [];

    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem("username") !== null) {
            navigate("/home")
        };
        axios.get('https://66f16df8415379191550df7c.mockapi.io/users')
        .then((response) => {
            setUsers(response.data)
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const signUp = () => {

        users.map((item) => {
            user.push(item.username)
            pass.push(item.password)
        });

        if (user.includes(username)) {
            alert("اسم المستخدم موجود");
        } else if (username.length > 3 && password.length > 5) {
            axios.post('https://66f16df8415379191550df7c.mockapi.io/users', {
                username: username,
                password: password
              })
              .then(function () {
                navigate("/signIn")
              })
        }
    };

    return (
        <>
            <div className="bg-black h-full w-full lg:h-screen lg:w-screen flex flex-col justify-center items-center lg:flex-row lg:justify-evenly">
                <div className="w-full lg:w-3/4 flex justify-center items-center">
                    <img className='h-96' src={Logo} alt="Logo" />
                </div>

                <div className='w-full lg:w-3/4 flex flex-col justify-center items-center'>
                    <div className='w-1/2 lg:w-3/4'>
                        <h2 className='text-white text-7xl font-bold mb-10'>يحدث الآن</h2>

                        <h3 className='text-white text-4xl mb-8 font-bold'>انضم اليوم.</h3>

                        <div>
                            <div className='mb-3'>
                                <label className="input input-bordered flex items-center gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 16 16"
                                        fill="currentColor"
                                        className="h-4 w-4 opacity-70">
                                        <path
                                        d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                                    </svg>
                                    <input onChange={(e) => {setUsername(e.target.value)}} type="text" className="grow" placeholder="Username" />
                                </label>

                                <div className='text-start'>
                                    <span className='text-white text-base'>أكثر من 3 حروف</span>
                                </div>
                            </div>


                            <div className='mb-3'>
                                <label className="input input-bordered flex items-center gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 16 16"
                                        fill="currentColor"
                                        className="h-4 w-4 opacity-70">
                                        <path
                                        fillRule="evenodd"
                                        d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                        clipRule="evenodd" />
                                    </svg>
                                    <input onChange={(e) => {setPassword(e.target.value)}} type="password" className="grow" placeholder='Password' />
                                </label> 

                                <div className='text-start'>
                                    <span className='text-white text-base'>أكثر من 5 أرقام</span>
                                </div>
                            </div>

                            <button onClick={signUp} className="w-full bg-[#1B8FDD] p-2 rounded-full text-white xl lg:text-2xl mt-3 hover:bg-[#2e6a92]">تسجيل</button>
                        
                            <div className='my-10'>
                                <h3 className='text-white text-2xl'>هل لديك حساب بالفعل ؟</h3>
                                <Link to="/signIn"><button className="w-full text-[#1B8FDD] p-2 rounded-full border-2 border-gray-300 bg-black xl lg:text-2xl mt-3 hover:bg-blue-950">تسجيل</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};