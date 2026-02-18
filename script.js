function poschitatSummu(cenaZaPorciyu, kolichestvo) {
    let itogo = cenaZaPorciyu * kolichestvo;
    if (itogo > 1500) {
        alert("Ого, большой заказ! Доставка будет бесплатной.");
}  else {
        alert("Сумма заказа: " + itogo + ". Доставка 200 рублей.");
}
}


