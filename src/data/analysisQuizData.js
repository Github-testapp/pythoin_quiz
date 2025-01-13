export const analysisQuizData = {
  'analysis-beginner': [
    {
      id: 1,
      question: "NumPyの配列（ndarray）を作成する基本的な関数は？",
      options: [
        "numpy.create()",
        "numpy.array()",
        "numpy.ndarray()",
        "numpy.make()"
      ],
      correctAnswer: 1,
      explanation: "numpy.array() 関数を使用して、Pythonのリストや他のシーケンスからNumPy配列を作成します。"
    },
    {
      id: 2,
      question: "Pandasでデータフレームの欠損値を表す特殊な値は？",
      options: [
        "None",
        "NaN",
        "null",
        "missing"
      ],
      correctAnswer: 1,
      explanation: "Pandasでは NaN (Not a Number) が欠損値を表す標準的な方法です。"
    }
  ],
  'analysis-intermediate': [
    {
      id: 1,
      question: "scikit-learnで学習データとテストデータを分割する関数は？",
      options: [
        "split_dataset()",
        "train_test_split()",
        "dataset_split()",
        "split_data()"
      ],
      correctAnswer: 1,
      explanation: "train_test_split() 関数を使用してデータセットを訓練用とテスト用に分割します。"
    }
  ],
  'analysis-advanced': [
    {
      id: 1,
      question: "主成分分析（PCA）で次元削減を行う際、説明変数の単位が異なる場合、まず行うべき処理は？",
      options: [
        "対数変換",
        "標準化",
        "正規化",
        "二値化"
      ],
      correctAnswer: 1,
      explanation: "PCAを行う前に、各変数の単位の違いによる影響を除去するために標準化を行います。"
    }
  ]
};