import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CheckCircle2, XCircle, ArrowRight, ArrowLeft, Home, BookOpen } from 'lucide-react';
import { quizData } from '../data';

const Quiz = () => {
  const { level } = useParams();
  const navigate = useNavigate();
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(() => {
    const saved = localStorage.getItem(`quiz-score-${level}`);
    return saved ? JSON.parse(saved) : 0;
  });

  // クイズ完了状態の管理
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);

  if (!quizData || !quizData[level]) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            問題が見つかりません
          </h2>
          <button
            onClick={() => navigate('/')}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            ホームに戻る
          </button>
        </div>
      </div>
    );
  }

  const currentQuizzes = quizData[level];

  const handleAnswerSelect = (answerIndex) => {
    const isCorrect = answerIndex === currentQuizzes[currentQuizIndex].correctAnswer;
    setSelectedAnswer(answerIndex);
    setShowResult(true);
    if (isCorrect) {
      const newScore = score + 1;
      setScore(newScore);
      localStorage.setItem(`quiz-score-${level}`, JSON.stringify(newScore));
    }
  };

  const handlePreviousQuiz = () => {
    if (currentQuizIndex > 0) {
      setCurrentQuizIndex(c => c - 1);
      setSelectedAnswer(null);
      setShowResult(false);
    }
  };

  const handleNextQuiz = () => {
    if (currentQuizIndex < currentQuizzes.length - 1) {
      setCurrentQuizIndex(c => c + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setIsQuizCompleted(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuizIndex(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setIsQuizCompleted(false);
    localStorage.setItem(`quiz-score-${level}`, '0');
  };

  // クイズ完了画面
  if (isQuizCompleted) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              コース完了！
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              スコア: {score} / {currentQuizzes.length}
              ({Math.round((score / currentQuizzes.length) * 100)}%)
            </p>
            <div className="flex flex-col space-y-3">
              <button
                onClick={restartQuiz}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center justify-center"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                もう一度挑戦する
              </button>
              <button
                onClick={() => navigate('/')}
                className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 flex items-center justify-center"
              >
                <Home className="w-5 h-5 mr-2" />
                他のコースを選択する
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-2xl mx-auto px-4">
        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-600">
              問題 {currentQuizIndex + 1} / {currentQuizzes.length}
            </span>
            <span className="text-sm text-gray-600">
              スコア: {score} / {currentQuizzes.length}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all"
              style={{
                width: `${((currentQuizIndex + 1) / currentQuizzes.length) * 100}%`
              }}
            />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">
            {currentQuizzes[currentQuizIndex].question}
          </h2>
          
          <div className="space-y-3">
            {currentQuizzes[currentQuizIndex].options.map((option, index) => (
              <button
                key={index}
                onClick={() => !showResult && handleAnswerSelect(index)}
                className={`w-full p-4 text-left rounded-lg border transition-all ${
                  showResult
                    ? index === currentQuizzes[currentQuizIndex].correctAnswer
                      ? 'bg-green-50 border-green-500'
                      : index === selectedAnswer
                      ? 'bg-red-50 border-red-500'
                      : 'border-gray-200'
                    : 'hover:bg-gray-50 border-gray-200'
                }`}
                disabled={showResult}
              >
                <div className="flex items-center justify-between">
                  <span>{option}</span>
                  {showResult && index === currentQuizzes[currentQuizIndex].correctAnswer && (
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                  )}
                  {showResult && 
                    index === selectedAnswer && 
                    index !== currentQuizzes[currentQuizIndex].correctAnswer && (
                      <XCircle className="w-5 h-5 text-red-500" />
                  )}
                </div>
              </button>
            ))}
          </div>

          {showResult && (
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <p className="text-gray-700">
                {currentQuizzes[currentQuizIndex].explanation}
              </p>
            </div>
          )}
        </div>

        {/* ナビゲーションボタン */}
        <div className="flex justify-between mt-4 gap-4">
          <button
            onClick={handlePreviousQuiz}
            disabled={currentQuizIndex === 0}
            className={`px-4 py-3 rounded-lg flex items-center ${
              currentQuizIndex === 0
                ? 'bg-gray-300 cursor-not-allowed'
                : 'bg-gray-600 hover:bg-gray-700'
            } text-white`}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            前の問題
          </button>

          {showResult && (
            <button
              onClick={handleNextQuiz}
              className="px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center"
            >
              <span>{currentQuizIndex === currentQuizzes.length - 1 ? '結果を見る' : '次の問題'}</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          )}
        </div>

        {/* ホームに戻るボタン */}
        <div className="text-center mt-8">
          <button
            onClick={() => navigate('/')}
            className="text-gray-600 hover:text-gray-800 flex items-center justify-center mx-auto"
          >
            <Home className="w-4 h-4 mr-2" />
            コース選択に戻る
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;