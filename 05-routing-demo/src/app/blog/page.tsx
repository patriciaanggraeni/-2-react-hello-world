import Link from 'next/link'

export default function Blog() {
    return (
        <div>
            <h1>Blog List</h1>
            <ul>
                <li><Link href='/blog/first'>Blog 1</Link></li>
                <li><Link href='/blog/second'>Blog 2</Link></li>
            </ul>
        </div>
    );
}