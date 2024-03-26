import './card.scss'

interface Props {
    title: string,
    description: string,
    imgSource: string
}

function Card({ title, description, imgSource }: Props): JSX.Element {
    return (
        <figure className='card'>
            <img src={imgSource} alt={title} />
            <figcaption><em>{title}:</em></figcaption>
            <figcaption>{description}</figcaption>
        </figure>
    )
}

export default Card