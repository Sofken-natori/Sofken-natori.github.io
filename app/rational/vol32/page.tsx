'use strict';

import { Rational, getRationalMedia } from '../../components';

export default function RationalVol32(): JSX.Element {
    return (
        <Rational vol={32} pdfUrl="/rational/vol32/vol32_ver2.pdf">
            <h2>楽曲</h2>
            <div className="extra-contents">
                <h3>Flicker composer:機械システム工学科 3年 木村竜輔</h3>
                <audio className="audio" controls>
                    <source src={getRationalMedia(32, 'Flicker-01.mp3')} type="audio/mpeg" />
                </audio>
                <h3>星海航路 composer:機械システム工学科 3年 hysk</h3>
                <audio className="audio" controls>
                    <source src={getRationalMedia(32, '星海航路.mp3')} type="audio/mpeg" />
                </audio>
            </div>
        </Rational>
    );
}
