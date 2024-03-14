type Props = {
    params: {
        blogId: string
    }
}

export default function ProductDetails({ params }: Props) {
    return (
        <h1>First Blog, Page {params.blogId}</h1>
    )
}