const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const orderModifier = (order) => {
  const info = {
    name: 'Luiz Silva'
  }

  const pay = {
    payment: {
      total: 50,
    }
  }

  let newRegistration = Object.assign(order, info, pay);
  console.log(`Olá ${newRegistration.name} o total do seu pedido de Muzzarella, calabresa e ${newRegistration.order.drinks.coke.type} é R$${newRegistration.payment.total},00.`);
}

orderModifier(order);