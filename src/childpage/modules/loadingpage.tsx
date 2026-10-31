import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './css/loadingpage.scss';

interface LoadingPageProps {
  isLoading?: boolean;
  onLoadingComplete?: () => void;
  l_bg?: boolean;
  l_subt?: boolean;
  l_i18n?: boolean;
}

const LoadingPage: React.FC<LoadingPageProps> = ({
  isLoading = true,
  l_bg = true,
  l_subt = true,
  l_i18n = true,
  onLoadingComplete,
}) => {
  const { t } = useTranslation();

  const [progress, setProgress] = useState<number>(0);
  const [shouldHide, setShouldHide] = useState<boolean>(false);

  useEffect(() => {
    if (!isLoading) return;

    const startTime: number = Date.now();
    const duration: number = 800;
    let animationId: number;

    const animateProgress = () => {
      const elapsed: number = Date.now() - startTime;
      const newProgress: number = Math.min(100, (elapsed / duration) * 100);
      setProgress(newProgress);

      if (newProgress < 100) {
        animationId = requestAnimationFrame(animateProgress);
      }
    };

    animationId = requestAnimationFrame(animateProgress);

    return () => {
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, [isLoading]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldHide(!isLoading);
      onLoadingComplete?.();
    }, 300);
    return () => clearTimeout(timer);
  }, [isLoading, onLoadingComplete]);

  if (shouldHide) return null;

  return (
    <div className={`loading-page ${!isLoading ? 'loading-page--fade-out' : ''}`}>
      <div className="loading-page__container">
        <div className="loading-page__progress">
          <div
            className="loading-page__progress-bar"
            style={{ width: `${progress}%` }}
          >
            <div className="loading-page__progress-glint" />
          </div>
        </div>

        <div className="loading-page__tips">
          <span className="loading-page__tips-text">{t("index.loading")}</span>
          <span className="loading-page__tips-dots">
            {["", "", ""].map((_, index: number) => (
              <span key={index}>.</span>
            ))}
          </span>
        </div>
        <div className="loading-page__tips loaditem">
          {([[l_bg, "background"], [l_subt, "subtitle"], [l_i18n, "i18n"]] as [boolean, string][]).map(
            (item: [boolean, string], index: number) => (
              <span
                key={index}
                className="loading-page__tips-text loaditem"
                style={{opacity: item[0] ? "20%" : ""}}>{item[1]}{item[0] ? " OK" : ""}</span>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;
