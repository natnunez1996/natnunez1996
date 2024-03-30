import './button.scss'
import { motion } from 'framer-motion'

interface Props {
    children: React.ReactNode,
    onClick: () => void
}
export default function Button({ children, onClick }: Props): React.JSX.Element {
    return (
        <motion.button whileHover={{ scale: .9 }} whileTap={{ scale: 1.1 }} onClick={onClick}>{children}</motion.button>
    )
}