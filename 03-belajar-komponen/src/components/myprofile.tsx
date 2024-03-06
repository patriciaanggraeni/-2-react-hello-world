  import { getImageUrl } from '@/utils/utils';
  import Image from 'next/image'

  interface MyProfileProps {
    name: string;
    imageUrl: string;
    profesi: string;
    penghargaan: string;
    penemuan: string;
  }

  export default function MyProfile({ name, imageUrl, profesi, penghargaan, penemuan }: MyProfileProps) {
      return (
        <section className="profile">
          <h2>{name}</h2>
          <Image
            className="avatar"
            src={getImageUrl(imageUrl)}
            alt={name}
            width={70}
            height={70}
          />
          <ul>
            <li>
              <b>Profesi: </b> 
              {profesi}
            </li>
            <li>
              <b>Penghargaan: </b> 
              {penghargaan}
            </li>
            <li>
              <b>Telah Menemukan: </b>
              {penemuan}
            </li>
          </ul>
        </section>
      );
  }
    