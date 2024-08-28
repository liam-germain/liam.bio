import Video from 'next-video';
import React from 'react';

import MuxPlayer from '@mux/mux-player-react';

export default function Page() {
    return <Video src='https://stream.mux.com/c2gxBhVwuFIHIec2Y5A35UJIenIJ02CBQpqDdYGbmOT8.m3u8' style={{ maxWidth: '42rem' }} />
}


// export default function Page() {
//     return (
//         <MuxPlayer
//             streamType="on-demand"
//             playbackId="c2gxBhVwuFIHIec2Y5A35UJIenIJ02CBQpqDdYGbmOT8"
//             metadataVideoTitle="Placeholder (optional)"
//             metadataViewerUserId="Placeholder (optional)"
//             primaryColor="#FFFFFF"
//             secondaryColor="#000000"
//         />
//         // <>hello</>
//     );
// }

