'use strict';

import CPPEnt from '../../components/CPPEnt';

export default function CPPEntLogical(): JSX.Element {
    return (
        <CPPEnt name="論理演算" slug="logical">
            <p>
                論理演算とは、1つか2つの真偽値を元に真偽値を出力する計算です。<wbr />
                論理演算は基本的に全てC++上で表現可能です。
            </p>
            <table>
                <caption>論理演算の種類</caption>
                <thead>
                    <tr>
                        <th>名前(略字)</th>
                        <th>名前(日本語)</th>
                        <th>C++での書き方</th>
                        <th>出力例</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>AND</td>
                        <td>論理積</td>
                        <td><span className="inline-code">a && b</span></td>
                        <td>
                            <table>
                                <tbody>
                                    <tr>
                                        <td />
                                        <th>false</th>
                                        <th>true</th>
                                    </tr>
                                    <tr>
                                        <th>false</th>
                                        <td>false</td>
                                        <td>false</td>
                                    </tr>
                                    <tr>
                                        <th>true</th>
                                        <td>false</td>
                                        <td>true</td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td>OR</td>
                        <td>論理和</td>
                        <td><span className="inline-code">a || b</span></td>
                        <td>
                            <table>
                                <tbody>
                                    <tr>
                                        <td />
                                        <th>false</th>
                                        <th>true</th>
                                    </tr>
                                    <tr>
                                        <th>false</th>
                                        <td>false</td>
                                        <td>true</td>
                                    </tr>
                                    <tr>
                                        <th>true</th>
                                        <td>true</td>
                                        <td>true</td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td>XOR・EOR・ExOR</td>
                        <td>排他的論理和</td>
                        <td><span className="inline-code">a ^ b</span></td>
                        <td>
                            <table>
                                <tbody>
                                    <tr>
                                        <td />
                                        <th>false</th>
                                        <th>true</th>
                                    </tr>
                                    <tr>
                                        <th>false</th>
                                        <td>false</td>
                                        <td>true</td>
                                    </tr>
                                    <tr>
                                        <th>true</th>
                                        <td>true</td>
                                        <td>false</td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td>NOT</td>
                        <td>論理否定</td>
                        <td><span className="inline-code">!a</span></td>
                        <td>
                            <table>
                                <tbody>
                                    <tr>
                                        <th>false</th>
                                        <th>true</th>
                                    </tr>
                                    <tr>
                                        <td>true</td>
                                        <td>false</td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td>NAND</td>
                        <td>否定論理積</td>
                        <td><span className="inline-code">!(a && b)</span></td>
                        <td>
                            <table>
                                <tbody>
                                    <tr>
                                        <td />
                                        <th>false</th>
                                        <th>true</th>
                                    </tr>
                                    <tr>
                                        <th>false</th>
                                        <td>true</td>
                                        <td>true</td>
                                    </tr>
                                    <tr>
                                        <th>true</th>
                                        <td>true</td>
                                        <td>false</td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td>NOR</td>
                        <td>否定論理和</td>
                        <td><span className="inline-code">!(a || b)</span></td>
                        <td>
                            <table>
                                <tbody>
                                    <tr>
                                        <td />
                                        <th>false</th>
                                        <th>true</th>
                                    </tr>
                                    <tr>
                                        <th>false</th>
                                        <td>true</td>
                                        <td>false</td>
                                    </tr>
                                    <tr>
                                        <th>true</th>
                                        <td>false</td>
                                        <td>false</td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td>XNOR</td>
                        <td>否定排他的論理和</td>
                        <td><span className="inline-code">!(a ^ b)</span></td>
                        <td>
                            <table>
                                <tbody>
                                    <tr>
                                        <td />
                                        <th>false</th>
                                        <th>true</th>
                                    </tr>
                                    <tr>
                                        <th>false</th>
                                        <td>true</td>
                                        <td>false</td>
                                    </tr>
                                    <tr>
                                        <th>true</th>
                                        <td>false</td>
                                        <td>true</td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                </tbody>
            </table>
        </CPPEnt>
    );
}
