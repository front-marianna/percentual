// Dados de faturamento por estado (em reais)
const faturamentoPorEstado = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53
};


function calcularPercentuais(faturamentos) {
  const faturamentoTotal = Object.values(faturamentos).reduce((total, valor) => total + valor, 0);

  const percentuais = Object.keys(faturamentos).reduce((acc, estado) => {
    const valorEstado = faturamentos[estado];
    const percentual = ((valorEstado / faturamentoTotal) * 100).toFixed(2);
    return { ...acc, [estado]: `${percentual}%` }; 
  }, {});

  return percentuais;
}

const resultado = calcularPercentuais(faturamentoPorEstado);
console.log(resultado);