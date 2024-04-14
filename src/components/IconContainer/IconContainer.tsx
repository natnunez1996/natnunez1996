import { motion } from "framer-motion"

interface Props {
    iconSize?: string
    imgSrc: string
    link: string
}

function IconContainer({ iconSize = "20px", imgSrc, link }: Props): JSX.Element {
    return (
        <a href={link} target='_blank' rel='noopener noreferrer' >
            <motion.img whileHover={{ scale: 1.3 }} whileTap={{ scale: 1 }} src={imgSrc} style={{ width: iconSize, height: iconSize }} />
        </a>
    )
}

export default IconContainer