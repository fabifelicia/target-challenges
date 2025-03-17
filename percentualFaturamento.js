const dados = [
  { estado: "SP", valor: 67836.43 },
  { estado: "RJ", valor: 36678.66 },
  { estado: "MG", valor: 29229.88 },
  { estado: "ES", valor: 27165.48 },
  { estado: "Outros", valor: 19849.53 }
];

const media = (dados.reduce((acc, item) => acc + item.valor, 0)) / dados.length

const percentuais = dados.map(item => {
  return {
    estado : item.estado,
    percentual : `${ ((item.valor / media) * 100).toFixed(2) }%`
  }
})

console.log(percentuais)






