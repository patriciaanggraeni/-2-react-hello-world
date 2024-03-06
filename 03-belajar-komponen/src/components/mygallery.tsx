import { getImageUrl } from '@/utils/utils';
import MyProfile from './myprofile';

export default function MyGallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <MyProfile
        name="Maria Skłodowska-Curie"
        imageUrl='szV5sdG'
        profesi="Fisikawan dan kimiawan"
        penghargaan="4 (Penghargaan Nobel Fisika, Penghargaan Nobel Kimia, Medali Davy, Medali Matteucci)"
        penemuan="polonium (unsur kimia)"
      />
      <MyProfile
        name="Katsuko Saruhashi"
        imageUrl='YfeOqp2'
        profesi="Ahli Geokimia"
        penghargaan="2 (Penghargaan Miyake Geokimia, Penghargaan Tanaka)"
        penemuan="sebuah metode untuk mengukur karbon dioksida pada air laut"
      />
    </div>
  );
}