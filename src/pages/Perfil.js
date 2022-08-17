import { useAuth } from '../context/CartContex';

export default function Home() {

    const { logout, loading } = useAuth();

    const handlLogOut = async () => {
        try {
            await logout();
        } catch (error) {
            console.log(error.message);
        };
    };

    if (!loading) return <h1>Loading</h1>
    return (
        <div className="w-full max-w-xs m-auto text-black">
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <button onClick={handlLogOut} variant="primary"
                    className="text-dark">Logout</button>
            </div>
        </div>
    );
};