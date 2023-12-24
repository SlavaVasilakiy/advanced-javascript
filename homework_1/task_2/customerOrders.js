const customerOrders = new Map();

const orderAlexey = new Set(['Пицца "Пепперони"', 'Тирамису']);
const orderMaria = new Set(['Суши "Калифорния"', 'Пицца "Маргарита"']);
const orderIrina = new Set(['Чизкейк']);

customerOrders.set({ name: 'Алексей' }, orderAlexey);
customerOrders.set({ name: 'Мария' }, orderMaria);
customerOrders.set({ name: 'Ирина' }, orderIrina);

export default customerOrders;
