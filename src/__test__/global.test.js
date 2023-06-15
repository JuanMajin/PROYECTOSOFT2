import renderer from 'react-test-renderer';
import Link from './prueba';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Controls from '../components/audioPlayer/controls';
import axios from 'axios';
import { setClientToken } from '../spotify';

jest.mock('axios');

it('changes the class when hovered', () => {
  const component = renderer.create(
    <Link page="http://www.facebook.com">Facebook</Link>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  renderer.act(() => {
    tree.props.onMouseEnter();
  });
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  renderer.act(() => {
    tree.props.onMouseLeave();
  });
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

const text="Hola Mundo";

describe('Pruebas iniciales: Strings', () => {
  test('Debe contener un texto ', () => {
      expect(text).toMatch(/Mundo/);
  });
});

describe('ProductHeader', () => {
  it('passing test', () => {
    expect(true).toBeTruthy();
  })
  it('failing test', () => {
    expect(false).toBeFalsy();
  })
})

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

describe('apiClient', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should set client token in the request headers', async () => {
    const token = 'your-access-token';

    setClientToken(token);

    // Verificar que la función use de interceptors.request se haya llamado
    expect(axios.interceptors.request.use).toHaveBeenCalled();

    // Obtener el callback pasado a la función use de interceptors.request
    const callback = axios.interceptors.request.use.mock.calls[0][0];

    // Crear una configuración de solicitud de prueba
    const config = {
      headers: {},
    };

    // Llamar al callback de la interceptación de solicitud con la configuración de prueba
    const updatedConfig = await callback(config);

    // Verificar que el token se haya establecido correctamente en la configuración
    expect(updatedConfig.headers.Authorization).toBe(`Bearer ${token}`);
  });
})


