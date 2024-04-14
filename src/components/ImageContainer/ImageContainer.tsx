import { motion } from 'framer-motion'

interface Props {
    imgSrc: string
    title: string
}

function ImageContainer({ imgSrc, title }: Props): JSX.Element {
    return (
        <motion.div
            animate={{ opacity: 1, x: 0, transition: { x: { stiffness: 1000, velocity: -100 } } }}
            initial={{ opacity: 0 }}
        >
            <img src={imgSrc} alt={title} />
        </motion.div>
    )
}

export default ImageContainer