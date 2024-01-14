//https://leetcode.com/problems/house-robber/solutions/55953/3-lines-solution-in-javascript/
// La variable p registra los 2 valores máximos anteriores: p[1] es el anterior y p[0] es el anterior al anterior.
// p se inicializa como [0,0]. 
//La variable n es el valor en cada posición.
const maxRobe=function(nums){
  let p=[0,0];
  n=0;
  return nums.reduce(function(p, n) { 
    return [p[1], Math.max(p[0] + n, p[1])]; 
  }, [0,0])[1];
}


console.log('----',maxRobe( [ 2, 7, 9, 3, 1 ])) //2,9,1