const cardTypes = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+2', 'reverse', 'skip'];
const actionCardTypes = ['+4', 'colorChange'];
const colors = ['red', 'green', 'blue', 'yellow'];

export const getCards = () => colors.flatMap(color => cardTypes.flatMap(type => ({ type, color })));
