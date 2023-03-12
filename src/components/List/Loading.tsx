import LoadingIcon from '@/assets/loading.gif'

export default function Loading() {
    return (
        <div style={{ alignSelf: 'center' }}>
            <img src={LoadingIcon} height={25} width={25} />
        </div>
    )
}
