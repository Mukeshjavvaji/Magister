function Myfunction(){
    var d = new Array()
        for (i=1;i<=40;i++){
        
            if(document.getElementById(i).checked){
                d.push(document.getElementById(i).value)
            }
        }
        
    console.log(d)
    var ans = ['12,000','bananas','cheese','2.5','belgium','mountain','bento','hot','seed','white']
    var result = 0
    for (k=0;k<10;k++){
        if(d[k]==ans[k]){
            result+=1
        }
    }
    window.alert("Your Result is "+result)
    Mystorage= window.localStorage;
    if(localStorage.clickcount){
        localStorage.clickcount = Number(localStorage.clickcount)+1;
    }else{
        localStorage.clickcount=1;
    }

    localStorage.setItem(localStorage.clickcount, result); 
}

