import { Link } from "react-router-dom"
import Sidebar from "../components/Sidebar"

export default function Home() {
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
                <div className="flex flex-row justify-evenly border-b-2 border-r-2 border-l-2 border-gray-300">
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
                                    <textarea className="w-full h-full text-2xl bg-black text-white" placeholder="ماذا يحدث ؟!"></textarea>
                                </div>

                                <div className="flex justify-between items-baseline">
                                    <div>
                                        <Link to="/home"><i className="fa-regular fa-image fa-fw text-xl ml-3 text-[#1B8FDD]"></i></Link>
                                        <Link to="/home"><i className="fa-solid fa-file-image fa-fw text-xl ml-3 text-[#1B8FDD]"></i></Link>
                                        <Link to="/home"><i className="fa-regular fa-face-smile fa-fw text-xl ml-3 text-[#1B8FDD]"></i></Link>
                                        <Link to="/home"><i className="fa-solid fa-calendar fa-fw text-xl ml-3 text-[#1B8FDD]"></i></Link>
                                        <Link to="/home"><i className="fa-solid fa-location-dot fa-fw text-xl ml-3 text-[#1B8FDD]"></i></Link>
                                    </div>

                                    <div>
                                    <Link to="/home"><button className="bg-[#1B8FDD] w-full py-2 px-6 rounded-full text-white text-xl mt-3 hover:bg-[#2e6a92]">نشر</button></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*=== Tweets ===*/}


                {/* All Tweets */}
                <div className="w-full flex justify-between items-center p-3 border-b-2 border-r-2 border-l-2 border-gray-300">
                    <div className="card w-full bg-black rounded-none">
                        <div className="flex justify-between ">
                            <div className="flex">
                                <div>
                                    <img 
                                        className="rounded-full max-w-16 ml-5"
                                        src="data:image/png;base64,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" 
                                        alt="Avatar" 
                                    />
                                </div>

                                <div className="flex">
                                    <h1 className="text-white text-lg hidden lg:block">الاسم</h1>
                                    <span className="mx-1 text-white text-lg hidden lg:inline-block"> | </span>
                                    <h4 className="text-white text-lg">اسم المستخدم</h4>
                                    <h5 className="mr-2 text-white text-lg">12 يونيو</h5>
                                </div>
                            </div>

                            <Link to="/home">
                                <div>
                                    <span className="text-3xl text-white">...</span>
                                </div>
                            </Link>
                        </div>

                        <div className="card-body">
                            <h2 className="card-title text-white text-lg">السلام عليكم ورحمة الله وبركاته</h2>                            
                        </div>

                        <figure>
                            <img
                            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                            alt="img" />
                        </figure>
                    </div>
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
                        <h2 className="text-white text-2xl font-semibold mb-2">ماذا يحدث</h2>

                        {/* Trend 1 */}
                        <Link to="/home">
                            <div className="mb-8">
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
                            <div className="mb-8">
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
                            <div className="mb-8">
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
                            <div className="mb-8">
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
                            <div className="mb-8">
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
        </div>
    )
};