import chefsSpecializations from './chefsSpecializations.js';
import dishesToChefs from './dishesToChefs.js';
import customerOrders from './customerOrders.js';
import printOrdersInfo from './printOrdersInfo.js';

// Выводим информацию о заказах и поварах
printOrdersInfo(customerOrders, dishesToChefs, chefsSpecializations);
