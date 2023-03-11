import { useCallback, useEffect } from 'react'

export default function useScrollBottomEffect(onScrollBottom: () => void, dependency: any) {
    const handleScroll = useCallback(() => {
        const scrollPosition = window.innerHeight + window.pageYOffset
        const pageBottom = document.body.scrollHeight
        if (scrollPosition >= pageBottom) {
            onScrollBottom()
        }
    }, [...dependency])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [handleScroll])
}
