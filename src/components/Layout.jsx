import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Code, BookOpen, Layout as LayoutIcon, User } from 'lucide-react';

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* ヘッダー */}
      <header className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* ロゴ部分 */}
            <Link to="/" className="flex items-center space-x-2">
              <Code className="h-8 w-8 text-white" />
              <div>
                <h1 className="text-xl font-bold text-white">PyLearn</h1>
                <p className="text-xs text-purple-200">Python Certification Learning</p>
              </div>
            </Link>

            {/* デスクトップナビゲーション */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/" className="inline-flex items-center text-purple-100 hover:text-white">
                <BookOpen className="h-4 w-4 mr-1" />
                <span>学習を始める</span>
              </Link>
              <Link to="/dashboard" className="inline-flex items-center text-purple-100 hover:text-white">
                <LayoutIcon className="h-4 w-4 mr-1" />
                <span>マイページ</span>
              </Link>
              <Link 
                to="/login" 
                className="inline-flex items-center px-4 py-2 rounded-full
                          bg-white text-purple-600 hover:bg-purple-100
                          transition duration-150"
              >
                <User className="h-4 w-4 mr-1" />
                <span>ログイン</span>
              </Link>
            </nav>

            {/* モバイルメニューボタン */}
            <button
              className="md:hidden p-2 rounded-md text-purple-200 hover:text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* モバイルナビゲーション */}
          {isMenuOpen && (
            <div className="md:hidden py-4">
              <div className="flex flex-col space-y-4">
                <Link 
                  to="/" 
                  className="text-purple-100 hover:text-white px-3 py-2 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  学習を始める
                </Link>
                <Link 
                  to="/dashboard" 
                  className="text-purple-100 hover:text-white px-3 py-2 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  マイページ
                </Link>
                <Link 
                  to="/login" 
                  className="text-purple-100 hover:text-white px-3 py-2 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  ログイン
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* 下部の装飾的な波形 */}
        <div className="h-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
      </header>

      {/* メインコンテンツ */}
      <main className="flex-grow">
        {children}
      </main>

      {/* フッター */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm">© {new Date().getFullYear()} PyLearn - プログラミング学習プラットフォーム</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;