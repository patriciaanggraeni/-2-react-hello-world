type Props = {
    params: {
        reviewId: string
    }
}

export default function ProductDetails({ params }: Props) {
    return (
        <h1>Product Review {params.reviewId}</h1>
    )
}