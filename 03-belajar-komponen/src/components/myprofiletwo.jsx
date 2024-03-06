import { getImageUrlV2 } from '@/utils/utils';
import Image from 'next/image'

export function MyAvatar({ person, size }) {

    const getSize = size < 90 ? 's' : 'b'

    return (
        <Image
        className="avatar"
        src={getImageUrlV2(person, getSize)}
        alt={person.name}
        width={size}
        height={size}
        />
    );
}

export default function MyProfile() {
  return (
    <MyAvatar
      size={200}
      person={{ 
        name: 'Gregorio Y. Zara', 
        imageId: '7vQD0fP'
      }}
    />
  );
}