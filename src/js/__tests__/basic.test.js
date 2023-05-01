import { orderByProps } from "../character.js";

describe('orderByProps', () => {
  it('should return an array of objects sorted by order array if all properties from the object are present in the order array', () => {
    const obj = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40};
    const order = ["name", "level", "health", "attack", "defence"];
    const expectedResult = [
      {key: 'name', value: 'мечник'},
      {key: 'level', value: 2},
      {key: 'health', value: 10},
      {key: 'attack', value: 80},
      {key: 'defence', value: 40}
    ];
    
    const result = orderByProps(obj, order);
    
    expect(result).toEqual(expectedResult);
  });
  
  it('should return an array of objects sorted by order array and sorted by alphabetical order of the rest properties if not all properties from the object are present in the order array', () => {
    const obj = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40};
    const order = ["name", "level"];
    const expectedResult = [
      {key: 'name', value: 'мечник'},
      {key: 'level', value: 2},
      {key: 'attack', value: 80},
      {key: 'defence', value: 40},
      {key: 'health', value: 10}
    ];
    
    const result = orderByProps(obj, order);
    
    expect(result).toEqual(expectedResult);
  });
  
  it('should return an array of objects sorted in alphabetical order if order array is empty', () => {
    const obj = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40};
    const order = [];
    const expectedResult = [
      {key: 'attack', value: 80},
      {key: 'defence', value: 40},
      {key: 'health', value: 10},
      {key: 'level', value: 2},
      {key: 'name', value: 'мечник'}
    ];
    
    const result = orderByProps(obj, order);
    
    expect(result).toEqual(expectedResult);
  });
});