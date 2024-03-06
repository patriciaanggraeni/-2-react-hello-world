import Image from 'next/image'

// const person = {
//     name: 'Gregorio Y. Zara',
//     profile: "https://i.imgur.com/7vQD0fPs.jpg",
//     theme: {
//         backgroundColor: 'black',
//         color: 'pink'
//     }
// };

const baseUrl = 'https://i.imgur.com/';
const person = {
  name: 'Gregorio Y. Zara',
  imageId: '7vQD0fP',
  imageSize: 's',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  }
}

export default function TodoList() {
    return (
        <div style={person.theme}>
        <h1>{person.name}&apos;s Todos</h1>
        <Image
            className="avatar"
            src={`${baseUrl}${person.imageId}${person.imageSize}.jpg`}
            alt="Gregorio Y. Zara"
            width={150}
            height={150}
        />
        <ul>
            <li>Improve the videophone</li>
            <li>Prepare aeronautics lectures</li>
            <li>Work on the alcohol-fuelled engine</li>
        </ul>
        </div>
    );
}