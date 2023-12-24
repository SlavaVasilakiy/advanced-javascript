export default function outputCustomerOrdersInfo(
	customerOrders,
	dishesToChefs,
	chefsSpecializations
) {
	customerOrders.forEach((order, customer) => {
		console.log(`${customer.name} заказал(а):`);
		order.forEach(dish => {
			const chef = dishesToChefs.get(dish);
			const specialization = chefsSpecializations.get(chef);
			console.log(`- ${dish}, готовит ${chef} (${specialization})`);
		});
		console.log('---');
	});
}
