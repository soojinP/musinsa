import React from 'react'
import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue } from 'recoil'
import Page from './pages/Page'
import { QueryClient, QueryClientProvider } from 'react-query'

//TODO: focus out 됬다가 다시 돌아왔을 때 똑같은 query 또 날리는거 어떻게 방지해?
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
