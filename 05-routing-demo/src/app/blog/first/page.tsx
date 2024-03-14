import Link from 'next/link'

export default function FirstBlog() {
    return (
        <div>
            <h1>First Blog</h1>
            <li><Link href='first/1'>Page 1</Link></li>
            <li><Link href='first/2'>Page 2</Link></li>
            <li><Link href='first/3'>Page 3</Link></li>
        </div>
    );
}