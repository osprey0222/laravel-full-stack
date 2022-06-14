import React from 'react'
import renderer from 'react-test-renderer'
import Header from './Header'

test('it works', () => {
    expect(true).toBe(true);
})

test('it renders', () => {
    const component = renderer.create(<Header />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
})
