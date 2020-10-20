let nota = 4

if( nota >= 7){
    console.log('Aprovado '+nota)

    if( nota >=9 ){

        console.log('Aprovado acima da media '+nota)

    }else{
        console.log('Precisa melhorar !! '+nota)
    }

}else{
    if(nota <=3 ){

        console.log('Reprovado '+nota)
       
    }else{
        console.log('recuperação '+nota)
        
    }
}