
interface Props {
    imgSrc: string
    link: string
    title: string
}

function ImageContainer({ imgSrc, link, title }: Props): JSX.Element {
    return (
        <a href={link} target='_blank' rel='noopener noreferrer'>
            <img src={imgSrc} alt={title} />
        </a>
    )
}

export default ImageContainer