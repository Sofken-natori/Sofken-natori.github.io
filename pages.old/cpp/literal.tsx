'use strict';

import CPPEnt from '../../app/components/CPPEnt';

export default function CPPEntLiteral(): JSX.Element {
    return (
        <CPPEnt slug="literal">
            <p>
                リテラルとはソースコードにそのまま書かれたデータの事です。<wbr />
                前後に文字を追加する事で追加情報を与える事も出来ます。
            </p>
            <table>
                <caption>基本的なリテラル</caption>
                <thead>
                    <tr>
                        <th>リテラル</th>
                        <th>名前</th>
                        <th>型</th>
                        <th>備考</th>
                    </tr>
                </thead>
                <tbody>
                    <Entry literal="123456" literalType="int" name="整数リテラル" />
                    <Entry literal="0b1011" literalType="int" name="2進数リテラル" />
                    <Entry literal="0x14fd" literalType="int" name="16進数リテラル" />
                    <Entry literal="017552" literalType="int" name="8進数リテラル" note="先頭が0から始まっていれば8進数リテラル扱いなので注意" />
                    <Entry literal="&apos;a&apos;" literalType="char" name="文字リテラル" note={<>C++20以降は<span className="inline-code">char8_t</span>型</>} />
                    <Entry literal="&quot;abcd&quot;" literalType="char *" name="文字列リテラル" note={<>C++20以降は<span className="inline-code">char8_t *</span>型</>} />
                    <Entry literal="1.2345" literalType="double" name="(倍精度)浮動小数点数リテラル" />
                    <Entry literal="1.234f" literalType="float" name="単精度浮動小数点数リテラル" />
                    <Entry literal="12345u" literalType="unsigned int" name="符号無し整数リテラル" note="2/8/16進数リテラルでも同様" />
                    <Entry literal="12345l" literalType="long" name="整数リテラル" note={<>2/8/16進数リテラルでも同様。lを2つにすれば<span className="inline-code">long long</span>型となる</>} />
                </tbody>
            </table>
        </CPPEnt>
    );
}

function Entry({ literal, literalType, name, note }: { literal: string, literalType: string, name: string, note?: JSX.Element | string }): JSX.Element {
    return (
        <tr>
            <td><span className="inline-code">{literal}</span></td>
            <td>{name}</td>
            <td><span className="inline-code">{literalType}</span></td>
            <td>{note ?? ''}</td>
        </tr>
    );
}
