export default function Tombol_1() {
    function handleClick() {
        alert('Tombol telah ditekan!');
    }

    function handleMouseOver() {
        console.log('Eits, mau mencet tombol ya?');
    }

    return (
        <button
            className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded"
            onClick={handleClick}
            onMouseOver={handleMouseOver}>
            Ini Tombol
        </button>
    );
}