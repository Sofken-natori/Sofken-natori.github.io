'use strict';

import CPPEnt, { CPPEntLink } from '../../app/components/CPPEnt';

export default function CPPEntCast(): JSX.Element {
    return (
        <CPPEnt slug="cast">
            <p>
                型キャストとは、ある<CPPEntLink slug="type" />の<CPPEntLink slug="variable" />・<CPPEntLink slug="literal" />などを別の型に変換する場合に使用します。
            </p>
            <h3>C++で追加されたもの(推奨)</h3>
            <h4>static_cast</h4>
            <p>
                最も基本的なキャスト。基本的にこれだけを使い、どうしても<span className="inline-code">static_cast</span>では不可能なキャストな場合や<wbr />
                <span className="inline-code">void *</span>以外のポインタ型の変換の場合のみ他のキャストを使います。<br />
                数値同士(int→float・double→long longなど)や<CPPEntLink slug="enum" />から整数型への変換を行います。
            </p>
            <pre className="line-numbers">
                <code className="language-cpp">
                    int a = 10;
                    float b = static_cast&lt;float&gt;(a); // bの値は10.0f
                </code>
            </pre>
            <h4>dynamic_cast</h4>
            <p>
                継承関係にある<CPPEntLink slug="class" />の<CPPEntLink name="ポインタ" slug="reference" />の内、親クラスから子クラスへの変換に使います。<br />
                ただし、これに関してはオブジェクト指向の概念の内、ポリモーフィズム(多態性)についての知識が必要になるため深くは解説しません。
            </p>
            <pre className="line-numbers">
                <code className="language-cpp">
                    class A &lbrace;&rbrace;;
                    class B : public A &lbrace;&rbrace;;

                    // OK
                    A *a = new B; // BのインスタンスをA型の変数に代入
                    B *b = dynamic_cast&lt;B *&gt;(a); // A型の変数aをB型にキャスト(中身はBのインスタンスなためOK)

                    // NG
                    A *aa = new A; // AのインスタンスをA型の変数に代入
                    B *bb = dynamic_cast&lt;B *&gt;(aa); // A型の変数aaをB型にキャスト(中身がAのインスタンスなため実行時エラー)
                </code>
            </pre>
            <h4>reinterpret_cast</h4>
            <p>
                様々な型から別の型への変換を行います。<wbr />
                <span className="inline-code">static_cast</span>と異なり、内部的なビット表現はそのままに型だけすり替えます。<br />
                例えば、浮動小数点数型を整数型にキャストする場合、<span className="inline-code">static_cast</span>であれば小数点以下を切り捨てた整数に変換されますが、<wbr />
                <span className="inline-code">reinterpret_cast</span>の場合、内部表現をそのまま整数として扱うため全く脈絡のない数となります。
            </p>
            <pre className="line-numbers">
                <code className="language-cpp">
                    float a = 1.1f;
                    unsigned int b = *reinterpret_cast&lt;unsigned int *&gt;(&amp;a);
                    unsigned int c = static_cast&lt;unsigned int&gt;(a);
                    // bの値は「0b00111111100011001100110011001101」(1.1のfloat型での内部表現)
                    // cの値は「0b00000000000000000000000000000001」(整数の1)
                </code>
            </pre>
            <h4>const_cast</h4>
            <p>
                <CPPEntLink name="const" slug="variable" />やvolatile修飾子が付いた変数をそれらがない型へ変換します。<wbr />
                それ以外に用途がない上、そのような場面自体あまりないため使用頻度はかなり少ないです。
            </p>
            <pre className="line-numbers">
                <code className="language-cpp">
                    const int a = 1;
                    int b = const_cast&lt;int&gt;(a);
                </code>
            </pre>
            <h3>C言語からあるもの(絶対使うな)</h3>
            <h4>キャスト演算子</h4>
            <p>
                変数などの左にキャスト演算子を付ける事で型を変換します。<wbr />
                しかし、上記4つ(更に言えばほぼ<span className="inline-code">static_cast</span>)で事足りる他、<wbr />
                このキャスト演算子を使わなければならない場面は基本的に根本的な部分から間違っているため、使ってはいけません。<br />
                と言うか使わないで下さい。本当に。
            </p>
            <pre className="line-numbers">
                <code className="language-cpp">
                    // 本当にどうしても実験的にごく短期間に仕方なく使わなければならない場合にのみ計画的に使って下さい
                    int a;
                    float b = (float)a;
                </code>
            </pre>
        </CPPEnt>
    );
}