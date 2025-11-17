import { ProgressBar } from '../../../../../ProgressBar/ProgressBar';
import { ErrorStatus } from '../../../../../Statuses';
import layoutStyles from '../../../StatisticLayout.module.css';
import { TypeQuestionStatistics } from './components/TypeQuestionStatistics/TypeQuestionStatistics';
import { useQuestionStatistic } from './hooks/useQuestionStatistic';
import { formatQuestions } from './utils/formatQuestions';

interface CategoryQuestionsStatisticsProps {
  categoryId: string;
  questionCount: number;
}

function CategoryQuestionsStatistics({
  categoryId,
  questionCount,
}: CategoryQuestionsStatisticsProps) {
  const { data, error, isLoading, progress } = useQuestionStatistic(categoryId, questionCount);

  if (isLoading) {
    return <ProgressBar value={progress} label="Loading questions..." />;
  }

  if (error) {
    return (
      <div className={layoutStyles.statisticStatus}>
        <ErrorStatus
          title="Failed to load statistics"
          text="Please check your connection and try again."
        />
      </div>
    );
  }

  const { multiple: multipleQuestionStatistic, boolean: booleanQuestionStatistic } =
    formatQuestions(data || []);

  return (
    <>
      <TypeQuestionStatistics
        totals={multipleQuestionStatistic}
        title="Multiple choice - question statistics"
      />
      <TypeQuestionStatistics
        totals={booleanQuestionStatistic}
        title="True / False - question statistics"
      />
    </>
  );
}

export { CategoryQuestionsStatistics };
