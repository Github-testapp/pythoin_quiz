import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircle2, BookOpen, BrainCircuit, Code } from "lucide-react";
import Layout from "./Layout";

const Home = () => {
  const [activeTab, setActiveTab] = useState("basic");
  const navigate = useNavigate();

  // 各タブのデータを定義（カラースキームを変更）
  const tabsData = {
    basic: {
      color: "#4F46E5", // インディゴ
      icon: <BookOpen className="w-5 h-5" />,
      title: "基礎学習",
      description: "Python基礎文法の完全習得",
      levels: [
        { id: "basic-beginner", name: "入門編スタート" },
        { id: "basic-intermediate", name: "基本編スタート" },
        { id: "basic-advanced", name: "応用編スタート" },
      ],
    },
    analysis: {
      color: "#7C3AED", // パープル
      icon: <BrainCircuit className="w-5 h-5" />,
      title: "データサイエンス",
      description: "データ分析・機械学習の基礎",
      levels: [
        { id: "analysis-beginner", name: "データ分析入門" },
        { id: "analysis-intermediate", name: "データ分析基礎" },
        { id: "analysis-advanced", name: "データ分析応用" },
      ],
    },
    practice: {
      color: "#2563EB", // ブルー
      icon: <Code className="w-5 h-5" />,
      title: "実践スキル",
      description: "実務で使えるPythonスキル",
      levels: [
        { id: "practice-beginner", name: "実践入門コース" },
        { id: "practice-intermediate", name: "実践基礎コース" },
        { id: "practice-advanced", name: "実践応用コース" },
      ],
    },
  };

  const handleStartQuiz = (level) => {
    navigate(`/quiz/${level}`);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        {/* ヒーローセクション */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Python学習プラットフォーム
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            基礎から実践まで、体系的に学べるPython学習プラットフォーム。
            実践的な問題と詳細な解説で、確実なスキルアップを実現します。
          </p>
        </div>

        {/* タブナビゲーション */}
        <div className="flex justify-center gap-4 mb-12">
          {Object.entries(tabsData).map(([key, data]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300
                ${
                  activeTab === key
                    ? "text-white shadow-lg scale-105"
                    : "text-gray-600 bg-white hover:bg-gray-50"
                }`}
              style={{ backgroundColor: activeTab === key ? data.color : "" }}
            >
              {data.icon}
              <span>{data.title}</span>
            </button>
          ))}
        </div>

        {/* コンテンツエリア */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div
            className="p-6 border-b border-gray-100"
            style={{ backgroundColor: `${tabsData[activeTab].color}15` }}
          >
            <div className="flex items-center gap-3 mb-2">
              {tabsData[activeTab].icon}
              <h2 className="text-2xl font-semibold text-gray-800">
                {tabsData[activeTab].title}
              </h2>
            </div>
            <p className="text-gray-600 ml-8">
              {tabsData[activeTab].description}
            </p>
          </div>

          <div className="p-6">
            <div className="grid md:grid-cols-2 gap-8">
              {/* 左側の特徴説明 */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-4">
                  コースの特徴
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-50">
                    <CheckCircle2
                      className="w-5 h-5 mt-0.5 flex-shrink-0"
                      style={{ color: tabsData[activeTab].color }}
                    />
                    <div>
                      <p className="font-medium text-gray-700">
                        段階的な学習プロセス
                      </p>
                      <p className="text-sm text-gray-600">
                        レベルに合わせて学習を進められます
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-50">
                    <CheckCircle2
                      className="w-5 h-5 mt-0.5 flex-shrink-0"
                      style={{ color: tabsData[activeTab].color }}
                    />
                    <div>
                      <p className="font-medium text-gray-700">
                        詳細な解説付き
                      </p>
                      <p className="text-sm text-gray-600">
                        各問題に分かりやすい解説があります
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-50">
                    <CheckCircle2
                      className="w-5 h-5 mt-0.5 flex-shrink-0"
                      style={{ color: tabsData[activeTab].color }}
                    />
                    <div>
                      <p className="font-medium text-gray-700">進捗管理機能</p>
                      <p className="text-sm text-gray-600">
                        学習の進み具合を可視化できます
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 右側のコース選択 */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-700 mb-4">
                  コースを選択
                </h3>
                {tabsData[activeTab].levels.map((level) => (
                  <button
                    key={level.id}
                    onClick={() => handleStartQuiz(level.id)}
                    className="w-full p-4 flex items-center justify-between rounded-lg border border-gray-200 
                             hover:border-transparent hover:shadow-md transition-all duration-300"
                    style={{
                      backgroundColor: "white",
                      color: tabsData[activeTab].color,
                    }}
                  >
                    <span className="font-medium">{level.name}</span>
                    <span className="text-sm opacity-75">開始する →</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
