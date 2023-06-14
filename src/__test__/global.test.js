import renderer from 'react-test-renderer';
import Link from './prueba';


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



