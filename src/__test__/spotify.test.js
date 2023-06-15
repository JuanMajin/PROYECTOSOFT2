import axios from 'axios';
import { setClientToken } from '../spotify';

jest.mock('axios');

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