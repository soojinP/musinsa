import { useLocation } from 'react-router-dom'

export default function useGetPageParam() {
    const { pathname, search } = useLocation()
    const urlParams = new URLSearchParams(search)
    const page = pathname === '/homework' ? urlParams.get('page') : null
    return page ? parseInt(page) : 1
}
