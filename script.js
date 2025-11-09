const form = document.getElementById('form');
form.addEventListener('submit', handleSubmit);

const inputValue = document.getElementById('value-real');
const selectedCurrency = document.getElementById('currency');
const result = document.getElementById('result');

let valueConvert = 0;

function handleSubmit(event) {
    event.preventDefault();

    // 2. É bom usar parseFloat aqui também para a verificação
    const valueAsNumber = parseFloat(inputValue.value);

    if (!valueAsNumber || valueAsNumber <= 0) {
        alert('Por favor, insira um valor válido em Reais.');
        return;
    } else if (!selectedCurrency.value) {
        alert('Por favor, selecione uma moeda para conversão.');
        return;
    }

    converter();
};

function converter() {

    const valueToConvert = parseFloat(inputValue.value);

    if (selectedCurrency.value === 'eur') {
        valueConvert = valueToConvert * 6.17; 
        result.innerHTML = valueFormatter('pt-BR', 'EUR');
        animateResult();

    } else if (selectedCurrency.value === 'dol') {
        valueConvert = valueToConvert * 5.33; 
        result.innerHTML = valueFormatter('en-US', 'USD');
        animateResult();

    } else if (selectedCurrency.value === 'lib') {
        valueConvert = valueToConvert * 7.02; 
        result.innerHTML = valueFormatter('pt-BR', 'GBP');
        animateResult();

    } else if (selectedCurrency.value === 'iene') {
        valueConvert = valueToConvert * 0.035; 
        result.innerHTML = valueFormatter('pt-BR', 'JPY');
        animateResult();

    } else if (selectedCurrency.value === 'yuan') {
        valueConvert = valueToConvert * 0.75; 
        result.innerHTML = valueFormatter('pt-BR', 'CNY');
        animateResult();
    }

    inputValue.value = '';
    selectedCurrency.value = '';
};

function valueFormatter(locale, currency) {

    const value = valueConvert.toLocaleString(`${locale}`, { style: 'currency', currency: `${currency}` });
    return `<span>💲 O valor convertido é: ${value}</span>`; 
};

function animateResult() {
    return result.animate([
        { transform: 'translateY(-150px)', opacity: 0 },        
        { transform: 'translateY(0px)', opacity: 1 }
    ],

        { duration: 800,
        easing: 'ease-out'})

    };
