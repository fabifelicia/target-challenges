function fibonacci(n) {
  const sequence = [0, 1];
  
  for (let i = 2; i <= n; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }  
  return sequence;
}

const numero = 4; 

function pertenceFibonacci(numero) {
  const fibSeq = fibonacci(numero);
  return fibSeq.includes(numero);  
}


console.log(pertenceFibonacci(numero));

