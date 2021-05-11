

    function ran(min, max) {
        let num = Math.floor(Math.random() * (max + 1 - min)+min);
        return num;
      }
    
      let minInt = +prompt('Введите минимальное число');    
      let maxInt = +prompt('Введите махсимальное число');
    
      for (let i = 0; i < 10; i++) {
          let num1 = ran(minInt, maxInt);
          let num2 = ran(minInt, maxInt);

          let pr = +prompt(num1+ '+' + num2)
          let pr2 = +prompt(num1+ '-' + num2)
          let pr3 = +prompt(num1+ '*' + num2)
          let pr4 = +prompt(num1+ '/' + num2)

          let answer = (num1 + num2) == pr ? 'Молодец' : 'Ошибка';
          let answer2 = (num1 - num2) == pr2 ? 'Молодец' : 'Ошибка';
          let answer3 = (num1 * num2) == pr3 ? 'Молодец' : 'Ошибка';
          let answer4 = (num1 / num2) == pr4 ? 'Молодец' : 'Ошибка';

          alert(num1 + '+' + num2 + ' = ' + (num1 + num2) + ' ваш ответ' + pr + '->' + answer) 
          alert(num1 + '-' + num2 + ' = ' + (num1 - num2) + ' ваш ответ' + pr2 + '->' + answer2) 
          alert(num1 + '*' + num2 + ' = ' + (num1 * num2) + ' ваш ответ' + pr3 + '->' + answer3) 
          alert(num1 + '/' + num2 + ' = ' + (num1 / num2) + ' ваш ответ' + pr4 + '->' + answer4) 

        }
