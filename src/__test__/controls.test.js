import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Controls from '../components/audioPlayer/controls';

describe('Controls', () => {
  it('should call handlePrev when previous button is clicked', () => {
    const handlePrevMock = jest.fn();
    const { getByTestId } = render(
      <Controls handlePrev={handlePrevMock} />
    );

    const prevButton = getByTestId('prev-button');
    fireEvent.click(prevButton);

    expect(handlePrevMock).toHaveBeenCalledTimes(1);
  });

  it('should call handleNext when next button is clicked', () => {
    const handleNextMock = jest.fn();
    const { getByTestId } = render(
      <Controls handleNext={handleNextMock} />
    );

    const nextButton = getByTestId('next-button');
    fireEvent.click(nextButton);

    expect(handleNextMock).toHaveBeenCalledTimes(1);
  });

  it('should toggle isPlaying state when play/pause button is clicked', () => {
    const setIsPlayingMock = jest.fn();
    const { getByTestId } = render(
      <Controls isPlaying={false} setIsPlaying={setIsPlayingMock} />
    );

    const playPauseButton = getByTestId('play-pause-button');
    fireEvent.click(playPauseButton);

    expect(setIsPlayingMock).toHaveBeenCalledTimes(1);
    expect(setIsPlayingMock).toHaveBeenCalledWith(true);
  });
});