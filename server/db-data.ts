export const EXPENSES = {
  0: {
    id: 0,
    category: 'Grocery',
    itemName: 'Millk',
    amount: 50,
    expenseDate: '24.12.12',
  },
  1: {
    id: 1,
    category: 'adad',
    itemName: 'Miwrwrwllk',
    amount: 150,
    expenseDate: '24.12wwr.12',
  },
  2: {
    id: 2,
    category: 'ada',
    itemName: 'Miwrwrwllk',
    amount: 250,
    expenseDate: '24.12wrwr.12',
  },
  3: {
    id: 3,
    category: 'adad',
    itemName: 'Millawrawrk',
    amount: 350,
    expenseDate: '24.12.1wrwr2',
  },
};

export function findExpenseById(expenseId: number) {
  return EXPENSES[expenseId];
}
