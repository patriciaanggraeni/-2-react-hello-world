import Link from 'next/link'

export default function SecondBlog() {
    return (
        <div>
            <h1>Second Blog</h1>
            <li><Link href='second/1'>Page 1</Link></li>
            <li><Link href='second/2'>Page 2</Link></li>
            <li><Link href='second/3'>Page 3</Link></li>
        </div>
    );
}