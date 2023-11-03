import Video from 'next-video'
import locol_promo from '@videos/locol_promo.mp4'

export default function Home() {
    return <Video src={locol_promo} />
}