export const getMondays = () => {
   // return array of all Mondays for current year
   const thisYear = new Date().getFullYear()
   let date = new Date(thisYear, 0);
   const nextYear = date.getFullYear() + 1;
   const mondays = [];    
  //get first Monday
   mondays.push(new Date((date.setDate(date.getDate() + (8 - (date.getDay() || 7)) % 7))));
  //get the rest of the Mondays 
   while (Number(date.getFullYear()) < nextYear) {
     mondays.push(new Date(date.setDate(date.getDate() + 7)))
   }
  //filter out any dates from next year
  const mondaysOf2018 = mondays.filter(date => date.getFullYear() === 2018);
  
  return mondaysOf2018;
 
}