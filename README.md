# Python認定試験 学習支援アプリ

## 開発の背景と目的
Python認定試験の学習において、以下の課題を解決するために開発しました：
- 問題演習の途中で中断すると最初からやり直しが必要
- 進捗状況が保存されない
- 間違えた問題の復習がしづらい
- レベルに応じた段階的な学習が難しい

## アプリケーションの特徴
- 3つの試験カテゴリー（基礎/データ分析/実践）に対応
- 各カテゴリーで3段階（初級/中級/上級）の難易度設定
- LocalStorageを使用した進捗管理
- レスポンシブデザインによるマルチデバイス対応

## 使用技術
- **フロントエンド**
  - React
  - React Router
  - TailwindCSS
- **アイコン**
  - Lucide React
- **データ管理**
  - LocalStorage
  - React Hooks

## インストール方法

```bash
# リポジトリのクローン
git clone [リポジトリURL]

# プロジェクトディレクトリへ移動
cd python-quiz-app

# 依存パッケージのインストール
npm install
```

## 利用可能なコマンド

### `npm start`
開発モードでアプリを起動します。\
[http://localhost:3000](http://localhost:3000) を開いてブラウザで表示。\
コードの変更時に自動でリロードされます。

### `npm run build`
本番用のアプリをビルドして `build` フォルダに出力します。\
React を本番モードで適切にバンドルし、最適化されたビルドを作成します。

## アプリケーション構造
```
python-quiz-app/
├── public/
│   └── index.html
└── src/
    ├── components/
    │   ├── Layout.jsx    # 共通レイアウト
    │   ├── Quiz.jsx      # クイズコンポーネント
    │   └── Home.jsx      # ホーム画面
    ├── data/
    │   ├── basicQuizData.js      # 基礎試験の問題
    │   ├── analysisQuizData.js   # データ分析試験の問題
    │   ├── practiceQuizData.js   # 実践試験の問題
    │   └── index.js      # データまとめ
    ├── App.jsx           # メインアプリケーション
    └── index.js          # エントリーポイント
```

## 今後の開発予定
- ユーザー認証の実装
- 問題の解答履歴分析機能
- 苦手分野の可視化
- 模擬試験モードの追加
- 問題データベースの拡充

## ライセンス
MIT

## 作者
[あなたの名前]

## 謝辞
このプロジェクトは [Create React App](https://github.com/facebook/create-react-app) を使用して作成されました。
