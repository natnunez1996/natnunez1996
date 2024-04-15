import { motion } from 'framer-motion';
interface Props {
    className: string;
    children: React.ReactNode
}

function Container({ className, children }: Props): JSX.Element {
    return (
        <motion.div
            animate={{ opacity: 1, transition: { duration: 1 } }}
            className={className}
            initial={{ opacity: 0 }}
        >
            {children}
        </motion.div>
    )
}

export default Container