import React from 'react'
import Image from "next/image";
import profileImage from '/public/image.jpg';

const user = {
    name: 'Patria Anggara Susilo Putra',
    nim: '21414720058',
    imageUrl: profileImage,
    imageSize: 250,
}

const Profile = () => {
    return (
        <div className='text-center'>
            <Image
                className="avatar rounded-full mx-auto mt-5"
                src={user.imageUrl}
                alt={'Foto ' + user.name}
                width={ user.imageSize }
                height={ user.imageSize } />
            <h1 className='mt-10 text-4xl font-bold'>{user.name}</h1>
            <h2 className='mt-10 text-4xl font-bold'>{user.nim}</h2>
        </div>
    );
}

export default Profile