import Link from 'next/link'

export default function Home() {
    return (
        <div>
            <h1>Welcome to Home</h1>
            <ul>
                <li><Link href='/profile'>Profile</Link></li>
                <li><Link href='/about'>About</Link></li>
                <li><Link href='/products'>Product</Link></li>
                <li><Link href='/blog'>Blog</Link></li>
            </ul>
        </div>
    )
} 