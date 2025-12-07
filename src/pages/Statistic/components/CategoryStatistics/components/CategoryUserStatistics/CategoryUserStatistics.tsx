import React from 'react';
import { Link } from 'react-router';
import { NoDataStatus } from '../../../../../../components/Statuses';
import { useAnsweredQuestions } from '../../../../../Questions/hooks/useAnsweredQuestions';
import { BarChartSection } from '../../../BarChartSection/BarChartSection';
import layoutStyles from '../../../StatisticLayout.module.css';
import styles from './CategoryUserStatistics.module.css';
import { UserTypeQuestionStatistics } from './components/UserTypeQuestionStatistics/UserTypeQuestionStatistics';
import { userDifficultyBarInfo } from './config/userChartsConfigs';
import { createUserDifficultyBarData } from './utils/createUserDifficultyBarData';
import { getUserDifficultyStats } from './utils/getUserDifficultyStats';
import { getUserQuestionTypeStats } from './utils/getUserQuestionTypeStats';

interface CategoryUserStatisticsProps {
  categoryId: string;
}

function CategoryUserStatistics({ categoryId }: CategoryUserStatisticsProps) {
  const { answers } = useAnsweredQuestions(categoryId);
  const questionsLink = `/category/${categoryId}/questions`;

  const hasAnswers = React.useMemo(() => Object.keys(answers).length > 0, [answers]);

  const { multiple: multipleStats, boolean: booleanStats } = React.useMemo(
    () => getUserQuestionTypeStats(answers),
    [answers]
  );

  const difficultyStats = React.useMemo(() => getUserDifficultyStats(answers), [answers]);

  const data = React.useMemo(() => createUserDifficultyBarData(difficultyStats), [difficultyStats]);

  if (!hasAnswers) {
    return (
      <div className={layoutStyles.statisticStatus}>
        <NoDataStatus
          title="No answers yet"
          text="We can't build statistics for this category because you haven't answered any questions yet."
          action={
            <Link to={questionsLink} className={styles.link}>
              Go to questions
            </Link>
          }
        />
      </div>
    );
  }

  return (
    <>
      <UserTypeQuestionStatistics totals={multipleStats} title="Your answers – multiple choice" />
      <UserTypeQuestionStatistics totals={booleanStats} title="Your answers – True / False" />
      <BarChartSection
        title="Your answers by difficulty"
        barInfo={userDifficultyBarInfo}
        data={data}
      />
    </>
  );
}

export { CategoryUserStatistics };
