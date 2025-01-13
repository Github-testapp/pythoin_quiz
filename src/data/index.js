// すべてのインポートを先頭にまとめる
import { basicQuizData } from './basicQuizData';
import { analysisQuizData } from './analysisQuizData';
import { practiceQuizData } from './practiceQuizData';

// 個別のデータをエクスポート
export { basicQuizData } from './basicQuizData';
export { analysisQuizData } from './analysisQuizData';
export { practiceQuizData } from './practiceQuizData';

// 結合したクイズデータをエクスポート
export const quizData = {
  'basic-beginner': basicQuizData['basic-beginner'],
  'basic-intermediate': basicQuizData['basic-intermediate'],
  'basic-advanced': basicQuizData['basic-advanced'],
  'analysis-beginner': analysisQuizData['analysis-beginner'],
  'analysis-intermediate': analysisQuizData['analysis-intermediate'],
  'analysis-advanced': analysisQuizData['analysis-advanced'],
  'practice-beginner': practiceQuizData['practice-beginner'],
  'practice-intermediate': practiceQuizData['practice-intermediate'],
  'practice-advanced': practiceQuizData['practice-advanced']
};