import { useLocation, useNavigate, useParams } from 'react-router';

interface UseCategoryIdResult {
  rawCategoryId?: string;
  categoryId: string;
  isAllCategory: boolean;
  setCategoryId: (nextId: string, options?: SetCategoryIdOptions) => void;
}

interface SetCategoryIdOptions {
  subPath?: 'statistic' | 'questions';
  preserveSearch?: boolean;
  replace?: boolean;
}

function useCategoryId(): UseCategoryIdResult {
  const { categoryId: rawCategoryId } = useParams<{ categoryId?: string }>();
  const location = useLocation();
  const navigate = useNavigate();

  const categoryId = rawCategoryId ?? '0';
  const isAllCategory = categoryId === '0';

  const setCategoryId = (nextId: string, options?: SetCategoryIdOptions) => {
    const currentSubPath = location.pathname.includes('/questions') ? 'questions' : 'statistic';
    const targetSubPath = options?.subPath ?? currentSubPath;

    const searchParams = new URLSearchParams(options?.preserveSearch ? location.search : '');

    if (targetSubPath === 'questions') {
      searchParams.delete('tab');
    }

    const searchString = searchParams.toString();

    navigate(
      {
        pathname: `/category/${nextId}/${targetSubPath}`,
        search: searchString ? `?${searchString}` : '',
      },
      { replace: options?.replace ?? true }
    );
  };

  return { rawCategoryId, categoryId, isAllCategory, setCategoryId };
}

export { useCategoryId };
