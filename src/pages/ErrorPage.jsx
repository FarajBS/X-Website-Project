import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
    <div id="error-page" className="w-screen h-screen flex flex-col justify-center items-center bg-red-300">
        <h1 className="text-red-600 text-5xl mb-3 font-bold">خطأ</h1>
        <h2 className="text-red-600 text-4xl mb-3 font-semibold">هذه الصفحة غير موجودة</h2>

        <p>
            <i className="text-red-600 text-3xl font-medium">( {error.statusText || error.message} )</i>
        </p>
    </div>
    );
};