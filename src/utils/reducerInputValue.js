 function useFormatCpf(state) {
  const array = state.split('');
 
     return array.reduce(
       (acc, str) =>
         acc.length === 3 || acc.length === 7
           ? acc + '.'
           : acc.length === 11 
           ? acc + '-'
           : acc += str,
       ''
     );  
} 

export default useFormatCpf
/* 
export const reducerInputValue = (arrayOfStr) => { 

  arrayOfStr.reduce(
    (acc, str) =>
      acc.length === 3 || acc.length === 7
        ? acc + '.'
        : acc.length === 11
        ? acc + '-'
        : acc += str,
    ''
  ); */
