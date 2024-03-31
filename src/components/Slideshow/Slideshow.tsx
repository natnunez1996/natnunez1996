import { AnimatePresence, motion } from "framer-motion"
import { Card } from "@/components"

interface Props {
    data: any;
    direction: number;
    page: number;
}

function Slideshow({ data, direction, page }: Props): JSX.Element {

    const variants = {
        enter: (direction: number) => {
            return {
                x: direction === 1 ? 100 : -100,
                opacity: 0
            };
        },
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction: number) => {
            return {
                zIndex: 0,
                x: direction === -1 ? 100 : -100,
                opacity: 0
            };
        }
    };


    return (
        <div className="slideshow">
            <AnimatePresence mode="wait" custom={direction} initial={false}>
                <motion.div
                    key={page}
                    variants={variants}
                    custom={direction}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: { type: 'just', stiffness: 300, damping: 30 },
                        opacity: { duration: .2 }
                    }}
                >
                    <Card
                        title={data[page].title}
                        description={data[page].description}
                        imgSource={data[page].imgSrc}
                    />
                </motion.div>
            </AnimatePresence>
        </div>

    )
}

export default Slideshow