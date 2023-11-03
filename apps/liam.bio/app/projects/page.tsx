import Video from 'next-video';

export default function Page() {
    return <Video src='https://stream.mux.com/c2gxBhVwuFIHIec2Y5A35UJIenIJ02CBQpqDdYGbmOT8.m3u8' style={{ maxWidth: '42rem' }} />
}
