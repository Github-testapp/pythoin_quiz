export const basicQuizData = {
  'basic-beginner': [
    {
      id: 1,
      question: "Pythonで変数に値を代入する正しい方法は？",
      options: [
        "x := 10",
        "x = 10",
        "let x = 10",
        "var x = 10"
      ],
      correctAnswer: 1,
      explanation: "Pythonでは '=' 演算子を使って変数に値を代入します。"
    },
    {
      id: 2,
      question: "Pythonのリスト内の最初の要素のインデックスは？",
      options: [
        "1",
        "0",
        "-1",
        "None"
      ],
      correctAnswer: 1,
      explanation: "Pythonでは、リストのインデックスは0から始まります。"
    },
    {
      id: 3,
      question: "Pythonで文字列を結合する演算子は？",
      options: [
        "+",
        "&",
        ".",
        ","
      ],
      correctAnswer: 0,
      explanation: "Pythonでは '+' 演算子を使って文字列を結合します。"
    },
    {
      id: 4,
      question: "Pythonでコメントを書く際に使用する記号は？",
      options: [
        "//",
        "/* */",
        "#",
        "--"
      ],
      correctAnswer: 2,
      explanation: "Pythonでは '#' を使用して1行コメントを書きます。"
    }
  ],
  'basic-intermediate': [
    {
      id: 1,
      question: "Pythonのリストに要素を追加するメソッドは？",
      options: [
        "add()",
        "push()",
        "append()",
        "insert()"
      ],
      correctAnswer: 2,
      explanation: "append()メソッドを使用してリストの末尾に要素を追加します。"
    },
    {
      id: 2,
      question: "Pythonで辞書（dict）のキーを取得するメソッドは？",
      options: [
        "keys()",
        "getKeys()",
        "keySet()",
        "allKeys()"
      ],
      correctAnswer: 0,
      explanation: "keys()メソッドを使用して辞書のすべてのキーを取得できます。"
    },
    {
      id: 3,
      question: "Pythonでリストをソートするメソッドは？",
      options: [
        "order()",
        "sort()",
        "arrange()",
        "organize()"
      ],
      correctAnswer: 1,
      explanation: "sort()メソッドを使用してリストを昇順にソートできます。"
    },
    {
      id: 4,
      question: "Pythonの文字列フォーマットで使用する演算子は？",
      options: [
        "%",
        "$",
        "&",
        "@"
      ],
      correctAnswer: 0,
      explanation: "% 演算子を使用して文字列のフォーマットを行えます（現代では f-strings も一般的です）。"
    }
  ],
  'basic-advanced': [
    {
      id: 1,
      question: "Pythonでデコレータを定義する際に使用する記号は？",
      options: [
        "@",
        "#",
        "$",
        "&"
      ],
      correctAnswer: 0,
      explanation: "'@' 記号を使用してデコレータを定義します。"
    },
    {
      id: 2,
      question: "Pythonのリスト内包表記で条件式を書く場合の正しい位置は？",
      options: [
        "最初",
        "最後",
        "for の前",
        "変数の後"
      ],
      correctAnswer: 1,
      explanation: "リスト内包表記では条件式は最後に記述します。例：[x for x in range(10) if x % 2 == 0]"
    },
    {
      id: 3,
      question: "Pythonでジェネレータ関数を作成する際に使用するキーワードは？",
      options: [
        "yield",
        "gen",
        "generate",
        "return"
      ],
      correctAnswer: 0,
      explanation: "yield キーワードを使用してジェネレータ関数を定義します。"
    },
    {
      id: 4,
      question: "Pythonのコンテキストマネージャで使用するキーワードは？",
      options: [
        "using",
        "with",
        "context",
        "manage"
      ],
      correctAnswer: 1,
      explanation: "with キーワードを使用してコンテキストマネージャを実装します。"
    }
  ]
};