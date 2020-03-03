class VigenereCipheringMachine {
    constructor(direct=true){
        this.direct = direct;
    }

    encrypt(message, key) {
        if (message === undefined || 
            key === undefined) throw new Error();
        
        console.log('message',message);
        console.log('key',key);
        
        // приводим и сообщение и ключ к прописному регистру
        let m = message.toUpperCase().split(''); 
        let k = key.toUpperCase();


        // приведение ключа к длинне сообщения
        if (k.length < m.length) {
            k = k.repeat(m.length / k.length + 1).split('');
            k.length = m.length;
            m.forEach((el,ind) => (el.charCodeAt() > 64 && el.charCodeAt() < 91) ? k[ind] : k.splice(ind,0,el)) // проверка на символы, 
        }
        

        // создаем хранилище результата
        let res = [];
        
        // помещаем в результат элементы
        m.forEach((el,ind) => {
            if (el.charCodeAt() > 64 && el.charCodeAt() < 91) {
                let tmp = ( m[ind].charCodeAt() + k[ind].charCodeAt() - 128 ) % 26;
                tmp ? res.push(tmp + 63) : res.push(tmp + 89);            
            }
            else res.push(el.charCodeAt());
        })

        // если машина прямо-кодируемая, кодируем обычным способом, а иначе разворачиваем результат перед выводом 
        if (this.direct) return String.fromCharCode(...res);
        else return String.fromCharCode(...res.reverse())
    }







    decrypt(encryptedMessage, key) {
        if (encryptedMessage === undefined || 
            key === undefined) throw new Error();
        
        console.log('encryptedMessage',encryptedMessage);
        console.log('key',key);

        // разворачиваю закодированное значение если машина в обратном направлении закодирована
        let m = this.direct 
                 ? encryptedMessage.toUpperCase().split('') 
                 : encryptedMessage.toUpperCase().split('').reverse();

        let k = key.toUpperCase();
        
        // приводим длинну k к длинне m
             
        if (k.length < m.length) {
            k = k.repeat(m.length / k.length + 1).split('');
            k.length = m.length;
        }
        else {
            k = k.split('');
            k.length = m.length;
        }
        
        m.forEach((el,ind) => (el.charCodeAt() > 64 && el.charCodeAt() < 91) ? k[ind] : k.splice(ind,0,el)); // проверка на символы, 

        k = this.direct 
            ? k
            : k.reverse();
        
        console.log('m',m);
        console.log('k',k);
        let res = [];
        
        m.forEach((el,ind) => {
                    if (el.charCodeAt() > 64 && el.charCodeAt() < 91) {
                    let tmp = ((m[ind].charCodeAt()-64) + 26 - (k[ind].charCodeAt()-64)) % 26;
                    res.push( tmp + 65);            
                    }

                    else res.push(el.charCodeAt())
        })
        console.log('res',res);

        if (this.direct) return String.fromCharCode(...res);
        else return String.fromCharCode(...res.reverse()).split('').reverse().join('');
    }
}

module.exports = VigenereCipheringMachine;
