import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './css/loadingpage.scss';

interface LoadingPageProps {
  isLoading?: boolean;
  onLoadingComplete?: () => void;
}

const LoadingPage: React.FC<LoadingPageProps> = ({
  isLoading = true,
  onLoadingComplete,
}) => {
  const { t } = useTranslation();

  const [progress, setProgress] = useState(0);
  const [shouldHide, setShouldHide] = useState(false);

  useEffect(() => {
    if (!isLoading) return;

    const startTime = Date.now();
    const duration = 800;
    let animationId: number;

    const animateProgress = () => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min(100, (elapsed / duration) * 100);
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
    if (!isLoading) {
      const timer = setTimeout(() => {
        setShouldHide(true);
        onLoadingComplete?.();
      }, 300);
      return () => clearTimeout(timer);
    } else {
      setShouldHide(false);
      setProgress(0);
    }
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

        <div className="loading-page__percentage">{Math.floor(progress)}%</div>

        <div className="loading-page__tips">
          <span className="loading-page__tips-text">{t("index.loading")}</span>
          <span className="loading-page__tips-dots">
            <span>.</span><span>.</span><span>.</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;
