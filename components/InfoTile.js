
export default function InfoTile({ children }){

    return (
        <div className="relative w-full max-w-180 bg-white flex flex-col items-center rounded-2xl shadow-lg p-10 mx-10">
            {children}
        </div>
    );
}