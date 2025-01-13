export const practiceQuizData = {
  'practice-beginner': [
    {
      id: 1,
      question: "以下のうち、Pythonの正しい例外処理の構文は？",
      options: [
        "try { } catch { }",
        "try: except:",
        "try ... catch",
        "if error: except"
      ],
      correctAnswer: 1,
      explanation: "Pythonでは try: と except: を使用して例外処理を行います。"
    },
    {
      id: 2,
      question: "Pythonでファイルを読み込む際の推奨される方法は？",
      options: [
        "file = open('file.txt', 'r')\nfile.close()",
        "with open('file.txt', 'r') as file:",
        "file = File.open('file.txt')",
        "file = read('file.txt')"
      ],
      correctAnswer: 1,
      explanation: "with文を使用することで、ファイルの自動クローズが保証されます。"
    }
  ],
  'practice-intermediate': [
    {
      id: 1,
      question: "以下のうち、Pythonのデコレータの正しい構文は？",
      options: [
        "@decorator\ndef function():",
        "@decorator()\ndef function():",
        "decorator@\ndef function():",
        "def function():\n@decorator"
      ],
      correctAnswer: 0,
      explanation: "@decorator を関数定義の直前に配置します。"
    }
  ],
  'practice-advanced': [
    {
      id: 1,
      question: "マルチスレッドプログラミングにおいて、Pythonの特徴的な制限は？",
      options: [
        "GIL (Global Interpreter Lock)",
        "MIL (Multiple Instance Lock)",
        "PIL (Process Interpreter Lock)",
        "TIL (Thread Instance Lock)"
      ],
      correctAnswer: 0,
      explanation: "GIL (Global Interpreter Lock) により、Pythonの複数スレッドは同時に Python コードを実行できません。"
    }
  ]
};