import { useState, useEffect } from "react"

export const useIconTransition = (list, speed = 500) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [imageList, setImageList] = useState([])

    useEffect(() => {
        const typingInterval = setInterval(() => {
            if (currentIndex < list.length) {
                setImageList((prevList) => [...prevList, list[currentIndex]])
                setCurrentIndex((prevIndex) => prevIndex + 1)
            } else {
                clearInterval(typingInterval)
            }
        }, speed)

        return () => {
            clearInterval(typingInterval)
        }
    }, [list, speed, currentIndex])

    return imageList
}
