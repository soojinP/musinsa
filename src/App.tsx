import { RecoilRoot } from 'recoil'
import Page from './pages/Page'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            refetchOnMount: false,
            retry: false,
        },
    },
})

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <RecoilRoot>
                <Page />
            </RecoilRoot>
        </QueryClientProvider>
    )
}

export default App
