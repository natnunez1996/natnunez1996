const openImage = (
    index: number,
    setCurrentImage: React.Dispatch<React.SetStateAction<number>>,
    setImageViewerOpen: React.Dispatch<React.SetStateAction<boolean>>): void => {
    setCurrentImage(index)
    setImageViewerOpen(true)
}

const closeImageViewer =
    (setImageViewerOpen: React.Dispatch<React.SetStateAction<boolean>>): void => {
        setImageViewerOpen(false)
    }
export { openImage, closeImageViewer };