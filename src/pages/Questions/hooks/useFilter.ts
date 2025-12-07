import React from 'react';
import { useImmer } from 'use-immer';
import { SessionStore } from '../../../utils';
import type { QuestionFilterType } from '../types/interfaces';

const INITIAL_FILTERS: QuestionFilterType = {
  difficulty: null,
  type: null,
  isAnswered: null,
};

const CACHE_PREFIX = 'filters';

function initFilters() {
  const cached = SessionStore.load<QuestionFilterType>(CACHE_PREFIX);

  return cached ?? INITIAL_FILTERS;
}

function useFilter() {
  const [draftFilters, setDraftFilters] = useImmer<QuestionFilterType>(initFilters);

  const [appliedFilters, setAppliedFilters] = React.useState<QuestionFilterType>(initFilters);

  const handleDraftFilterChange = React.useCallback(
    <K extends keyof QuestionFilterType>(name: K, rawValue: string) => {
      setDraftFilters((draft) => {
        if (rawValue === '') {
          draft[name] = null;
          return;
        }

        draft[name] = rawValue as QuestionFilterType[K];
      });
    },
    [setDraftFilters]
  );

  const applyFilters = React.useCallback(() => {
    setAppliedFilters(draftFilters);

    SessionStore.save<QuestionFilterType>(CACHE_PREFIX, draftFilters);
  }, [draftFilters]);

  const resetFilters = React.useCallback(() => {
    setDraftFilters(() => INITIAL_FILTERS);
    setAppliedFilters(INITIAL_FILTERS);

    SessionStore.remove(CACHE_PREFIX);
  }, [setDraftFilters]);

  return {
    draftFilters,
    appliedFilters,
    handleDraftFilterChange,
    applyFilters,
    resetFilters,
  };
}

export { useFilter };
