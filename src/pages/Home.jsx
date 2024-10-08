import { Link } from "react-router-dom"
import Sidebar from "../components/Sidebar"
import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react";
import axios from "axios";



export default function Home() {

    const [post, setPost]           = useState("");
    const [imgPost, setImgPost]     = useState("");
    const [posts, setPosts]         = useState([]);

    const allPosts = () => {
        axios.get('https://66f16df8415379191550df7c.mockapi.io/data')
        .then((response) => {
            setPosts(response.data)
        });
    }

    useEffect(() => {
        if (localStorage.getItem("username") === null) {
            navigate("/signIn")
        };
        allPosts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const navigate = useNavigate();

    if (localStorage.getItem("username") === null) {
        navigate("/signIn")
    };


    const imgClick = () => {
        const im = document.getElementById('img');

        if (im.style.display != "block") {
            im.style.display = "block";
        } else {
            im.style.display = "none";
        }
    };

    const goPost = (() => {
        axios.post('https://66f16df8415379191550df7c.mockapi.io/data', {
            id: localStorage.getItem("id"),
            name: localStorage.getItem("name"),
            username: localStorage.getItem("username"),
            image: imgPost,
            post: post
          })
          .then(function () {
            navigate("/home")
            window.location.reload();
          })
    })

    
    const delet = ((id) => {
        let del = confirm("هل أنت متاكد ؟");
            if (del == true) {
                axios.delete(`https://66f16df8415379191550df7c.mockapi.io/data/${id}`)
                .then(() => {
                    setPosts(posts.filter(postss => postss.id !== id))
                })
                .catch(error => {
                    console.error(error);
                });
            }
    })

    return (
        <div className="bg-black flex pt-5">
            {/* Right Section */}
            <Sidebar />
            {/*=== Right Section ===*/}

            {/* ============================================================================================================================= */}
            {/* ============================================================================================================================= */}

            {/* Main Section */}
            <div className="md:w-9/12 lg:w-5/12 h-ful">
                {/* For You Or Your Followers */}
                <div className="flex flex-row justify-around border-b-2 border-r-2 border-l-2 border-gray-300">
                    <Link to="/home"><h2 className="text-xl font-semibold text-white border-b-4 border-[#1B8FDD] p-5">لك</h2></Link>
                    <Link to="/home"><h2 className="text-xl font-semibold text-white p-5">متابعون</h2></Link>
                </div>
                {/*=== For You Or Your Followers ===*/}
                

                {/* Tweets */}
                <div className="p-3 border-b-2 border-r-2 border-l-2 border-gray-300">
                    <div className="flex flex-col">
                        <div className="flex">
                            <div>
                                <img 
                                    className="rounded-full max-w-16 ml-5"
                                    src="data:image/png;base64,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" 
                                    alt="Avatar" 
                                />
                            </div>

                            <div className="w-full">
                                <div>
                                    <textarea onChange={(e) => {setPost(e.target.value)}} className="w-full h-full text-2xl focus:outline-none resize-none bg-black text-white" placeholder="ماذا يحدث ؟!"></textarea>
                                </div>

                                <div className="flex justify-between items-baseline">
                                    <div>
                                        <button onClick={imgClick}><i className="fa-regular fa-image fa-fw text-xl ml-3 text-[#1B8FDD]"></i></button>
                                        <div id="img" className="bg-gray-600 w-full my-3 hidden">
                                            <input onChange={(e) => {setImgPost(e.target.value)}} className="p-2" type="text"  placeholder="أدخل الصورة هنا" />
                                        </div>
                                        <Link to="/home"><i className="fa-solid fa-file-image fa-fw text-xl ml-3 text-[#1B8FDD]"></i></Link>
                                        <Link to="/home"><i className="fa-regular fa-face-smile fa-fw text-xl ml-3 text-[#1B8FDD]"></i></Link>
                                        <Link to="/home"><i className="fa-solid fa-calendar fa-fw text-xl ml-3 text-[#1B8FDD]"></i></Link>
                                        <Link to="/home"><i className="fa-solid fa-location-dot fa-fw text-xl ml-3 text-[#1B8FDD]"></i></Link>
                                    </div>

                                    <div>
                                        <button onClick={goPost} className="bg-[#1B8FDD] w-full py-2 px-6 rounded-full text-white text-xl mt-3 hover:bg-[#2e6a92]">نشر</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*=== Tweets ===*/}


                {/* All Tweets */}
                <div className="w-full flex flex-col-reverse justify-between  items-center p-3 border-b-2 border-r-2 border-l-2 border-gray-300">
                    {posts.map((item, index) => {
                        return (
                                <div key={index} className="w-full">
                                    <div className="card w-full bg-black rounded-none border-b-4 border-white mb-10">
                                        <div className="flex justify-between ">
                                            <div className="flex">
                                                <div>
                                                    <img 
                                                        className="rounded-full max-w-16 ml-5"
                                                        src="data:image/jpeg;base64,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" 
                                                        alt="Avatar" 
                                                    />
                                                </div>

                                                <div className="flex">
                                                    <h1 className="text-white text-lg hidden lg:block">{localStorage.getItem("name")}</h1>
                                                    <span className="mx-1 text-white text-lg hidden lg:inline-block"> | </span>
                                                    <h4 className="text-white text-lg">{localStorage.getItem("username")}</h4>
                                                    <h5 className="mr-2 text-white text-lg">12 يونيو</h5>
                                                </div>
                                            </div>

                                            <Link to="/home">
                                                <div>
                                                    <span className="text-3xl text-white">
                                                        <div className="dropdown dropdown-end">
                                                            <div tabIndex={0} role="button" className="btn m-1">...</div>
                                                            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                                                                <li onClick={() => delet(item.id)} className="text-red-500 text-2xl"><a>Delete</a></li>
                                                            </ul>
                                                        </div>
                                                    </span>
                                                </div>
                                            </Link>
                                        </div>

                                        <div className="card-body">
                                            <h2 className="card-title text-white text-lg">{item.post}</h2>                            
                                        </div>

                                        <figure>
                                            <img
                                            className="w-full"
                                            src={item.image}
                                            alt="img" />
                                        </figure>

                                        <div className="my-4 flex items-center justify-between">
                                            <span className="text-gray-400 text-xl"><i className="fa-regular fa-comment fa-fw text-gray-400 text-xl"></i> 332</span>
                                            <span className="text-gray-400 text-xl"><i className="fa-solid fa-retweet fa-fw text-gray-400 text-xl"></i> 420 </span>                          
                                            <span className="text-gray-400 text-xl"><i className="fa-regular fa-heart fa-fw text-gray-400 text-xl"></i> 2.2k</span>                     
                                            <span className="text-gray-400 text-xl"><i className="fa-solid fa-chart-simple fa-fw text-gray-400 text-xl"></i> 4.5k</span>  
                                            <div>                    
                                                <span className="text-gray-400 text-xl"><i className="fa-regular fa-bookmark fa-fw text-gray-400 text-xl"></i> </span>
                                                <span className="text-gray-400 text-xl"><i className="fa-solid fa-upload fa-fw text-gray-400 text-xl"></i> </span>
                                            </div>                   
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                {/*=== All Tweets ===*/}
            </div>
            {/*=== Main Section ===*/}

            {/* ============================================================================================================================= */}
            {/* ============================================================================================================================= */}

            {/* Left Section */}
            <div className="w-4/12 h-full hidden lg:block pr-10">
                <div className="flex flex-col justify-start items-start">
                    <label className="input input-bordered rounded-full w-3/4 flex items-center gap-2">
                        <input type="text" className="grow bg-[#333]" placeholder="بحث" />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                fillRule="evenodd"
                                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                clipRule="evenodd" 
                            />
                        </svg>
                    </label>

                    <div className="border-2 border-x-gray-300 my-5 w-3/4 p-3 rounded-xl">
                        <h2 className="text-white text-2xl font-bold mb-2">الاشتراك في Premium</h2>
                        <p className="text-white text-lg">اشترك لاكتشاف ميزات جديدة وفي حال كنت مؤهلاً، ستتسلم حصة من إيرادات الإعلانات.</p>
                        <Link to="/home"><button className="bg-[#1B8FDD] px-5 p-2 rounded-full text-white text-2xl mt-3 hover:bg-[#2e6a92]">اشترك</button></Link>
                    </div>

                    <div className="border-2 border-x-gray-300  w-3/4 p-3 rounded-xl">
                        <h2 className="text-white text-2xl font-semibold mb-8">ماذا يحدث</h2>

                        {/* Trend 1 */}
                        <Link to="/home">
                            <div className="mb-5">
                                <div className="flex justify-between items-start mb-1">
                                    <p className="text-sm text-gray-500">المملكة العربية السعودية</p>

                                    <div>
                                        <span className="text-lg text-gray-500">...</span>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-xl text-white">مكة المكرمة</h2>
                                </div>
                            </div>
                        </Link>
                        {/*=== Trend 1 ===*/}

                        {/* Trend 2 */}
                        <Link to="/home">
                            <div className="mb-5">
                                <div className="flex justify-between items-start mb-1">
                                    <p className="text-sm text-gray-500">المملكة العربية السعودية</p>

                                    <div>
                                        <span className="text-lg text-gray-500">...</span>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-xl text-white">الرياض</h2>
                                </div>
                            </div>
                        </Link>
                        {/*=== Trend 2 ===*/}

                        {/* Trend 3 */}
                        <Link to="/home">
                            <div className="mb-5">
                                <div className="flex justify-between items-start mb-1">
                                    <p className="text-sm text-gray-500">المملكة العربية السعودية</p>

                                    <div>
                                        <span className="text-lg text-gray-500">...</span>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-xl text-white">جدة</h2>
                                </div>
                            </div>
                        </Link>
                        {/*=== Trend 3 ===*/}

                        {/* Trend 4 */}
                        <Link to="/home">
                            <div className="mb-5">
                                <div className="flex justify-between items-start mb-1">
                                    <p className="text-sm text-gray-500">المملكة العربية السعودية</p>

                                    <div>
                                        <span className="text-lg text-gray-500">...</span>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-xl text-white">الدمام</h2>
                                </div>
                            </div>
                        </Link>
                        {/*=== Trend 4 ===*/}

                        {/* Trend 5 */}
                        <Link to="/home">
                            <div className="mb-5">
                                <div className="flex justify-between items-start mb-1">
                                    <p className="text-sm text-gray-500">المملكة العربية السعودية</p>

                                    <div>
                                        <span className="text-lg text-gray-500">...</span>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-xl text-white">القصيم</h2>
                                </div>
                            </div>
                        </Link>
                        {/*=== Trend 5 ===*/}
                    </div>
                </div>
            </div>
            {/*=== Left Section ===*/}

            {/* Message */}
            <div className="lg:flex justify-between items-center w-3/12 fixed bottom-0 left-0 bg-black p-4  shadow-inner shadow-gray-500 rounded-xl hidden">
                <div>
                    <h2 className="text-white text-xl font-semibold">الرسائل</h2>
                </div>

                <Link to="/home">
                    <div className="flex items-center justify-center">
                        <span><i className="fa-solid fa-envelope fa-fw text-white text-xl ml-3"></i></span>
                        <span><i className="fa-solid fa-angles-up fa-fw text-white text-xl"></i></span>
                    </div>
                </Link>
            </div>
            {/*=== Message ===*/}
        </div>
    )
};