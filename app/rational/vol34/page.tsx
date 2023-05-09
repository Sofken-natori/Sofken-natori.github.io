'use strict';

import { Rational, getRationalMedia } from '../../components';

export default function RationalVol34(): JSX.Element {
    return (
        <Rational vol={34}>
            <h2>楽曲</h2>
            <div className="extra-contents">
                <h3>メルト_きりたん composer:1年 SingUp_009</h3>
                <audio className="audio" controls>
                    <source src={getRationalMedia(34, 'メルト_きりたん.mp3')} type="audio/mpeg" />
                </audio>
                <h3>いつも何度でも_きりたん composer:1年 SingUp_009</h3>
                <audio className="audio" controls>
                    <source src={getRationalMedia(34, 'いつも何度でも_きりたん.mp3')} type="audio/mpeg" />
                </audio>
                <h3>友～旅立ちの時～_きりたん composer:1年 SingUp_009</h3>
                <audio className="audio" controls>
                    <source src={getRationalMedia(34, '友～旅立ちの時～_きりたん.mp3')} type="audio/mpeg" />
                </audio>
                <h3>時間のない〇〇 composer: RT2 yiu</h3>
                <audio className="audio" controls>
                    <source src={getRationalMedia(34, '時間のない〇〇.mp3')} type="audio/mpeg" />
                </audio>
            </div>
        </Rational>
    );
}
