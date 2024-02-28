import Profile from "./profile";

export function Gallery() {
    return (
        <div className="flex justify-center items-center">
            <Profile />
            <Profile />
            <Profile />
        </div>
    );
}