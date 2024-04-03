import { useState } from "react";

export default function Form() {
    const [jawaban, setJawaban] = useState('');
    const [error, setError] = useState(null);
    const [status, setStatus] = useState('typing');

    if (status == 'success') {
        return (
            <h1>
                Yatta...Jawaban Benar!
            </h1>
        )
    }

    async function handleSubmit(e: { preventDefault: () => void; }) {
        e.preventDefault();
        setStatus('Submitting...');
        try {
            await submitForm(jawaban);
            setStatus('success');
        } catch (err: any) {
            setStatus('typing');
            setError(err);
        }
    }

    function handleTextareaChange(e: any) {
        setJawaban(e.target.value);
    }

    return (
        <>
            <div className="w-full max-w-xs">
                <h2>Tebak Nama Hewan</h2>
                <p>Hewan apa yang ditakuti oleh doraemon???</p>
                <form
                    className="shadow-md rounded px-8 pt-6 pb-8 mb-4 text-black border-gray-400"
                    onSubmit={handleSubmit}
                >
                    <textarea
                        value={jawaban}
                        onChange={handleTextareaChange}
                        disabled={status === 'Submitting...'}
                    />
                    <br />
                    <button
                        className="bg-blue-400 p-2 m-2 rounded text-sm text-white"
                        disabled={jawaban.length === 0 || status === 'Submitting...'}
                    >
                        Submit
                    </button>
                    {error !== null && <p className="Error text-red-500 text-sm">{error.message}</p>}
                </form>
            </div>
        </>
    )
}

function submitForm(jawaban: any) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let shouldError = jawaban.toLowerCase() !== 'tikus';
            if (shouldError) {
                reject(new Error('Jawaban Anda Salah!'));
            } else {
                resolve('Success');
            }
        }, 500);
    });
}

export function Form2() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const fullName = firstName + ' ' + lastName;

    function handleFirstNameChange(e: any) {
        setFirstName(e.target.value);
    }

    function handleLastNameChange(e: any) {
        setLastName(e.target.value);
    }

    return (
        <>
            <h2>Silahkan isi nama lengkap anda</h2>
            <label className="block w-full m-2">
                Nama depan:
                <input
                    className="text-sm text-black ml-2 rounded"
                    value={firstName}
                    onChange={handleFirstNameChange}
                />
            </label>

            <label className="block w-full m-2">
                Nama belakang:
                <input
                    className="text-sm text-black ml-2 rounded"
                    value={lastName}
                    onChange={handleLastNameChange}
                />
            </label>
            <p>Nama lengkap Anda adalah : <b className="text-blue-600">{fullName}</b></p>
        </>
    )
}