import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";

export default function Sidebar() {

    const navigate = useNavigate();

    return (
        <>
            <div className="w-3/12 h-full">
                    <div className="w-full h-full flex justify-end items-center">
                        <div className="h-full w-3/4 pl-16">
                            <ul className="">
                                <Link to="/home"><li className="hover:w-fit hover:bg-gray-600 hover:rounded-full hover:p-1"><i className="fa-brands fa-x-twitter fa-fw text-4xl text-white"></i></li></Link>
                                <div className="mt-5">
                                    <Link to="/home"><li className="hover:bg-gray-600 hover:rounded-full hover:pr-3"><i className="fa-solid fa-house fa-fw text-3xl mb-2 ml-3 text-white"></i> <span className="hidden lg:inline-block text-white text-2xl">الرئيسية</span></li></Link>
                                    <Link to="/home"><li className="hover:bg-gray-600 hover:rounded-full hover:pr-3"><i className="fa-solid fa-magnifying-glass fa-fw text-3xl my-2 ml-3 text-white"></i> <span className="hidden lg:inline-block text-white text-2xl">استكشف</span></li></Link>
                                    <Link to="/home"><li className="hover:bg-gray-600 hover:rounded-full hover:pr-3"><i className="fa-regular fa-bell fa-fw text-3xl my-2 ml-3 text-white"></i> <span className="hidden lg:inline-block text-white text-2xl">التنبيهات</span></li></Link>
                                    <Link to="/home"><li className="hover:bg-gray-600 hover:rounded-full hover:pr-3"><i className="fa-regular fa-envelope fa-fw text-3xl my-2 ml-3 text-white"></i> <span className="hidden lg:inline-block text-white text-2xl">الرسائل</span></li></Link>
                                    <Link to="/home"><li className="hover:bg-gray-600 hover:rounded-full hover:pr-3"><i className="fa-solid fa-square-pen fa-fw text-3xl my-2 ml-3 text-white"></i> <span className="hidden lg:inline-block text-white text-2xl">Grok</span></li></Link>
                                    <Link to="/home"><li className="hover:bg-gray-600 hover:rounded-full hover:pr-3"><i className="fa-solid fa-user-group fa-fw text-3xl my-2 ml-3 text-white"></i> <span className="hidden lg:inline-block text-white text-2xl">المجتمعات</span></li></Link>
                                    <Link to="/home"><li className="hover:bg-gray-600 hover:rounded-full hover:pr-3"><i className="fa-brands fa-x-twitter fa-fw text-3xl my-2 ml-3 text-white"></i> <span className="hidden lg:inline-block text-white text-2xl">Premium</span></li></Link>
                                    <Link to="/profile"><li className="hover:bg-gray-600 hover:rounded-full hover:pr-3"><i className="fa-regular fa-user fa-fw text-3xl my-2 ml-3 text-white"></i> <span className="hidden lg:inline-block text-white text-2xl">الملف الشخصي</span></li></Link>
                                    <Link to="/home"><li className="hover:bg-gray-600 hover:rounded-full hover:pr-3"><i className="fa-regular fa-hand-point-left fa-fw text-3xl my-2 ml-3 text-white"></i> <span className="hidden lg:inline-block text-white text-2xl">المزيد</span></li></Link>
                                    <Link to="/home"><button className="bg-[#1B8FDD] w-full lg:p-3 rounded-full text-white text-2xl mt-3 hover:bg-[#2e6a92] hidden lg:block">نشر</button></Link>
                                    <Link to="/home"><button className="bg-[#1B8FDD] w-fit p-3 rounded-full text-white xl lg:text-2xl mt-3 hover:bg-[#2e6a92] lg:hidden"><i className="fa-solid fa-feather"></i></button></Link>
                                </div>
                            </ul>

                                <div className="w-full flex justify-between items-center mt-16">
                                    <Link to="/profile">
                                        <div className="flex">
                                            <div>
                                                <img 
                                                    className="rounded-full max-w-16 ml-5"
                                                    src="data:image/png;base64,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" 
                                                    alt="Avatar" 
                                                />
                                            </div>

                                            <div className="hidden lg:block">
                                                <h1 className="text-white text-lg">{localStorage.getItem("name")}</h1>
                                                <h4 className="text-white text-lg">{localStorage.getItem("username")}</h4>
                                            </div>
                                        </div>
                                    </Link>

                                    <div>
                                        <span onClick={() =>  {localStorage.clear(); navigate("/signIn")}} className="text-3xl text-white hidden lg:inline-block"><i className="fa-solid fa-right-from-bracket fa-fw text-3xl mb-2 ml-3 text-white"></i></span>
                                    </div>
                                </div>
                        </div> 
                    </div>
            </div>
        </>
    )
};