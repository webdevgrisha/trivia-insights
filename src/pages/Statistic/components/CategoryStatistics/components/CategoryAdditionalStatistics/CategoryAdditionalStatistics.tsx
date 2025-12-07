import React from 'react';
import { ProgressBar } from '../../../../../../components/ProgressBar/ProgressBar';
import { ErrorStatus } from '../../../../../../components/Statuses';
import { BarChartSection } from '../../../BarChartSection/BarChartSection';
import layoutStyles from '../../../StatisticLayout.module.css';
import { TypeQuestionStatistics } from './components/TypeQuestionStatistics/TypeQuestionStatistics';
import { questionLengthBarInfo } from './config/chartsConfigs';
import { useQuestionStatistic } from './hooks/useQuestionStatistic';
import { createQuestionLengthHistogram, getQuestionTypeStats } from './utils';

interface CategoryQuestionsStatisticsProps {
  categoryId: string;
  questionCount: number;
}

function CategoryAdditionalStatistics({
  categoryId,
  questionCount,
}: CategoryQuestionsStatisticsProps) {
  const {
    data: questions,
    error,
    isLoading,
    progress,
  } = useQuestionStatistic(categoryId, questionCount);

  const { multiple: multipleQuestionStatistic, boolean: booleanQuestionStatistic } = React.useMemo(
    () => getQuestionTypeStats(questions || []),
    [questions]
  );

  const lengthHistogramData = React.useMemo(
    () => createQuestionLengthHistogram(questions || []),
    [questions]
  );

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
      <BarChartSection
        title={'Question length distribution'}
        barInfo={questionLengthBarInfo}
        data={lengthHistogramData}
      />
    </>
  );
}

export { CategoryAdditionalStatistics };
