const paymentsCard = {
    cash: '100$'
};
const creditCard = {
    creditLinit: '50$',
    cash: '200$'
}

function assign(target, ...sources) {
    sources.forEach(function (source) {
        for (let key in source) {
            if (source.hasOwnProperty(key)) {
                target[key] = source[key];
            }
        }
    })
    return target;
}


assign({}, creditCard, paymentsCard);