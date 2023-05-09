'use strict';

import { C, CPPEnt, CPPEntLink, Code } from '../../components';

export default function CPPEntEnum(): JSX.Element {
    return (
        <CPPEnt slug="enum">
            <p>
                列挙型とは、状態の管理などをやりやすくするための仕組みです。<br />
                具体的には、数値データ(デフォルトで<C>int</C>)に分かりやすい識別名を付け、それを外部から利用する事で<wbr />
                謎の数値がいきなりコード内に現れるのに比べ、読みやすくなります。
            </p>
            <p>
                また、列挙型には2種類書き方があります。<wbr />
                ですが、後述の通り特別な事情がない限り後者を使った方が良いです。
            </p>
            <h3 id="enum">enum</h3>
            <p>
                C言語由来の機能です。<wbr />
                別名「<CPPEntLink anchor="#スコープ" name="スコープ" slug="dictionary" />を持たない列挙型」と言い、その名の通り宣言された場所のスコープにそのまま展開されます。<br />
                そのため、以下のようなコードはNG。
            </p>
            <Code content={
                `enum A {\n` +
                `    ONE,\n` +
                `    TWO\n` +
                `};\n` +
                `\n` +
                `enum B {\n` +
                `    ONE,\n` +
                `    TWO\n` +
                `};\n` +
                `\n` +
                `// この場合、利用時には「ONE」や「TWO」を使うがAの物かBの物かの区別が付かないためエラー`
            } lang="cpp" />
            <p>
                このような理由から、現在では特に事情(〜C++03やC言語を使う場合など)のない限りは↓を使う事がほとんどです。
            </p>
            <h3 id="enum class">enum class</h3>
            <p>
                C++11から導入された機能。<C>enum struct</C>とも書けますがマイナー。<wbr />
                別名「スコープを持つ列挙型」と言い、識別名は<C>列挙型名::識別名</C>のようにしてアクセスします。<br />
                <C>enum</C>とは違い、このように列挙型名経由でアクセスするため同じ識別名が被る心配がなくなりました。<br />
                また、何の識別名であるかも分かりやすくなりました。<br />
                そして、C++03以前の<C>enum</C>とは異なり、↓のコードのように数値データに使う型を指定する事が出来るようになりました。<wbr />
                (C++11以降であれば<C>enum</C>でも可能です。)
            </p>
            <Code content={
                `// 数値データの型は指定しない場合int(enumと同じ)\n` +
                `enum class A {\n` +
                `    ONE,\n` +
                `    TWO\n` +
                `}; \n` +
                `\n` +
                `// この場合、Bの数値データの型はunsigned short(std::uint16_t)\n` +
                `enum class B : unsigned short {\n` +
                `    ONE,\n` +
                `    TWO\n` +
                `};\n` +
                `\n` +
                `// この場合、利用時には「A::ONE」や「B::ONE」などを使うためAの物かBの物かの区別が付くためOK`
            } lang="cpp" />
        </CPPEnt>
    );
}
